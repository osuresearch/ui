
import { Comment, Section } from './types';
import TableOfContentsElement from './TableOfContentsElement';
import SidebarElement from './SidebarElement';
import CommentElement from './CommentElement';
import CSSElement from './CSSElement';

/**
 * Management for a document that can be commented on by the end user
 * 
 * This is a pure Javascript component - as the document could exist
 * within an IFrame without any external Javascript support (e.g. React)
 */
export default class ReviewManager {
    SECTION_DATA_ATTR = 'data-comment-section';
    BLOCK_COMMENT_DATA_ATTR = 'data-comment-block';
    INLINE_COMMENT_DATA_ATTR = 'data-comment-inline';

    // Event handlers that API integration components can provide
    public onAddComment?: (comment: Comment) => void;
    public onUpdateComment?: (comment: Comment) => void;
    public onRemoveComment?: (comment: Comment) => void;

    /**
     * Display name for any new comments or replies
     */
    public defaultOwner: string;

    /**
     * Default access control if any `Comment.canEdit/canDelete` are undefined.
     * 
     * If false, only comments with `Comment.owner === defaultOwner` will be editable.
     */
    public canEditAnyComment: boolean;

    /** 
     * Flat list of pre-existing comments to load on bind. 
     * 
     * Typically this will be set by some backend API.
     */
    public initialComments?: Comment[];

    /** The IFrame document to inject DOM/CSS into */
    private document: Document;

    // Custom elements to add to the document
    private sidebar?: SidebarElement;
    private toc?: TableOfContentsElement;
    private css?: CSSElement;

    private sections: Map<string, Section>;
    private commentElements: Map<number, CommentElement>;
    
    constructor() { 
        this.defaultOwner = '(me)';
        this.canEditAnyComment = false;
        this.sections = new Map<string, Section>();
        this.commentElements = new Map<number, CommentElement>();
        
        // TODO: I initialize to the current document instead of the iframe
        // just to make things easier on the linter. But, honestly, this 
        // manager should be instantiated once the iframe document is ready.
        this.document = document;

        this.internalOnChangeComment = this.internalOnChangeComment.bind(this);
        this.internalOnDeleteComment = this.internalOnDeleteComment.bind(this);
        this.internalOnReplyComment = this.internalOnReplyComment.bind(this);
    }

    /**
     * Bind this manager to a Document to inject DOM and event handlers.
     */
    bind(document: Document) {
        if (this.sidebar) {
            throw new Error('Cannot bind() a DocumentManager multiple times');
        }

        this.document = document;

        // Reparent the entire body to add a wrapper.
        // This is ... not high performance ... but I need the body wrapped for CSS.
        // TODO: Any way around this?
        const wrapper = document.createElement('div');
        wrapper.classList.add('body-wrapper');
        while (document.body.childNodes.length > 0) {
            wrapper.appendChild(document.body.childNodes[0]);
        }

        document.body.appendChild(wrapper);
        
        this.css = new CSSElement(document);
        this.sidebar = new SidebarElement(document);

        // Generate a dynamic TOC within the document
        this.loadSections();
        this.toc = new TableOfContentsElement(document, this.sections);

        // Bind events to the DOM
        this.bindBlockCommentTargetEvents();
        this.bindInlineCommentTargetEvents();

        // Load any initial comments into the document
        if (this.initialComments) {
            this.loadComments(this.initialComments);
        }

        // Reflow and focus once we get first DOM paint and alignment
        document.defaultView?.requestAnimationFrame(() => {
            this.reflow();
        });
    }

    /**
     * Scan through the document DOM for `data-comment-section` elements and aggregate.
     */
    private loadSections() {
        this.sections.clear();

        const attr = `[${this.SECTION_DATA_ATTR}]`;
        const elements = this.document.querySelectorAll(attr);
        elements.forEach((el) => {
            const title = el.getAttribute(this.SECTION_DATA_ATTR) as string;

            if (!el.id) {
                console.warn(
                    `Section element ${title} does not contain an "id" attribute. ` + 
                    'One will be automatically generated for it'
                );
                
                el.id = 'auto-section-' + title.replace(' ', '');
            }

            if (this.sections.has(title)) {
                throw new Error(
                    `Duplicate sections titled "${title}" in document. ` + 
                    'This will cause incorrect comment to DOM mapping.'
                );
            }

            this.sections.set(title, { el, title });
        });
    }

    public syncComments(comments: Comment[]) {
        // TODO: Better variant of loadComments so we can do cool realtime backend syncing crap.

        // Here, we need to find ID matches, in-place replace the content 
        // of the Comment data, and then CommentElement.refresh().

        // Anything in the new set and not found - we add (just like loadComments)

        // Anything not in the new set and we still have - delete CommentElement.

        throw new Error('Not implemented');
    }

    /**
     * Load a batch of comments into the DOM
     */
    private loadComments(comments: Comment[]) {
        const repliesToAdd: Comment[] = [];

        comments.forEach((comment) => {
            this.validateComment(comment);

            const section = this.sections.get(comment.section);
            if (!section) {
                console.warn(
                    `Ignoring comment "${comment.id}" - missing section "${comment.section}"`
                );
                return;
            }

            // If it's a reply - skip. Will process after all top level comments have been added
            if (comment.parentId) {
                repliesToAdd.push(comment);
                return;
            }
            
            // Add as top level comment
            const target = this.document.querySelector('#' + comment.elementId);
            if (!target) {
                console.warn(
                    `Ignoring comment "${comment.id}" - missing element ID "${comment.elementId}"`
                );
                return;
            }
            
            const commentEl = new CommentElement(this.document, target, comment);
            if (comment.startRange !== comment.endRange) {
                this.bestFitInsertRangeComment(
                    commentEl, 
                    target, 
                    comment.startRange, 
                    comment.endRange
                );
            } else {
                this.bestFitInsertBlockComment(commentEl, target);
            }

            this.bindUserEvents(commentEl);
            this.commentElements.set(comment.id, commentEl);
        });

        repliesToAdd.forEach((reply) => {
            const parentEl = this.commentElements.get(reply.parentId as number);
            if (!parentEl) {
                console.warn(
                    `Ignoring reply "${reply.id}" - missing parent "${reply.parentId}"`
                );
                return;
            }

            const replyEl = new CommentElement(this.document, parentEl.target, reply);
            parentEl.addReply(replyEl);

            this.bindUserEvents(replyEl);
            this.commentElements.set(reply.id, replyEl);
        });
    }

    /**
     * Bind click events to all DOM elements that are tagged for supporting block comments
     */
    private bindBlockCommentTargetEvents() {
        // Scrape the document and add hooks for adding comments
        const attr = `[${this.BLOCK_COMMENT_DATA_ATTR}]`;
        
        // TODO: What's faster - querySelectorAll @ document or per section?
        this.sections.forEach((section) => {
            section.el?.querySelectorAll(attr).forEach((el) => {
                el.addEventListener('click', (e) => {
                    this.addNewBlockComment(section, el);
                    e.preventDefault();
                    return false;
                });
            });
        });
    }

    /**
     * Bind selection events to all DOM elements that are tagged for supporting inline comments
     */
    private bindInlineCommentTargetEvents() {
        this.document.addEventListener('keydown', (e) => {
            if (e.key === 'c') {
                if (this.canCommentOnSelectionRange()) {
                    this.addNewCommentOnSelectionRange();
                    e.preventDefault();
                    return false;
                }
            }
        });

        // TODO: Floating "Add comment" button whenever something is 
        // highlighted and passes canCommentOnSelectedElements
    }

    /**
     * Bind event handlers on the comment element
     */
    private bindUserEvents(el: CommentElement) {
        el.onChange = this.internalOnChangeComment;
        el.onDelete = this.internalOnDeleteComment;
        el.onReply = this.internalOnReplyComment;
    }

    /**
     * Sync changes between a comment and its element and notify listeners
     */
    private internalOnChangeComment(el: CommentElement, content: string) {
        const comment = el.comment;

        comment.message = content;
        comment.updated = new Date();

        // Re-render updated comment data
        el.refresh();

        // If the comment container is increasing in size, we'll need 
        // to reflow elements below it to avoid overlap. 
        this.reflow(el);

        // Fire to listeners passed in from the React app
        if (this.onUpdateComment) {
            this.onUpdateComment(comment);
        }
    }

    /**
     * Remove comment + element and notify listeners
     */
    private internalOnDeleteComment(el: CommentElement) {
        const comment = el.comment;
        console.debug('internalOnDeleteComment', el);

        // Remove element and reflow
        el.remove();
        this.reflow();

        this.commentElements.delete(comment.id);

        // Note: onRemoveComment needs to also handle removal
        // of any child comments from the backend. 
        if (this.onRemoveComment) {
            this.onRemoveComment(comment);
        }
    }

    /**
     * Instantiate a new reply comment + element and notify listeners
     */
    private internalOnReplyComment(el: CommentElement) {
        const comment = el.comment;

        const reply = this.createReply(comment);
        
        // Create DOM nested under the parent comment
        const replyEl = new CommentElement(this.document, el.target, reply);
        
        el.addReply(replyEl);
        this.bindUserEvents(replyEl);

        // Track and reflow after DOM has been created
        this.commentElements.set(reply.id, replyEl);
        this.reflow(el);
        replyEl.focus();

        // Notify listeners
        if (this.onAddComment) {
            this.onAddComment(comment);
        }
    }

    /**
     * Calculate a new unique ID for generated comments
     */
    private getNewCommentId(): number {
        const now = new Date();
        return now.getTime();
    }

    /**
     * Check if the user's current selection is valid and comment-able
     */
    private canCommentOnSelectionRange(): boolean {
        const range = this.document.getSelection()?.getRangeAt(0);
        if (!range || range.collapsed) {
            return false;
        }

        const attr = `[${this.INLINE_COMMENT_DATA_ATTR}]`;

        // TODO: Check if parent has the right data attr.
        // TODO: Various inline stripping magic bullshit. 

        return false;
    }

    /**
     * Ensure all the right fields of the comment are filled out, and adjust if not.
     */
    private validateComment(comment: Comment) {
        // If the comment didn't specify access controls, create them
        // based on the ownership controls defined in this manager
        const hasRW = this.canEditAnyComment || (comment.owner === this.defaultOwner);

        if (!comment.canEdit) {
            comment.canEdit = hasRW;
        }

        if (!comment.canDelete) {
            comment.canDelete = hasRW;
        }
    }

    /**
     * Factory for new Comment resources
     */
    private createComment(section: string, elementId: string): Comment {
        const now = new Date();

        return {
            id: this.getNewCommentId(),
            parentId: undefined,
            owner: this.defaultOwner,
            message: '',
            created: now,
            updated: now,
            section: section,
            elementId: elementId,
            startRange: -1,
            endRange: -1,
            canEdit: true,
            canDelete: true
        };
    }

    /**
     * Factory for new Comment resources that are replies to other comments
     */
    private createReply(comment: Comment): Comment {
        const reply = this.createComment(comment.section, comment.elementId);
        reply.parentId = comment.id;

        return reply;
    }

    /**
     * Insert a new block comment associated with the given element
     */
    private addNewBlockComment(section: Section, target: Element) {
        const comment = this.createComment(section.title, target.id);
        const commentEl = new CommentElement(this.document, target, comment);

        this.bestFitInsertBlockComment(commentEl, target);
        this.bindUserEvents(commentEl);
        
        this.commentElements.set(comment.id, commentEl);

        this.reflow(commentEl);
        commentEl.focus();

        if (this.onAddComment) {
            this.onAddComment(comment);
        }
    }

    /**
     * Insert a new range comment on the user's current selection
     */
    private addNewCommentOnSelectionRange() {
        const range = this.document.getSelection()?.getRangeAt(0);
        if (!range) return;

        // TODO: Identify section of selection
        const section: Section = undefined;

        // TODO: Identify target Element
        const target: Element = undefined;

        // TODO: Range
        const startRange = 0;
        const endRange = 100;

        const comment = this.createComment(section.title, target.id);
        comment.startRange = startRange;
        comment.endRange = endRange;

        const commentEl = new CommentElement(this.document, target, comment);
        this.bestFitInsertRangeComment(commentEl, target, startRange, endRange);
        this.bindUserEvents(commentEl);
        
        this.commentElements.set(comment.id, commentEl);

        this.reflow(commentEl);
        commentEl.focus();

        if (this.onAddComment) {
            this.onAddComment(comment);
        }
    }

    /**
     * Identify the best insert order for the comment in the sidebar DOM 
     * based on distance from the target element. 
     */
    private bestFitInsertBlockComment(el: CommentElement, target: Element) {
        if (!this.sidebar) {
            throw new Error('Tried to fit without a sidebar');
        }

        // TODO: Magic
        this.sidebar.container.appendChild(el.container);
    }

    /**
     * Identify the best insert order for the comment in the sidebar DOM 
     * based on distance from the target element. 
     */
    private bestFitInsertRangeComment(el: CommentElement, target: Element, start: number, end: number) {
        if (!this.sidebar) {
            throw new Error('Tried to fit without a sidebar');
        }

        // TODO: Magic
        this.sidebar.container.appendChild(el.container);
    }

    /**
     * Realign comments based on current DOM dimensions
     * 
     * @param startingFrom  Realign comments below this comment. 
     *                      If not supplied, will realign every comment
     */
    private reflow(startingFrom?: CommentElement) {
        // TODO: magic
    }
}

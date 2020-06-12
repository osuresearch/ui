
import { Comment, Section, Highlight } from './types';
import TableOfContentsElement from './TableOfContentsElement';
import SidebarElement from './SidebarElement';
import CommentElement from './CommentElement';
import CSSElement from './CSSElement';
import SelectionManager from './SelectionManager';
import CommentContext, { ContextTarget } from './CommentContext';

const SECTION_DATA_ATTR = 'data-comment-section';
const SECTION_LEVEL_DATA_ATTR = 'data-comment-section-level';
const BLOCK_COMMENT_DATA_ATTR = 'data-comment-block';
const INLINE_COMMENT_DATA_ATTR = 'data-comment-inline';

/**
 * Management for a document that can be commented on by the end user
 * 
 * This is a pure Javascript component - as the document could exist
 * within an IFrame without any external Javascript support (e.g. React)
 */
export default class ReviewManager {
    // Event handlers that API integration components can provide
    public onAddComment?: (comment: Comment) => void;
    public onUpdateComment?: (comment: Comment) => void;
    public onRemoveComment?: (comment: Comment) => void;

    /**
     * Display name for any new comments or replies
     */
    public defaultAuthor: string;

    /**
     * Default access control if any `Comment.canEdit/canDelete` are undefined.
     * 
     * If false, only comments with `Comment.author === defaultAuthor` will be editable.
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

    /** Fast hashmap between a target and context metadata */
    private contexts: Map<ContextTarget, CommentContext>;

    private selection?: SelectionManager;
    
    constructor() { 
        this.defaultAuthor = '(me)';
        this.canEditAnyComment = false;
        this.sections = new Map<string, Section>();
        this.commentElements = new Map<number, CommentElement>();
        this.contexts = new Map<ContextTarget, CommentContext>();
        
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
        this.selection = new SelectionManager(document);

        // Generate a dynamic TOC within the document
        this.loadSections();
        this.toc = new TableOfContentsElement(document, this.sections);

        // Bind events to the DOM
        this.bindBlockCommentTargetEvents();
        this.bindRangeCommentTargetEvents();

        // Load any initial comments into the document
        if (this.initialComments) {
            this.loadComments(this.initialComments);
        }

        // this.reflow();
    }

    /**
     * Scan through the document DOM for `data-comment-section` elements and aggregate.
     */
    private loadSections() {
        this.sections.clear();

        const attr = `[${SECTION_DATA_ATTR}]`;
        const elements = this.document.querySelectorAll(attr);
        elements.forEach((el) => {
            const title = el.getAttribute(SECTION_DATA_ATTR) as string;
            const level = parseInt(el.getAttribute(SECTION_LEVEL_DATA_ATTR) || '0');

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

            this.sections.set(title, { el, title, level });
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
            
            let target = this.document.querySelector('#' + comment.elementId);
            if (!target) {
                console.warn(
                    `Ignoring comment "${comment.id}" - missing element ID "${comment.elementId}"`
                );
                return;
            }

            // If this is a range, we need to add an associated highlight
            // and use *that* as the context's target
            if (comment.startRange !== comment.endRange) {
                const highlight: Highlight = {
                    containerId: comment.elementId,
                    start: comment.startRange,
                    end: comment.endRange,
                    context: '', // TODO: Recalculate? 
                };

                this.selection?.add(highlight, target);

                // .el is updated with the new highlight element once added
                target = highlight.el as Element;
            }
           
            const context = this.getOrCreateContext(target);
            this.addNewComment(comment, context);
        });

        repliesToAdd.forEach((reply) => {
            const parentEl = this.commentElements.get(reply.parentId as number);
            if (!parentEl) {
                console.warn(
                    `Ignoring reply "${reply.id}" - missing parent "${reply.parentId}"`
                );
                return;
            }

            const replyEl = new CommentElement(this.document, reply, parentEl.context);
            parentEl.addReply(replyEl);

            this.bindUserEvents(replyEl);
            this.commentElements.set(reply.id, replyEl);
        });

        this.reflow();
    }

    /**
     * Look for the closest parent section for a given element
     */
    private findClosestSection(el: Element): Section | null {
        const attr = `[${SECTION_DATA_ATTR}]`;
        const closest = el.closest(attr);
        if (!closest) {
            return null;
        }
        
        const title = closest.getAttribute(SECTION_DATA_ATTR) as string;
        return this.sections.get(title) || null;
    }
    
    private getOrCreateContext(target: ContextTarget): CommentContext {
        let context = this.contexts.get(target);
        if (!context) {
            context = new CommentContext(target);
            this.contexts.set(target, context);
        }

        return context;
    }

    /**
     * Bind click events to all DOM elements that are tagged for supporting block comments
     */
    private bindBlockCommentTargetEvents() {
        // Scrape the document and add hooks for adding comments
        const attr = `[${BLOCK_COMMENT_DATA_ATTR}]`;
        
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
    private bindRangeCommentTargetEvents() {
        this.document.addEventListener('keydown', (e) => {
            if (e.key === 'c') {
                const highlight = this.selection?.highlightSelection();
                if (highlight) {
                    this.addNewRangeComment(highlight);
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
        const replyEl = new CommentElement(this.document, reply, el.context);
        
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
    // private canCommentOnSelectionRange(): boolean {
    //     const range = this.document.getSelection()?.getRangeAt(0);
    //     if (!range || range.collapsed) {
    //         return false;
    //     }

    //     const attr = `[${INLINE_COMMENT_DATA_ATTR}]`;

    //     // TODO: Check if parent has the right data attr.
    //     // TODO: Various inline stripping magic bullshit. 

    //     return false;
    // }

    /**
     * Ensure all the right fields of the comment are filled out, and adjust if not.
     */
    private validateComment(comment: Comment) {
        // If the comment didn't specify access controls, create them
        // based on the ownership controls defined in this manager
        const hasRW = this.canEditAnyComment || (comment.author === this.defaultAuthor);

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
            author: this.defaultAuthor,
            message: '',
            created: now,
            updated: now,
            section: section,
            elementId: elementId,
            startRange: -1,
            endRange: -1,
            canEdit: true,
            canDelete: true,
            color: [0, 0, 255]
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
        const context = this.getOrCreateContext(target);
        const comment = this.createComment(section.title, target.id);

        this.addNewComment(comment, context);
    }

    /**
     * Add a new text range comment associated with the given Highlight
     */
    private addNewRangeComment(highlight: Highlight) {
        // context needs to point to the highlight el
        if (!highlight.el) {
            throw new Error(
                'addNewRangeComment() requires Highlight to contain the wrapping element'
            );
        }

        const section = this.findClosestSection(highlight.el);

        if (!section) {
            throw new Error(
                'Could not find a matching section. This should not have been highlighted'
            );
        }

        const context = this.getOrCreateContext(highlight.el);
        const comment = this.createComment(section.title, highlight.containerId);
        comment.startRange = highlight.start;
        comment.endRange = highlight.end;
        
        this.addNewComment(comment, context);
    }

    private addNewComment(comment: Comment, context: CommentContext) {
        const commentEl = new CommentElement(this.document, comment, context);

        this.bestFitInsertComment(commentEl);
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
    private bestFitInsertComment(el: CommentElement) {
        if (!this.sidebar) {
            throw new Error('Tried to fit without a sidebar');
        }

        // We're just going to dump it in the sidebar without sorting.
        // reflow() will sort by context positions and other metadata.
        this.sidebar.container.appendChild(el.container);

        // const contextTop = el.context.rect.top;
        // let insertAfter: HTMLElement | undefined;

        // const children = this.sidebar.container.childNodes;

        // for (let i = 0; i < children.length; i++) {
        //     const comment = this.getCommentElementForNode(children[i]);
        //     if (comment) {
        //         const otherContextTop = comment.context.rect.top;
        //         console.debug('[bestFit] compare', otherContextTop, contextTop, comment);
        //         if (otherContextTop >= contextTop) {
        //             insertAfter = comment.container;
        //             break;
        //         }
        //     }


        //     // const node = children[i];
        //     // if (node instanceof HTMLElement) {
        //     //     const top = parseInt(node.style.top);

        //     //     if (top >= contextTop) {
        //     //         // If we should insert before this node in sidebar ordering,
        //     //         // also make sure we don't accidentally insert above a comment
        //     //         // that's pointing to a context that's higher in the DOM than 
        //     //         // our target. 
        //     //         const comment = this.getCommentElementForNode(node);
        //     //         const otherContextTop = comment?.context.rect.top || 0;
                    
        //     //         if (otherContextTop > contextTop) {
        //     //             insertBefore = node;
        //     //             break;
        //     //         }
        //     //     }
        //     // }
        // }

        // console.debug('[bestFit] result', insertAfter);

        // // algorithm needs to keep comments together.

        // if (insertAfter) {
        //     // insertAfter.after(el.container);
        //     this.sidebar.container.insertBefore(el.container, insertAfter);
        // } else {
        //     this.sidebar.container.appendChild(el.container);
        // }
    }

    private getCommentElementForNode(node: Node): CommentElement | undefined {
        if (!(node instanceof HTMLElement)) {
            return undefined;
        }

        const parts = node.id.split('-');
        if (parts.length < 2 || parts[0] !== 'comment') {
            return undefined;
        }

        const id = parseInt(parts[1]);
        return this.commentElements.get(id);
    }

    private isPendingReflow: boolean = false;

    /**
     * Realign comments based on current DOM dimensions
     * 
     * @param startingFrom  Realign comments below this comment. 
     *                      If not supplied, will realign every comment
     */
    private reflow(startingFrom?: CommentElement) {
        if (this.isPendingReflow) {
            // Don't queue up another requestAnimationFrame() if we already have one.
            return;
        }

        this.isPendingReflow = true;

        // Wait a DOM paint before reflow - just in case this is called
        // immediately after adding DOM but before paint 
        document.defaultView?.requestAnimationFrame(() => {
            this.isPendingReflow = false;
            
            // If the element we're starting from hasn't changed height at all, 
            // just short circuit the update. This implies that nothing should really
            // move around - so we don't need to perform any heavy DOM manipulation.
            if (startingFrom) {
                if (startingFrom.container.clientHeight <= startingFrom.prevClientHeight) {
                    console.debug('[reflow] skip - not increased height', startingFrom.container.clientHeight, startingFrom.prevClientHeight)
                    return;
                }

                startingFrom.prevClientHeight = startingFrom.container.clientHeight;
            }

            // Sort comments based on context's DOM position and relative date
            let comments = Array.from(this.commentElements.values()); // TODO: Array.from polyfill?
            comments = comments.sort((a, b) => {
                // Short circuit for replies - they need to be sent to the end of the list 
                // so they don't interfere with ordering on context.rect.top comparisons
                if (a.isReply) return 1;
                if (b.isReply) return -1;

                // Same context? Sort by date.
                if (a.context === b.context) {
                    return a.comment.created.getTime() < b.comment.created.getTime() ? -1 : 1;
                }

                // Different context? Sort by context's position in the DOM
                return a.context.rect.top < b.context.rect.top ? -1 : 1;
            });

            console.debug('[reflow] Sorted', comments);

            // Then run through, updating top for each comment.
            // TODO: This can be optimized by only moving stuff after startingFrom (if defined). 
            // And by not moving comments under other comments that have not calculated a new position.
            // But I don't know all the edge cases where this may fail - so I'm just going to 
            // keep recalculating *everything* until there's a noticeable performance drop. 
            let prevBottom = 0;

            for (let i = 0; i < comments.length; i++) {
                const comment = comments[i];
                if (comment.isReply) continue;

                const top = Math.max(comment.context.rect.top, prevBottom);
                const height = comment.container.clientHeight;
                const topPx = top + 'px';
                
                comment.container.style.top = topPx;
                comment.prevClientHeight = height;
                prevBottom = top + height;

                comment.connector?.refresh();
            }

            // let node: HTMLElement | null = startingFrom.container;
            // let minTop = parseInt(node.style.top) + node.clientHeight;
            // node = node.nextElementSibling as HTMLElement;
            
            // while (node) {
            //     const top = parseInt(node.style.top);

            //     // If the next sibling doesn't need to shift down - we're done. 
            //     // There's no reason to reflow any other siblings.
            //     if (!node || top > minTop) {
            //         break;
            //     }

            //     // Otherwise, adjust top and recalculate for next sibling
            //     node.style.top = minTop + 'px';
            //     minTop = minTop + node.clientHeight;
                
            //     node = node.nextElementSibling as HTMLElement;
            // }

            // this.isPendingReflow = false;
        });
    }
}

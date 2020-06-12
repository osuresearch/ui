
import { Comment } from './types';
import { colorToCss } from './utility';
import CommentContext from './CommentContext';
import ContextConnectorElement from './ContextConnectorElement';

/**
 * Convert a date to either the time (if same day) or just the locale date
 */
function prettifyDate(date: Date): string {
    const now = new Date();

    if (
        date.getFullYear() === now.getFullYear() &&
        date.getMonth() === now.getMonth() &&
        date.getDate() === now.getDate()
    ) {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    return date.toLocaleDateString();
}

function isWithinFiveMinutes(created: Date, updated: Date): boolean {
    const threshold = 5 * 60 * 1000;
    return updated.getTime() - created.getTime() < threshold;
}

/**
 * Custom element abstraction for comment blocks
 */
export default class CommentElement {
    public comment: Comment;
    public context: CommentContext;
    
    public container: HTMLDivElement;
    private info: HTMLDivElement;
    private updated: HTMLDivElement;
    private content: HTMLDivElement;
    private replies: HTMLDivElement;
    private replyButton?: HTMLButtonElement;
    private deleteButton?: HTMLButtonElement;

    public connector?: ContextConnectorElement;

    public onDelete?: (el: CommentElement) => void;
    public onReply?: (el: CommentElement) => void;
    public onChange?: (el: CommentElement, content: string) => void;

    /** Track the clientHeight since the last time we reflowed comments */
    public prevClientHeight: number = 0;

    public get isReply(): boolean {
        return this.comment.parentId !== undefined;
    }

    public get isEdited(): boolean {
        return !isWithinFiveMinutes(this.comment.created, this.comment.updated);
    }

    public get canDelete(): boolean {
        return this.comment.canDelete || false;
    }

    public get canReply(): boolean {
        return !this.isReply;
    }

    public get canEdit(): boolean {
        return this.comment.canEdit || false;
    }

    public get hasReplies(): boolean {
        return this.replies.childNodes.length > 0;
    }

    // public get rect(): DOMRect {
    //     if (!this.cachedRect) {
    //         this.cachedRect = getDocumentRect(this.container);
    //     }

    //     return this.cachedRect;
    // }

    // public recalculateRect() {
    //     this.cachedRect = getDocumentRect(this.container);
    // }

    // private cachedRect?: DOMRect;

    /**
     * Setup internal DOM for the given Comment
     */
    constructor(document: Document, comment: Comment, context: CommentContext) {
        this.comment = comment;
        this.context = context;

        this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
        this.onReplyButtonClick = this.onReplyButtonClick.bind(this);
        this.onContentEditableInput = this.onContentEditableInput.bind(this);
        this.onContentEditableBlur = this.onContentEditableBlur.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);

        const container = document.createElement('div');
        container.id = 'comment-' + comment.id;
        container.classList.add('comment');
        if (this.isReply) {
            container.classList.add('is-reply');
        }
        
        container.style.top = this.context.rect.top + 'px';

        // Add events to highlight the target whenever we enter/leave this comment
        if (!this.isReply) {
            container.addEventListener('mouseenter', this.onMouseEnter);
            container.addEventListener('mouseleave', this.onMouseLeave);
        }
        
        this.container = container;

        // The colored line between the comment and the document. 
        // This is a visual indicator to help identify the commenter
        if (!this.isReply) {
            const edge = document.createElement('div');
            edge.classList.add('comment-edge');
            edge.style.backgroundColor = colorToCss(comment.color);
            container.appendChild(edge);
        }
        
        // Header content
        const header = document.createElement('div');
        header.classList.add('comment-header');
        container.appendChild(header);
    
        const info = document.createElement('div');
        info.classList.add('comment-info');
        header.appendChild(info);
        this.info = info;
    
        const updated = document.createElement('div');
        updated.classList.add('comment-updated');
        header.appendChild(updated);
        this.updated = updated;
    
        // Body content
        const content = document.createElement('div');
        content.classList.add('comment-content');
        content.addEventListener('input', this.onContentEditableInput);
        content.addEventListener('blur', this.onContentEditableBlur);
        container.appendChild(content);
        this.content = content;

        const replies = document.createElement('div');
        replies.classList.add('comment-replies');
        container.appendChild(replies);
        this.replies = replies;
    
        // Controls
        if (this.canDelete) {
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('comment-delete');
            deleteButton.innerHTML = '&times;';
            deleteButton.addEventListener('click', this.onDeleteButtonClick);
            header.appendChild(deleteButton);
            this.deleteButton = deleteButton;
        }
        
        if (this.canReply) {
            const replyButton = document.createElement('button');
            replyButton.classList.add('comment-reply');
            replyButton.innerText = 'Reply';
            replyButton.addEventListener('click', this.onReplyButtonClick);
            container.appendChild(replyButton);
            this.replyButton = replyButton;
        }
        
        // Add a visual edge connecting this comment to the context.
        if (!this.isReply) {
            // document.defaultView?.requestAnimationFrame(() => {
            this.connector = new ContextConnectorElement(
                document, 
                this, 
                context, 
                comment.color
            );
        }

        this.refresh();
    }

    private onDeleteButtonClick(e: MouseEvent) {
        if (!this.canDelete) return;

        if (this.onDelete) {
            this.onDelete(this);
        }
    }
    
    private onReplyButtonClick(e: MouseEvent) {
        if (this.onReply) {
            this.onReply(this);
        }
    }

    private onContentEditableInput(e: Event) {
        if (!this.canEdit || !this.onChange) return;
        
        if (!(e.target instanceof HTMLElement)) {
            throw new Error('Expected HTMLElement as event target');
        }

        this.onChange(this, e.target.innerText);
    }

    /**
     * When the user blurs an empty comment without any children, delete it.
     */
    private onContentEditableBlur(e: Event) {
        if (!this.canDelete || this.hasReplies) return;
        
        if (!(e.target instanceof HTMLElement)) {
            throw new Error('Expected HTMLElement as event target');
        }

        const text = e.target.innerText.trim();
        if (text.length > 0) {
            return;
        }

        if (this.onDelete) {
            this.onDelete(this);
        }
    }

    /**
     * Highlight the context of this comment
     */
    private onMouseEnter(e: MouseEvent) {
        this.context.focus(this.comment.color);
    }

    /**
     * Remove highlighting from the context of this comment
     */
    private onMouseLeave(e: MouseEvent) {
        this.context.blur();
    }

    /**
     * Refresh DOM content to match updated Comment information
     */
    public refresh() {
        const comment = this.comment;
        
        this.info.innerText = comment.author;
        this.updated.innerText = `${prettifyDate(comment.updated)} ${this.isEdited ? '(edited)' : ''}`;
        
        const content = this.content;
        content.contentEditable = this.canEdit ? 'true' : '';

        // Make sure we're not trying to update innerText while
        // someone is actively typing - as part of an event callback
        if (content.innerText !== comment.message) {
            content.innerText = comment.message;
        }

        this.connector?.refresh();
    }

    /**
     * Remove this comment from the DOM
     */
    public remove() {
        this.context.blur();
        this.container.remove();
        this.connector?.remove();
    }

    /**
     * Focus on the editable of this comment
     */
    public focus() {
        this.content.focus();
    }

    /**
     * Nest a CommentElement under this one
     */
    public addReply(el: CommentElement) {
        if (this.isReply) {
            throw new Error('Cannot nest replies');
        }

        // TODO: Insert by date, in case these were added out of order.
        this.replies.appendChild(el.container);
    }
}

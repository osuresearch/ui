
import { Comment } from './types';

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

/**
 * Custom element abstraction for comment blocks
 */
export default class CommentElement {
    public comment: Comment;
    public target: Element;

    public container: HTMLDivElement;
    private info: HTMLDivElement;
    private updated: HTMLDivElement;
    private content: HTMLDivElement;
    private replies: HTMLDivElement;
    private replyButton?: HTMLButtonElement;
    private deleteButton?: HTMLButtonElement;

    public onDelete?: (el: CommentElement) => void;
    public onReply?: (el: CommentElement) => void;
    public onChange?: (el: CommentElement, content: string) => void;

    public get isReply(): boolean {
        return this.comment.parentId !== undefined;
    }

    public get isEdited(): boolean {
        return this.comment.created.getTime() !== this.comment.updated.getTime();
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

    /**
     * Setup internal DOM for the given Comment
     */
    constructor(document: Document, target: Element, comment: Comment) {
        this.target = target;
        this.comment = comment;

        this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
        this.onReplyButtonClick = this.onReplyButtonClick.bind(this);
        this.onContentEditableInput = this.onContentEditableInput.bind(this);
        this.onContentEditableBlur = this.onContentEditableBlur.bind(this);

        const container = document.createElement('div');
        container.classList.add('comment');
        if (comment.parentId) {
            container.classList.add('is-reply');
        }
        this.container = container;

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
     * Refresh DOM content to match updated Comment information
     */
    public refresh() {
        const comment = this.comment;

        this.info.innerText = comment.owner;
        this.updated.innerText = `${prettifyDate(comment.updated)} ${this.isEdited ? '(edited)' : ''}`;
        
        const content = this.content;
        content.contentEditable = this.canEdit ? 'true' : '';

        // Make sure we're not trying to update innerText while
        // someone is actively typing - as part of an event callback
        if (content.innerText !== comment.message) {
            content.innerText = comment.message;
        }
    }

    /**
     * Remove this comment from the DOM
     */
    public remove() {
        this.container.remove();
    }

    public focus() {
        this.content.focus();
    }

    public addReply(el: CommentElement) {
        if (this.isReply) {
            throw new Error('Cannot nest replies');
        }

        // TODO: Insert by date, in case these were added out of order.
        this.replies.appendChild(el.container);
    }
}

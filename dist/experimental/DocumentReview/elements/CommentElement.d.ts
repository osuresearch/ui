import { Comment } from '../types';
import CommentContext from '../CommentContext';
import ContextConnectorElement from './ContextConnectorElement';
/**
 * Custom element abstraction for comment blocks
 */
export default class CommentElement {
    comment: Comment;
    context: CommentContext;
    container: HTMLDivElement;
    private info;
    private updated;
    private content;
    private replies;
    private replyButton?;
    private deleteButton?;
    connector?: ContextConnectorElement;
    onDelete?: (el: CommentElement) => void;
    onReply?: (el: CommentElement) => void;
    onChange?: (el: CommentElement, content: string) => void;
    onFocus?: (el: CommentElement) => void;
    onBlur?: (el: CommentElement) => void;
    /** Track the clientHeight since the last time we reflowed comments */
    prevClientHeight: number;
    get isReply(): boolean;
    get isEdited(): boolean;
    get canDelete(): boolean;
    get canReply(): boolean;
    get canEdit(): boolean;
    get hasReplies(): boolean;
    /**
     * Setup internal DOM for the given Comment
     */
    constructor(document: Document, comment: Comment, context: CommentContext);
    private onDeleteButtonClick;
    private onReplyButtonClick;
    private onContentEditableInput;
    /**
     * When the user blurs an empty comment without any children, delete it.
     */
    private onContentEditableBlur;
    private onMouseEnter;
    private onMouseLeave;
    /**
     * Refresh DOM content to match updated Comment information
     */
    refresh(): void;
    /**
     * Remove this comment from the DOM
     */
    remove(): void;
    /**
     * Focus on the editable of this comment
     */
    focus(): void;
    /**
     * Nest a CommentElement under this one
     */
    addReply(el: CommentElement): void;
}
//# sourceMappingURL=CommentElement.d.ts.map
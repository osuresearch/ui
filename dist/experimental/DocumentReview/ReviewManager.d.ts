import { Comment, Section } from './types';
/**
 * Management for a document that can be commented on by the end user
 *
 * This is a pure Javascript component - as the document could exist
 * within an IFrame without any external Javascript support (e.g. React)
 */
export default class ReviewManager {
    onAddComment?: (comment: Comment) => void;
    onUpdateComment?: (comment: Comment) => void;
    onRemoveComment?: (comment: Comment) => void;
    onReady?: (manager: ReviewManager) => void;
    /**
     * Display name for any new comments or replies
     */
    defaultAuthor: string;
    /**
     * Default access control if any `Comment.canEdit/canDelete` are undefined.
     *
     * If false, only comments with `Comment.author === defaultAuthor` will be editable.
     */
    canEditAnyComment: boolean;
    /**
     * Flat list of pre-existing comments to load on bind.
     *
     * Typically this will be set by some backend API.
     */
    initialComments?: Comment[];
    /** The IFrame document to inject DOM/CSS into */
    private document;
    private sidebar?;
    private toc?;
    private css?;
    private sections;
    private commentElements;
    /** Fast hashmap between a target and context metadata */
    private contexts;
    private selection?;
    private isPendingReflow;
    constructor();
    /**
     * Retrieve an array of Sections in the document.
     *
     * NOTE: This **does not have IE support** (internally uses `Array.from`).
     * This method is only used for data mocking in development at the moment
     * so it's a non issue.
     */
    getSections(): Section[];
    /**
     * Bind this manager to a Document to inject DOM and event handlers.
     */
    bind(document: Document): void;
    /**
     * Scan through the document DOM for `data-comment-section` elements and aggregate.
     */
    private loadSections;
    syncComments(comments: Comment[]): void;
    /**
     * Load a batch of comments into the DOM
     */
    private loadComments;
    /**
     * Look for the closest parent section for a given element
     */
    private findClosestSection;
    private getOrCreateContext;
    /**
     * Bind click events to all DOM elements that are tagged for supporting block comments
     */
    private bindBlockCommentTargetEvents;
    /**
     * Bind selection events to all DOM elements that are tagged for supporting inline comments
     */
    private bindRangeCommentTargetEvents;
    /**
     * Bind event handlers on the comment element
     */
    private bindUserEvents;
    /**
     * Sync changes between a comment and its element and notify listeners
     */
    private internalOnChangeComment;
    /**
     * Remove comment + element and notify listeners
     */
    private internalOnDeleteComment;
    /**
     * Instantiate a new reply comment + element and notify listeners
     */
    private internalOnReplyComment;
    /**
     * Event callback when a user hovers their cursor (or clicks into) a comment thread.
     *
     * This will highlight the associated document context of that comment thread.
     */
    private internalOnFocusComment;
    /**
     * Event callback when a user de-focuses a comment thread.
     *
     * This will remove any extra highlighting from the associated document context
     */
    private internalOnBlurComment;
    /**
     * Calculate a new unique ID for generated comments
     */
    private getNewCommentId;
    /**
     * Check if the user's current selection is valid and comment-able
     */
    /**
     * Ensure all the right fields of the comment are filled out, and adjust if not.
     */
    private validateComment;
    /**
     * Factory for new Comment resources
     */
    private createComment;
    /**
     * Factory for new Comment resources that are replies to other comments
     */
    private createReply;
    /**
     * Insert a new block comment associated with the given element
     */
    private addNewBlockComment;
    /**
     * Add a new text range comment associated with the given Highlight
     */
    private addNewRangeComment;
    private addNewComment;
    /**
     * Identify the best insert order for the comment in the sidebar DOM
     * based on distance from the target element.
     */
    private bestFitInsertComment;
    private getCommentElementForNode;
    /**
     * Realign comments based on current DOM dimensions
     *
     * @param startingFrom  Realign comments below this comment.
     *                      If not supplied, will realign every comment
     */
    private reflow;
}
//# sourceMappingURL=ReviewManager.d.ts.map
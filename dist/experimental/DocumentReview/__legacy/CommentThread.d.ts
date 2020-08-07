export default CommentThread;
/**
 * Manager for a thread of comments within a document. This performs the heavy
 * lifting of manipulating content within an iframe document inside DocumentReview.
 *
 * This is *not* a React component. This is a direct DOM manager.
 *
 * TODO: Cache solution for position lookups so we stop querying the DOM. (Same goes for anchors)
 * The lookups should only invalidate if the container frame dimensions change.
 */
declare class CommentThread {
    /**
     * @param {Document} document Document that comment DOM exists within
     * @param {HTMLElement} parent Containing element that threads are associated with
     * @param {CommentAnchor} anchor Document anchor for this thread
     * @param {CommentContent} comment Top level comment for this section
     */
    constructor(document: Document, parent: HTMLElement, anchor: any, comment: any);
    document: Document;
    parent: HTMLElement;
    anchor: any;
    topLevelComment: any;
    replies: any[];
    onCommentChange(e: any): void;
    onUpdateHandler: any;
    /**
     * Inject DOM and event handlers required for this comment section into the document.
     *
     * This is a non-React system, since we're operating on a static HTML document
     * that's contained within an IFrame.
     */
    injectDOM(): void;
    container: HTMLDivElement | undefined;
    /**
     * Convert newlines to <br> elements
     *
     * Author: https://stackoverflow.com/a/7467863
     */
    nl2br(str: any): string;
    /**
     * Return Document position of the anchored element
     */
    getAnchorRect(): {
        left: any;
        top: any;
        right: any;
        bottom: any;
    };
    /**
     * Focus the user to the comment entry box
     */
    focus(): void;
    /**
     * Set the absolute top position of this comment section in the document
     *
     * @param {integer} top
     */
    setTop(top: any): void;
    /**
     * Should this comment section be displayed as a collapsed section
     *
     * @param {boolean} collapsed
     */
    setCollapsed(collapsed: boolean): void;
    /**
     * Reposition the SVG dashed line between this comment section and the anchor
     */
    updateSVGEdge(): void;
    svg: SVGSVGElement | undefined;
    lineFromAnchor: SVGLineElement | undefined;
    lineToComment: SVGLineElement | undefined;
    getHeight(): number;
}
//# sourceMappingURL=CommentThread.d.ts.map
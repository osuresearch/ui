export default CommentSidebar;
/**
 * Management of positioning comments on the document sidebar
 */
declare class CommentSidebar {
    constructor(document: any, selectableBlockNodes: any, selectableTextNodes: any);
    document: any;
    threads: any[];
    reflow(): void;
    selectableBlockNodes: any;
    selectableTextNodes: any;
    /**
     * Add required CSS for highlighting, commenting, etc
     */
    injectCSS(): void;
    injectDOM(): void;
    container: any;
    /**
     * Experiment in adding a comment for some highlighted text block
     */
    tryCommentHighlighted(): boolean;
    /**
     * @param {Range} range
     */
    isValidSelectionRange(range: Range): boolean;
    /**
     * @param {HTMLElement} el
     */
    isInSidebar(el: HTMLElement): boolean;
    /**
     * @param {HTMLElement} node
     * @param {string} section
     */
    insertThread(node: HTMLElement, section: string): void;
    /**
     * @param {integer} top
     */
    findBestInsertIndex(top: any): number;
    /**
     * Callback for when the commented document reflows (width change)
     * to force all comment sections to recalculate their alignment
     */
    onResize(): void;
    /**
     * Minimize vertical distances between comments and the commented content
     */
    minimizeDistances(): void;
}
//# sourceMappingURL=CommentSidebar.d.ts.map
import { Color, Highlight } from "./types";
export declare type ContextTarget = Element | Highlight;
/**
 * Reference to the context that a comment is pointing to within the document
 */
export default class CommentContext {
    private target;
    /** Rect of the context element relative to the Document */
    rect: DOMRect;
    constructor(target: ContextTarget);
    /**
     * Focus the context with a specific color highlighter
     */
    focus(color: Color): void;
    blur(): void;
    /**
     * Return all the DOM elements representing this context
     */
    getTargetElements(): HTMLElement[];
    /**
     * Returns the Highlight target, if this is a highlight context
     */
    getHighlight(): Highlight;
    get isHighlight(): boolean;
}
//# sourceMappingURL=CommentContext.d.ts.map
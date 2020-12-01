import CommentElement from "./CommentElement";
import CommentContext from "../CommentContext";
import { Color } from "../types";
/**
 * Simple SVG line that connects a comment to its context
 */
export default class ContextConnectorElement {
    private document;
    private comment;
    private context;
    private svg;
    private lineFromContext;
    private lineToComment;
    constructor(document: Document, comment: CommentElement, context: CommentContext, color: Color);
    /** Remove this element from the DOM */
    remove(): void;
    /**
     * Recalculate alignment between comment & context
     */
    refresh(): void;
}
//# sourceMappingURL=ContextConnectorElement.d.ts.map
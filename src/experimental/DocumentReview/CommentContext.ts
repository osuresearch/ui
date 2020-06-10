import { getDocumentRect } from "./types";

/**
 * Reference to the context that a comment is pointing to within the document
 */
export default class CommentContext {
    public el: Element;

    /** Rect of the context element relative to the Document */
    public rect: DOMRect;

    constructor(el: Element) {
        this.el = el;
        
        // This only really ever needs to be calculated once since the document
        // is in a fixed width container (thus can never reflow vertically)
        this.rect = getDocumentRect(el);
    }

    /** Refresh cached information about the context element */
    public refresh() {
        this.rect = getDocumentRect(this.el);
    }

    public focus() {
        this.el.classList.add('comment-context-focus');
    }

    public blur() {
        this.el.classList.remove('comment-context-focus');
    }
}

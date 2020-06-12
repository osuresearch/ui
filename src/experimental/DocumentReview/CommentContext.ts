import { Color, Highlight } from "./types";
import { getDocumentRect, colorToCss } from "./utility";

export type ContextTarget = Element | Highlight;

/**
 * Reference to the context that a comment is pointing to within the document
 */
export default class CommentContext {
    private target: ContextTarget;

    /** Rect of the context element relative to the Document */
    public rect: DOMRect;

    constructor(target: ContextTarget) {
        this.target = target;
        
        // This only really ever needs to be calculated once since the document
        // is in a fixed width container (thus can never reflow vertically)
        if (this.target instanceof Element) {
            this.rect = getDocumentRect(this.target);
        } else {
            if (!this.target.el) {
                throw new Error(
                    'Tried to create a ContextTarget using a Highlight without an assigned .el'
                );
            }
            
            this.rect = getDocumentRect(this.target.el);
        }
    }

    /**
     * Focus the context with a specific color highlighter
     */
    public focus(color: Color) {
        const background = colorToCss(color, 0.1);

        this.getTargetElements().forEach((el) => {
            // el.classList.add('comment-context-focus');
            el.style.background = colorToCss(color, 0.1);
        });
    }

    public blur() {
        this.getTargetElements().forEach((el) => {
            // el.classList.remove('comment-context-focus');
            el.style.background = '';
        });
    }

    /**
     * Return all the DOM elements representing this context
     */
    public getTargetElements(): HTMLElement[] {
        const elements: HTMLElement[] = [];

        // TODO: Future enhancement is to support a Highlight
        // that may cross over multiple elements. 
        
        if (this.target instanceof Element) {
            elements.push(this.target as HTMLElement);
        } else {
            elements.push(this.target.el as HTMLElement);
        }

        return elements;
    }
}

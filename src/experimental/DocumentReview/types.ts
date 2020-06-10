
export type Coordinates = {
    top: number;
    left: number;
}

/**
 * Calculate absolute position relative to the Document for an element
 * 
 * @author https://stackoverflow.com/a/26230989
 */
export function getDocumentRect(el: Element): DOMRect {
    if (!el.ownerDocument) {
        throw new Error('Element is not in a document');
    }

    const box = el.getBoundingClientRect();

    const body = el.ownerDocument.body;
    const docEl = el.ownerDocument.documentElement;

    const scrollTop = /* window.pageYOffset || */ docEl.scrollTop || body.scrollTop;
    const scrollLeft = /* window.pageXOffset || */ docEl.scrollLeft || body.scrollLeft;

    const clientTop = docEl.clientTop || body.clientTop || 0;
    const clientLeft = docEl.clientLeft || body.clientLeft || 0;

    const top  = Math.round(box.top +  scrollTop - clientTop);
    const left = Math.round(box.left + scrollLeft - clientLeft);
    const width = box.width;
    const height = box.height;

    return new DOMRect(left, top, width, height);
}

/** A comment on a reviewable document */
export interface Comment {
    /** 
     * Unique identifier for this comment. Used for parent/child hierarchies.
     */
    id: number;
    parentId?: number;

    owner: string;
    message: string;

    created: Date;
    updated: Date;

    /** Section this comment is associated with (nearest `data-comment-section` parent) */
    section: string;

    /** DOM Element `id` attribute that this comment attached */
    elementId: string;

    /** Start and end text range of an inline comment field */
    startRange: number;
    endRange: number;

    // Access controls. If not provided, the DocumentManager will
    // automatically set these based on what it knows about the owner.
    canEdit?: boolean;
    canDelete?: boolean;
}

export interface Section {
    /** Root DOM element for this section */
    el: Element;

    /** Human readable title */
    title: string;

    /** Nesting level under a previous section in the TOC */
    level: number;
}

function isAncestorOf(parent: Element, el: Element): boolean {
    do {
        if (el == parent) {
            return true;
        }

        el = (el.parentElement || el.parentNode) as Element;
    } while (el !== null && el.nodeType === 1);

    return false;
}

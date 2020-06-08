
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

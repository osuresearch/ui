
/** RGB byte (0-255) tuple */
export type Color = [number, number, number];

export type Coordinates = {
    top: number;
    left: number;
}

/** A comment on a reviewable document */
export type Comment = {
    /** 
     * Unique identifier for this comment. Used for parent/child hierarchies.
     */
    id: number;
    parentId?: number;

    author: string;
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

    /** Base color to apply to all elements associated with this comment */
    color: Color;
}

export type Section = {
    /** Root DOM element for this section */
    el: Element;

    /** Human readable title */
    title: string;

    /** Nesting level under a previous section in the TOC */
    level: number;
}

/** Metadata about a highlighted section of a document */
export type Highlight = {
    /** DOM element where start/end are relative to */
    containerId: string;

    /** The new element wrapping this highlight */
    el?: Element;

    /** Character range start for restoring the highlight */
    start: number;

    /** Character range end for restoring the highlight */
    end: number;

    /** Highlighted text */
    context: string;
}

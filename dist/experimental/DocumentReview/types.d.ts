/** RGB byte (0-255) tuple */
export declare type Color = [number, number, number];
export declare type Coordinates = {
    top: number;
    left: number;
};
/** A comment on a reviewable document */
export declare type Comment = {
    /** Unique identifier for this comment. Used for parent/child reply hierarchies */
    id: number;
    /**
     * Parent's unique ID, if this is a reply. Note that only one level of reply
     * nesting is supported. If the parent comment is also a reply - an error will be raised.
     */
    parentId?: number;
    /** Display name of the comment author */
    author: string;
    message: string;
    created: Date;
    updated: Date;
    /** Section this comment is associated with (nearest `data-comment-section` parent) */
    section: string;
    /** DOM Element `id` attribute that this comment attached */
    elementId: string;
    /** If this comment points to a text range, this is the start index of the range */
    startRange: number;
    /** If this comment points to a text range, this is the end index of the range */
    endRange: number;
    /**
     * Base color to apply to all elements associated with this comment.
     * Typically - you should give each author their own color
     */
    color: Color;
    /**
     * Text or block fragment this comment is associated with.
     *
     * This is optional and will be filled in automatically by comments
     * based on `elementId` and `startRange`/`endRange`
     */
    /**
     * Optional edit access control.
     *
     * If not provided, the ReviewManager will automatically set to true
     * if the author of a comment matches the default author in the manager.
     */
    canEdit?: boolean;
    /**
     * Optional delete access control.
     *
     * If not provided, the ReviewManager will automatically set to true
     * if the author of a comment matches the default author in the manager.
     */
    canDelete?: boolean;
};
export declare type Section = {
    /** Root DOM element for this section */
    el: Element;
    /** Human readable title */
    title: string;
    /** Nesting level under a previous section in the TOC */
    level: number;
};
/** Metadata about a highlighted section of a document */
export declare type Highlight = {
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
};
//# sourceMappingURL=types.d.ts.map
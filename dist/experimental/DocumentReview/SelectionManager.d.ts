import 'rangy/lib/rangy-textrange';
import 'rangy/lib/rangy-classapplier';
import 'rangy/lib/rangy-highlighter';
import 'rangy/lib/rangy-serializer';
import { Highlight, Color } from './types';
/**
 * Abstraction over range selection save, restore, and associations
 */
export default class SelectionManager {
    private document;
    private highlighter;
    private classApplier;
    private focusClassApplier;
    private focused?;
    /** Mapping between an element ID and all the highlights associated with it */
    private highlights;
    constructor(document: Document);
    highlightSelection(): Highlight | null;
    /**
     * Add a new highlight to the DOM.
     *
     * If `el` is already known, it can be passed in to avoid a lookup call.
     *
     * The provided Highlight will have `.el` updated to the inserted span.
     */
    add(highlight: Highlight, el?: Element | null): void;
    /**
     * Remove a highlight from the DOM.
     *
     * This will intelligently re-apply previously tracked highlights onto the
     * region that a highlight has been removed from (e.g. if a removal happened
     * to a range contained within another highlight).
     *
     * If `el` is already known, it can be passed in to avoid a lookup call.
     */
    remove(highlight: Highlight, el?: Element | null): void;
    /**
     * Apply a list of text highlights to the given Element
     */
    private applyHighlights;
    /**
     * Temporarily focus on a specific Highlight range
     *
     * This applies a different class wrap to the highlight to bring user's
     * focus to it without interfering with other highlighted text in the document.
     */
    focus(highlight: Highlight, color: Color): void;
    /**
     * Blur the previously focused highlight
     */
    blur(): void;
}
//# sourceMappingURL=SelectionManager.d.ts.map
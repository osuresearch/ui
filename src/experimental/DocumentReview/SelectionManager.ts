
// @ts-ignore
import rangy from 'rangy';
import 'rangy/lib/rangy-textrange';
import 'rangy/lib/rangy-classapplier';
import 'rangy/lib/rangy-highlighter';
import 'rangy/lib/rangy-serializer';

type Highlight = {
    /** DOM element where start/end are relative to */
    containerId: string;

    /** Character range start for restoring the highlight */
    start: number;

    /** Character range end for restoring the highlight */
    end: number;

    /** Highlighted text */
    context: string;
}

/**
 * Find the closest ancestor element with an `id` and a `data-comment-*` attribute
 */
function findClosestCommentInlineElement(node: Node): Element | null {
    let el: Element | null = null; 
    
    if (node.nodeType === node.ELEMENT_NODE) {
        el = node as Element;
    } else {
        // Text node, comment node, etc.
        el = node.parentElement;
    }

    // Somehow a comment/text node at the top level of the DOM. Exit.
    if (!el) {
        return null;
    }
    
    // Look for a parent (or self) with both an ID attribute and the right data tag
    return el.closest('[id][data-comment-inline]');
}


type CharacterRange = {
    start: number;
    end: number;
}

type SelectionRange = {
    backward: boolean; // unused
    characterRange: CharacterRange;
}

/**
 * Abstraction over range selection save, restore, and associations
 */
export default class SelectionManager {
    highlighter: any;
    document: Document;

    classApplier: any;

    /** Mapping between an element ID and all the highlights associated with it */
    private highlights: Map<string, Highlight[]>;

    constructor(document: Document) {
        rangy.init();
        this.document = document;
        this.highlights = new Map<string, Highlight[]>();

        this.classApplier = rangy.createClassApplier('highlight', {
            ignoreWhiteSpace: true,
            tagNames: ["span", "a"]
        });

        this.highlighter = rangy.createHighlighter(document, 'TextRange');
        this.highlighter.addClassApplier(this.classApplier);
    }

    public highlightSelection(): Highlight | null {
        const selection = rangy.getSelection(this.document);
        // .expand('word', { trim: true, wordOptions: { wordRegex: /[a-z0-9]+(['\-][a-z0-9]+)*/gi }} )
        // const serializedPrev = this.highlighter.serialize(selection);
        // console.debug('[highlightSelection] Serialized highlighter prev', serializedPrev);

        const anchor = selection?.anchorNode || null;
        const focus = selection?.focusNode || null;
        if (!anchor || !focus) return null;

        console.debug('[highlightSelection] anchor', anchor);
        console.debug('[highlightSelection] focus', focus);

        // Target element is the beginning of the selection
        const el = findClosestCommentInlineElement(anchor);
        if (!el) return null;

        // Don't allow a selection to span multiple containers
        const focusEl = findClosestCommentInlineElement(focus);
        if (focusEl !== el) {
            console.debug('[highlightSelection] Focus is not anchor', focusEl, el);
            return null;
        }

        console.debug('[highlightSelection] Closest el', el);

        // const serialized = rangy.serializeSelection(selection, false, el);
        // console.debug('highlightSelection] Serialized sel', serialized);

        // const bookmark = selection.getBookmark(el);
        // console.debug('[highlightSelection] Bookmark relative to el', bookmark);

        // Range relative to el
        const ranges = selection.saveCharacterRanges(el) as SelectionRange[];
        console.debug('[highlightSelection] Ranges', ranges);

        // Combine selection ranges into a single min/max range
        // since we don't actually support multiple selections
        let start = ranges[0].characterRange.start;
        let end = ranges[0].characterRange.end;
        for (let i = 1; i < ranges.length; i++) {
            start = Math.min(start, ranges[i].characterRange.start);
            end = Math.max(end, ranges[i].characterRange.end);
        }

        const highlight: Highlight = {
            start,
            end,
            containerId: el.id,
            context: selection.toString()
        };

        this.add(highlight, el);

        selection.restoreCharacterRanges(el, ranges);

        return highlight;

        // const opts = {
        //     selection,
        //     containerElementId: el.id
        // };

        // this.highlighter.highlightSelection('highlight', opts);
        
        // const serializedAll = this.highlighter.serialize(selection);
        // console.debug('[highlightSelection] Serialized highlighter all', serializedAll);

        // return highlight;
    }

    /**
     * Add a new highlight to the DOM.
     * 
     * If `el` is already known, it can be passed in to avoid a lookup call
     */
    public add(highlight: Highlight, el: Element | null = null) {
        const id = highlight.containerId;

        if (!el) {
            el = this.document.getElementById(id);
        }

        if (!el) {
            console.warn('[add] Could not find el for highlight', highlight);
            return;
        }

        const range = rangy.createRange(this.document);
        range.selectCharacters(el, highlight.start, highlight.end);
        this.classApplier.applyToRange(range);

        // Track it in the map 
        const arr = this.highlights.get(id) || [];
        arr.push(highlight);
        this.highlights.set(id, arr);

        console.debug('[add] New list', id, arr);
    }

    /**
     * Remove a highlight from the DOM.
     * 
     * This will intelligently re-apply previously tracked highlights onto the 
     * region that a highlight has been removed from (e.g. if a removal happened
     * to a range contained within another highlight).
     * 
     * If `el` is already known, it can be passed in to avoid a lookup call.
     */
    public remove(highlight: Highlight, el: Element | null = null) {
        const id = highlight.containerId;

        if (!el) {
            el = this.document.getElementById(id);
        }

        if (!el) {
            console.warn('[add] Could not find el for highlight', highlight);
            return;
        }

        // Undo range
        const range = rangy.createRange(this.document);
        range.selectCharacters(el, highlight.start, highlight.end);
        this.classApplier.undoToRange(range);

        // Remove from tracked highlights
        let arr = this.highlights.get(id) || [];
        arr = arr.filter((h) => h.start !== highlight.start && h.end !== highlight.end);
        this.highlights.set(id, arr);

        console.debug('[remove] New list', id, arr);

        // Reapply everything that wasn't removed to cover the range again
        this.applyHighlights(arr, el);
    }

    /**
     * Apply a list of text highlights to the given Element
     */
    private applyHighlights(highlights: Highlight[], el: Element) {
        const range = rangy.createRange(this.document);

        highlights.forEach((h) => {
            range.selectCharacters(el, h.start, h.end);
            this.classApplier.applyToRange(range);
        });
    }
}

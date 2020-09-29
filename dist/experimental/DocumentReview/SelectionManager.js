"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _rangy = _interopRequireDefault(require("rangy"));

require("rangy/lib/rangy-textrange");

require("rangy/lib/rangy-classapplier");

require("rangy/lib/rangy-highlighter");

require("rangy/lib/rangy-serializer");

// @ts-ignore

/**
 * Find the closest ancestor element with an `id` and a `data-comment-*` attribute
 */
function findClosestCommentInlineElement(node) {
  var el = null;

  if (node.nodeType === node.ELEMENT_NODE) {
    el = node;
  } else {
    // Text node, comment node, etc.
    el = node.parentElement;
  } // Somehow a comment/text node at the top level of the DOM. Exit.


  if (!el) {
    return null;
  } // Look for a parent (or self) with both an ID attribute and the right data tag


  return el.closest('[id][data-comment-inline]');
}
/* Rangy types that aren't defined, but we need to hint */


/**
 * Abstraction over range selection save, restore, and associations
 */
var SelectionManager = /*#__PURE__*/function () {
  // Rangy.Highlighter
  // Rangy.ClassApplier
  // Rangy.ClassApplier
  // Rangy.Range

  /** Mapping between an element ID and all the highlights associated with it */
  function SelectionManager(document) {
    (0, _classCallCheck2.default)(this, SelectionManager);
    (0, _defineProperty2.default)(this, "document", void 0);
    (0, _defineProperty2.default)(this, "highlighter", void 0);
    (0, _defineProperty2.default)(this, "classApplier", void 0);
    (0, _defineProperty2.default)(this, "focusClassApplier", void 0);
    (0, _defineProperty2.default)(this, "focused", void 0);
    (0, _defineProperty2.default)(this, "highlights", void 0);

    _rangy.default.init();

    this.document = document;
    this.highlights = new Map();
    var classApplierOpts = {
      ignoreWhiteSpace: true,
      tagNames: ['span', 'a', 'i', 'b', 'em', 'strong', 'br']
    };
    this.classApplier = _rangy.default.createClassApplier('highlight', classApplierOpts);
    this.highlighter = _rangy.default.createHighlighter(document, 'TextRange');
    this.highlighter.addClassApplier(this.classApplier);
    this.focusClassApplier = _rangy.default.createClassApplier('highlight-focus', classApplierOpts);
  }

  (0, _createClass2.default)(SelectionManager, [{
    key: "highlightSelection",
    value: function highlightSelection() {
      var selection = _rangy.default.getSelection(this.document); // .expand('word', { trim: true, wordOptions: { wordRegex: /[a-z0-9]+(['\-][a-z0-9]+)*/gi }} )
      // const serializedPrev = this.highlighter.serialize(selection);
      // console.debug('[highlightSelection] Serialized highlighter prev', serializedPrev);


      var anchor = (selection === null || selection === void 0 ? void 0 : selection.anchorNode) || null;
      var focus = (selection === null || selection === void 0 ? void 0 : selection.focusNode) || null;
      if (!anchor || !focus) return null;
      console.debug('[highlightSelection] anchor', anchor);
      console.debug('[highlightSelection] focus', focus); // Target element is the beginning of the selection

      var el = findClosestCommentInlineElement(anchor);
      if (!el) return null; // Don't allow a selection to span multiple containers

      var focusEl = findClosestCommentInlineElement(focus);

      if (focusEl !== el) {
        console.debug('[highlightSelection] Focus is not anchor', focusEl, el);
        return null;
      }

      console.debug('[highlightSelection] Closest el', el); // const serialized = rangy.serializeSelection(selection, false, el);
      // console.debug('highlightSelection] Serialized sel', serialized);
      // const bookmark = selection.getBookmark(el);
      // console.debug('[highlightSelection] Bookmark relative to el', bookmark);
      // Range relative to el

      var ranges = selection.saveCharacterRanges(el);
      console.debug('[highlightSelection] Ranges', ranges); // Combine selection ranges into a single min/max range
      // since we don't actually support multiple selections

      var start = ranges[0].characterRange.start;
      var end = ranges[0].characterRange.end;

      for (var i = 1; i < ranges.length; i++) {
        start = Math.min(start, ranges[i].characterRange.start);
        end = Math.max(end, ranges[i].characterRange.end);
      }

      var highlight = {
        start: start,
        end: end,
        containerId: el.id,
        context: selection.toString()
      };
      this.add(highlight, el);
      selection.restoreCharacterRanges(el, ranges);
      return highlight; // const opts = {
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
     * If `el` is already known, it can be passed in to avoid a lookup call.
     * 
     * The provided Highlight will have `.el` updated to the inserted span. 
     */

  }, {
    key: "add",
    value: function add(highlight) {
      var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var id = highlight.containerId;

      if (!el) {
        el = this.document.getElementById(id);
      }

      if (!el) {
        console.warn('[add] Could not find el for highlight', highlight);
        return;
      }

      var range = _rangy.default.createRange(this.document);

      console.debug('[add] range before apply', range);
      range.selectCharacters(el, highlight.start, highlight.end);
      this.classApplier.applyToRange(range); // Grab the new parent element of the selection range - 
      // this should be the selection span (hopefully?)

      highlight.el = range.startContainer.parentElement;
      console.debug('[add] range after apply', range); // Track it, mapped to the container element. This is to 
      // speed up removal calculations on large documents that may
      // contain hundreds of highlights across multiple container elements.

      var arr = this.highlights.get(id) || [];
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

  }, {
    key: "remove",
    value: function remove(highlight) {
      var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var id = highlight.containerId;

      if (!el) {
        el = this.document.getElementById(id);
      }

      if (!el) {
        console.warn('[add] Could not find el for highlight', highlight);
        return;
      } // Undo range


      var range = _rangy.default.createRange(this.document);

      range.selectCharacters(el, highlight.start, highlight.end);
      this.classApplier.undoToRange(range); // Remove from tracked highlights within the container element

      var arr = this.highlights.get(id) || [];
      arr = arr.filter(function (h) {
        return h.start !== highlight.start && h.end !== highlight.end;
      });
      this.highlights.set(id, arr);
      console.debug('[remove] New list', id, arr); // Reapply everything that wasn't removed to cover the range again

      this.applyHighlights(arr, el);
    }
    /**
     * Apply a list of text highlights to the given Element
     */

  }, {
    key: "applyHighlights",
    value: function applyHighlights(highlights, el) {
      var _this = this;

      var range = _rangy.default.createRange(this.document);

      highlights.forEach(function (h) {
        range.selectCharacters(el, h.start, h.end);

        _this.classApplier.applyToRange(range);
      });
    }
    /**
     * Temporarily focus on a specific Highlight range
     * 
     * This applies a different class wrap to the highlight to bring user's
     * focus to it without interfering with other highlighted text in the document.
     */

  }, {
    key: "focus",
    value: function focus(highlight, color) {
      // Blur out whatever was previously focused (can only have one at a time)
      this.blur(); // Use the container element - as the target .el for the Highlight
      // may not exist in some situations 

      var el = this.document.getElementById(highlight.containerId);

      var range = _rangy.default.createRange(this.document);

      range.selectCharacters(el, highlight.start, highlight.end);
      console.debug('[focus] Range', highlight, range);
      this.focusClassApplier.applyToRange(range);
      this.focused = range; // This doesn't work because:
      // 1. if the highlight spans multiple elements, we're not coloring them all
      // 2. somehow rangy loses the ability to delete the span on blur() 
      // There is an option to configure extra properties as part of createClassApplier,
      // but I don't know of a way to UPDATE options for Rangy.
      // See: https://github.com/timdown/rangy/wiki/Class-Applier-Module
      // For now - we'll just have a consistent highlight color and not attempt to 
      // change the highlight color to match the comment color. Probably better
      // for accessibility anyway...
      // range.startContainer.parentElement.style.backgroundColor = colorToCss(color, 0.5);
    }
    /**
     * Blur the previously focused highlight
     */

  }, {
    key: "blur",
    value: function blur() {
      if (typeof this.focused !== 'undefined') {
        var range = this.focused; // range.startContainer.parentElement.style.backgroundColor = '';

        this.focusClassApplier.undoToRange(range);
        this.focused = undefined;
      } // there's also .undoToAncestor(ancestorWithClass, positionsToPreserve)

    }
  }]);
  return SelectionManager;
}();

exports.default = SelectionManager;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _utility = require("./utility");

/**
 * Reference to the context that a comment is pointing to within the document
 */
var CommentContext = /*#__PURE__*/function () {
  /** Rect of the context element relative to the Document */
  function CommentContext(target) {
    (0, _classCallCheck2.default)(this, CommentContext);
    this.target = target; // This only really ever needs to be calculated once since the document
    // is in a fixed width container (thus can never reflow vertically)

    if (this.target instanceof Element) {
      this.rect = (0, _utility.getDocumentRect)(this.target);
    } else {
      if (!this.target.el) {
        throw new Error('Tried to create a ContextTarget using a Highlight without an assigned .el');
      }

      this.rect = (0, _utility.getDocumentRect)(this.target.el);
    }
  }
  /**
   * Focus the context with a specific color highlighter
   */


  (0, _createClass2.default)(CommentContext, [{
    key: "focus",
    value: function focus(color) {
      // Removing color highlighting - we don't do it for inline due to complications
      // and I want block highlights to also have the same behavior.
      // const background = colorToCss(color, 0.1);
      this.getTargetElements().forEach(function (el) {
        el.classList.add('comment-context-focus'); // el.style.background = colorToCss(color, 0.1);
      });
    }
  }, {
    key: "blur",
    value: function blur() {
      this.getTargetElements().forEach(function (el) {
        el.classList.remove('comment-context-focus'); // el.style.background = '';
      });
    }
    /**
     * Return all the DOM elements representing this context
     */

  }, {
    key: "getTargetElements",
    value: function getTargetElements() {
      var elements = []; // TODO: Future enhancement is to support a Highlight
      // that may cross over multiple elements. 

      if (this.target instanceof Element) {
        elements.push(this.target);
      } else {
        elements.push(this.target.el);
      }

      return elements;
    }
    /**
     * Returns the Highlight target, if this is a highlight context
     */

  }, {
    key: "getHighlight",
    value: function getHighlight() {
      return this.target;
    }
  }, {
    key: "isHighlight",
    get: function get() {
      return this.target.containerId !== undefined;
    }
  }]);
  return CommentContext;
}();

exports.default = CommentContext;
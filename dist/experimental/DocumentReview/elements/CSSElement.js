"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

// I know this is incredibly dumb, but we need to inject a CSS file into 
// the DOM of an IFrame without accessing external scripts for portability. 
// So each component has its own CSS block that gets combined by CSSElement.
var DOCUMENT_CSS = "\n* {\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  \n  /* Disable all selection by default */\n  user-select: none;\n}\n\n/* Selection highlight for blocks & text selection */\n.body-wrapper ::selection,\n.body-wrapper ::-moz-selection {\n    background: #ffe168;\n}\n\n[data-comment-block]:hover {\n    background: #ffe168;\n    cursor: pointer;\n}\n\n/* TODO: Better highlight color? */\n.highlight {\n  background: #fff0b4;\n}\n\n.highlight-focus,\n.comment-context-focus {\n  background: #ffe168;\n}\n\n[data-comment-inline], \n[data-comment-inline] *,\n.highlight {\n  user-select: text;\n}\n\n.body-wrapper {\n  /* Via http://jsfiddle.net/mturjak/2wk6Q/1949/ */\n  width: 210mm;\n  min-width: 210mm;\n\n  min-height: 297mm;\n  padding: 20mm;\n  margin: 10mm auto;\n  border: 1px #D3D3D3 solid;\n  border-radius: 5px;\n  background: white;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n}\n\nbody {\n  display: flex;\n  flex-direction: row;\n  margin: 0;\n  background: #f8f9fa;\n}\n";
var TOC_CSS = "\n.comments-toc {\n  position: sticky;\n  align-self: flex-start; /* Required for sticky to work */\n  top: 0;\n  \n  height: 100vh;\n}\n\n.comments-toc-wrapper {\n  min-width: 250px;\n  width: 250px;\n  \n  margin-left: 0;\n  margin-right: 16px;\n  \n  transition: margin-left 0.5s ease-in-out;\n  height: calc(100vh - 40px - 20px);\n}\n\n.comments-toc.is-collapsed .comments-toc-wrapper {\n  margin-left: -250px;\n}\n\n.comments-toc-scrollbox {\n  height: 100%;\n  \n  /* Hide scrollbar unless we hover it */\n  overflow: auto;\n  visibility: hidden;\n}\n\n.comments-toc-sections {\n  display: block;\n  list-style: none;\n  visibility: visible;\n\n  margin: 0;\n  padding: 0;\n  padding-left: 16px;\n}\n\n.comments-toc a {\n  text-decoration: none;\n  color: #333;\n  \n  font-family: sans-serif;\n  font-size: 16px;\n  \n  display: inline-block;\n  padding: 4px 0;\n}\n\n/* Fade effect at the bottom for long scrolling. Could be an element instead of ::after... */\n.comments-toc-fade {\n  content: '';\n  visibility: visible;\n  \n  position: absolute;\n  bottom: 0;\n  left: 0;\n  \n  width: 100%;\n  height: 100px;\n  \n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));\n}\n\n/* Hover responses */\n.comments-toc a:hover {\n  color: #666;\n}\n\n.comments-toc-scrollbox:hover,\n.comments-toc-scrollbox:focus {\n  visibility: visible;\n}\n\n.comments-toc:hover .comments-toc-fade {\n  display: none;\n}\n\n/* Smaller font size for subsections */\n.comments-section.comments-section-level-1 a {\n  font-size: 95%;\n  margin-left: 1em;\n}\n\n.comments-section.comments-section-level-2 a {\n  font-size: 90%;\n  margin-left: 2em;\n}\n";
var HAMBURGER_BUTTON_CSS = "\n/*!\n * Hamburgers\n * @description Tasty CSS-animated hamburgers\n * @author Jonathan Suh @jonsuh\n * @site https://jonsuh.com/hamburgers\n * @link https://github.com/jonsuh/hamburgers\n */\n.hamburger {\n  padding: 15px 15px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  overflow: visible; }\n  .hamburger:hover {\n    opacity: 0.7; }\n  .hamburger.is-active:hover {\n    opacity: 0.7; }\n  .hamburger.is-active .hamburger-inner,\n  .hamburger.is-active .hamburger-inner::before,\n  .hamburger.is-active .hamburger-inner::after {\n    background-color: #888; }\n  \n.hamburger-box {\n  width: 20px;\n  height: 24px;\n  display: inline-block;\n  position: relative; }\n\n.hamburger-inner {\n  display: block;\n  top: 50%;\n  margin-top: -2px; }\n  .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {\n    width: 20px;\n    height: 3px;\n    background-color: #888;\n    border-radius: 4px;\n    position: absolute;\n    transition-property: transform;\n    transition-duration: 0.15s;\n    transition-timing-function: ease; }\n  .hamburger-inner::before, .hamburger-inner::after {\n    content: \"\";\n    display: block; }\n  .hamburger-inner::before {\n    top: -8px; }\n  .hamburger-inner::after {\n    bottom: -8px; }\n\n.hamburger--arrow.is-active .hamburger-inner::before {\n  transform: translate3d(-5px, 4px, 0) rotate(-45deg) scale(0.7, 1); }\n\n.hamburger--arrow.is-active .hamburger-inner::after {\n  transform: translate3d(-5px, -4px, 0) rotate(45deg) scale(0.7, 1); }\n";
var SIDEBAR_CSS = "\n.comments-sidebar {\n  position: relative;\n  min-width: 300px;\n  width: 300px;\n  \n  margin-left: 16px;\n}\n";
var COMMENT_CSS = "\n.comment {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  \n  padding-bottom: 16px;\n  padding-right: 16px;\n  padding-left: 16px;\n  \n  font-family: sans-serif; \n  font-size: 12px;\n}\n\n.comment.is-reply {\n  position: initial;\n}\n\n/* I'm using a psuedo element instead of giving the .comment a border-left\n  because I don't want the border to go the full height - I want some height\n  to spill over so that the action buttons are easier to click on :hover */\n.comment-edge {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 14px;\n  width: 2px;\n}\n\n.comment-header {\n  display: flex;\n  padding-bottom: 6px;\n  font-size: 12px;\n}\n\n.comment-info {\n  color: #666;\n  flex-grow: 1;\n  \n}\n\n.comment-updated {\n  color: #666;\n  visibility: hidden;\n}\n\n.comment-reply,\n.comment-delete {\n  float: right;\n  visibility: hidden;\n  \n  font-family: sans-serif; \n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: none;\n\n  color: rgb(50, 131, 200);\n  text-decoration: underline;\n  cursor: pointer;\n}\n  \n.comment.is-reply {\n  padding-right: 0;\n  padding-bottom: 0;\n  margin-top: 8px;\n}\n\n.comment-delete {\n  text-decoration: none;\n  font-size: 16px;\n  line-height: 12px;\n}\n\n/* Explicit child selectors to avoid cascading to replies */\n.comment:hover > .comment-reply,\n.comment:hover > .comment-header > .comment-updated,\n.comment:hover > .comment-header > .comment-delete {\n  visibility: visible;\n}\n\n.comment-delete {\n  margin-left: 0.5rem;\n}\n\n.comment-content, .comment-content * {\n  user-select: text;\n  word-break: break-word;\n  padding-bottom: 0.5em;\n}\n";
var CONNECTOR_CSS = "\n.comment-context-connection {\n  position: absolute;\n  width: 100%;\n  \n  /* Ignore events on the line - it's just visual */\n  pointer-events: none;\n  z-index: 9999;\n\n  \n  /* For debugging container size \n  background: rgba(255, 0, 0, 0.05);\n  */\n\n  opacity: 0.25;\n}\n\n.comment-context-connection line {\n    stroke-width: 1;\n}\n\n/* Note: :focus-within doesn't work in IE11 but \n  this degradation won't affect usability so who cares */\n\n.comment:hover .comment-context-connection,\n.comment:focus-within .comment-context-connection {\n  opacity: 1;\n}\n";

var CSSElement = /*#__PURE__*/function () {
  function CSSElement(document) {
    (0, _classCallCheck2.default)(this, CSSElement);
    var style = document.createElement('style');
    style.innerText = DOCUMENT_CSS + TOC_CSS + SIDEBAR_CSS + COMMENT_CSS + HAMBURGER_BUTTON_CSS + CONNECTOR_CSS;
    document.body.appendChild(style);
    this.style = style;
  }

  (0, _createClass2.default)(CSSElement, [{
    key: "remove",
    value: function remove() {
      this.style.remove();
    }
  }]);
  return CSSElement;
}();

exports.default = CSSElement;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDocumentRect = getDocumentRect;
exports.colorToCss = colorToCss;
exports.isAncestorOf = isAncestorOf;

/**
 * Calculate absolute position relative to the Document for an element
 * 
 * @author https://stackoverflow.com/a/26230989
 */
function getDocumentRect(el) {
  if (!el.ownerDocument) {
    throw new Error('Element is not in a document');
  }

  var box = el.getBoundingClientRect();
  var body = el.ownerDocument.body;
  var docEl = el.ownerDocument.documentElement;
  var scrollTop =
  /* window.pageYOffset || */
  docEl.scrollTop || body.scrollTop;
  var scrollLeft =
  /* window.pageXOffset || */
  docEl.scrollLeft || body.scrollLeft;
  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;
  var top = Math.round(box.top + scrollTop - clientTop);
  var left = Math.round(box.left + scrollLeft - clientLeft);
  var width = box.width;
  var height = box.height;
  return new DOMRect(left, top, width, height);
}

function colorToCss(color) {
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(".concat(color[0], ", ").concat(color[1], ", ").concat(color[2], ", ").concat(alpha, ")");
}

function isAncestorOf(parent, el) {
  do {
    if (el === parent) {
      return true;
    }

    el = el.parentElement || el.parentNode;
  } while (el !== null && el.nodeType === 1);

  return false;
}
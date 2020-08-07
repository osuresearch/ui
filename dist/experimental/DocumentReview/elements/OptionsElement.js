"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

/**
 * Floating options box that appears when someone selects some text to review
 */
var OptionsElement = function OptionsElement(document) {
  (0, _classCallCheck2.default)(this, OptionsElement);
  var container = document.createElement('div');
  container.classList.add('comments-options');
  document.body.appendChild(container);
  this.container = container;
} // public focus(target: HTMLElement, offset: ????) {
// }
;

exports.default = OptionsElement;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _accordion = require("primereact/accordion");

var _Tab = require("./Tab");

var Accordion = function Accordion(props) {
  return /*#__PURE__*/_react.default.createElement(_accordion.Accordion, props, props.children);
};

Accordion.Tab = _Tab.Tab;
var _default = Accordion;
exports.default = _default;
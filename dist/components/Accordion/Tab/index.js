"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tab = void 0;

var _react = _interopRequireDefault(require("react"));

var _accordion = require("primereact/accordion");

var Tab = function Tab(props) {
  return /*#__PURE__*/_react.default.createElement(_accordion.AccordionTab, props, props.children);
};

exports.Tab = Tab;
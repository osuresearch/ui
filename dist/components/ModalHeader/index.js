"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var ModalHeader = function ModalHeader(_ref) {
  var children = _ref.children,
      _ref$hasCloseButton = _ref.hasCloseButton,
      hasCloseButton = _ref$hasCloseButton === void 0 ? true : _ref$hasCloseButton;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "modal-title"
  }, children), hasCloseButton && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")));
};

var _default = ModalHeader;
exports.default = _default;
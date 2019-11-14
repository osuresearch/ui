"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var ModalHeader = function ModalHeader(props) {
  return _react.default.createElement("div", {
    className: "modal-header"
  }, _react.default.createElement("h5", {
    className: "modal-title"
  }, props.children), props.hasCloseButton && _react.default.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, _react.default.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")));
};

ModalHeader.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.object]),
  hasCloseButton: _propTypes.default.bool
};
ModalHeader.defaultProps = {
  hasCloseButton: false
};
var _default = ModalHeader;
exports.default = _default;
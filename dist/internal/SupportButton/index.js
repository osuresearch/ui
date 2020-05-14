"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../../components/Icon"));

var SupportButton = function SupportButton(_ref) {
  var title = _ref.title,
      isFixed = _ref.isFixed,
      showModal = _ref.showModal,
      modalOpen = _ref.modalOpen;
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "support-btn-wrapper",
    className: isFixed ? 'is-fixed' : ''
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn btn-outline-secondary support-btn",
    disabled: modalOpen,
    onClick: showModal
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "comment-o"
  }), " ", title));
};

var _default = SupportButton;
exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PreviousPageButton;

var _react = _interopRequireDefault(require("react"));

function PreviousPageButton(_ref) {
  var ctx = _ref.ctx;
  var noPreviousPage = ctx.offset === 0;

  var goToPreviousPage = function goToPreviousPage() {
    var previous = ctx.offset - ctx.limit;

    if (previous >= 0) {
      ctx.setOffset(previous);
    }
  };

  return /*#__PURE__*/_react.default.createElement("li", {
    className: "page-item page-navigation ".concat(noPreviousPage ? 'disabled' : '')
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "page-link",
    "aria-label": "Previous",
    title: "Previous",
    onClick: goToPreviousPage,
    disabled: noPreviousPage
  }, "\u2039"));
}
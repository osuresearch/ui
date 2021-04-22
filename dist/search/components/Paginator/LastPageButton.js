"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LastPageButton;

var _react = _interopRequireDefault(require("react"));

function LastPageButton(_ref) {
  var ctx = _ref.ctx,
      hits = _ref.hits,
      pageCount = _ref.pageCount;
  var noNextPage = hits / (ctx.offset + ctx.limit) <= 1;

  var goToLastPage = function goToLastPage() {
    ctx.setOffset((pageCount - 1) * ctx.limit);
  };

  return /*#__PURE__*/_react.default.createElement("li", {
    className: "page-item page-navigation ".concat(noNextPage ? 'disabled' : '')
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "page-link",
    "aria-label": "Last",
    title: "Last",
    onClick: goToLastPage,
    disabled: noNextPage
  }, "\xBB"));
}
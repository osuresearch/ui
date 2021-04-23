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
    var _window, _ctx$ref$current;

    ctx.setOffset((pageCount - 1) * ctx.limit);
    (_window = window) === null || _window === void 0 ? void 0 : _window.scrollTo({
      top: (_ctx$ref$current = ctx.ref.current) === null || _ctx$ref$current === void 0 ? void 0 : _ctx$ref$current.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
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
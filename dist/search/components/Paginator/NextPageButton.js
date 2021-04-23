"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NextPageButton;

var _react = _interopRequireDefault(require("react"));

function NextPageButton(_ref) {
  var ctx = _ref.ctx,
      hits = _ref.hits;
  var noNextPage = hits / (ctx.offset + ctx.limit) <= 1;

  var goToNextPage = function goToNextPage() {
    var next = ctx.offset + ctx.limit;

    if (next <= hits) {
      var _window, _ctx$ref$current;

      ctx.setOffset(next);
      (_window = window) === null || _window === void 0 ? void 0 : _window.scrollTo({
        top: (_ctx$ref$current = ctx.ref.current) === null || _ctx$ref$current === void 0 ? void 0 : _ctx$ref$current.offsetTop,
        left: 0,
        behavior: 'smooth'
      });
    }
  };

  return /*#__PURE__*/_react.default.createElement("li", {
    className: "page-item page-navigation ".concat(noNextPage ? 'disabled' : '')
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "page-link",
    "aria-label": "Next",
    title: "Next",
    onClick: goToNextPage,
    disabled: noNextPage
  }, "\u203A"));
}
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PageButton;

var _react = _interopRequireDefault(require("react"));

function PageButton(_ref) {
  var ctx = _ref.ctx,
      page = _ref.page;

  var isActive = function isActive(pageNumber) {
    return (ctx.offset + ctx.limit) / ctx.limit === pageNumber;
  };

  var handlePageChange = function handlePageChange(pageNumber) {
    var _window, _ctx$ref$current$offs, _ctx$ref$current;

    ctx.setOffset((pageNumber - 1) * ctx.limit);
    (_window = window) === null || _window === void 0 ? void 0 : _window.scrollTo((_ctx$ref$current$offs = (_ctx$ref$current = ctx.ref.current) === null || _ctx$ref$current === void 0 ? void 0 : _ctx$ref$current.offsetTop) !== null && _ctx$ref$current$offs !== void 0 ? _ctx$ref$current$offs : 0, 0);
  };

  return /*#__PURE__*/_react.default.createElement("li", {
    className: "page-item ".concat(isActive(page + 1) ? 'active' : '')
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "page-link",
    onClick: function onClick() {
      return handlePageChange(page + 1);
    }
  }, page + 1));
}
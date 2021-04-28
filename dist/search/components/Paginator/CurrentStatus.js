"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CurrentStatus;

var _react = _interopRequireDefault(require("react"));

function CurrentStatus(_ref) {
  var ctx = _ref.ctx,
      hits = _ref.hits;
  var offsetAndLimit = ctx.offset + ctx.limit;
  var total = offsetAndLimit < hits ? offsetAndLimit : hits;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "current-status"
  }, "Showing ", ctx.offset + 1, " to ", total, " of ", hits);
}
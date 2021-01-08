"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ResultMessages;

var _react = _interopRequireDefault(require("react"));

function ResultMessages(_ref) {
  var hits = _ref.hits,
      hasNoHits = _ref.hasNoHits,
      hasMoreHits = _ref.hasMoreHits,
      totalHits = _ref.totalHits,
      emptyRenderer = _ref.emptyRenderer,
      error = _ref.error;
  return /*#__PURE__*/_react.default.createElement("div", {
    role: "alert"
  }, hits.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "sr-only"
  }, hits.length, " hits in the listbox below."), error && /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-header lookup-error"
  }, error), hasNoHits && !emptyRenderer && /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-header"
  }, "There are no hits. Try different search terms."), hasNoHits && emptyRenderer && emptyRenderer(), hasMoreHits && /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-header"
  }, "There are ", /*#__PURE__*/_react.default.createElement("strong", null, totalHits - hits.length), " additional hits. Refine your search terms."));
}
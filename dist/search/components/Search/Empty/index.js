"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

/**
 * Render the children of this component if the search completed 
 * successfully but there are no results to display.
 */
var Empty = function Empty(_ref) {
  var children = _ref.children;
  var data = (0, _react.useContext)(_.Context); // In some loading state or we have results, hide. 

  if (data.loading || data.error || !data.results || data.results.length > 0) {
    return null;
  } // We're not in a loading state, there are results, 
  // but it's an empty array. So show the empty message.


  return /*#__PURE__*/_react.default.createElement("div", {
    className: "search-empty"
  }, children);
};

var _default = Empty;
exports.default = _default;
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

/**
 * Render the children of this component if the search failed to complete
 * (backend threw an error, connection problem, etc).
 */
var Error = function Error(_ref) {
  var children = _ref.children;
  var data = (0, _react.useContext)(_.Context);

  if (!data.error) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "search-error"
  }, children);
};

var _default = Error;
exports.default = _default;
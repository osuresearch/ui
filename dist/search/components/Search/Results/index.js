"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

/**
 * Render the results of a search as a simple list of components. 
 * 
 * Provide your own component to render each result (e.g. as table rows, Kanban cards, etc).
 */
var Results = function Results(_ref) {
  var resultRenderer = _ref.resultRenderer;
  var data = (0, _react.useContext)(_.Context);

  if (!data.results) {
    return null;
  }

  var RenderComponent = resultRenderer;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "search-results"
  }, data.results.map(function (result, index) {
    return /*#__PURE__*/_react.default.createElement(RenderComponent, {
      key: index,
      result: result
    });
  }));
};

var _default = Results;
exports.default = _default;
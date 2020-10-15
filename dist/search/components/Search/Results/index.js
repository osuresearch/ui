"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

var _Mapper = _interopRequireDefault(require("./Mapper"));

var _Panel = _interopRequireDefault(require("./Panel"));

var _AggregatePanel = _interopRequireDefault(require("./AggregatePanel"));

/**
 * Render the results of a search as a simple list of components. 
 * 
 * Provide your own component to render each result (e.g. as table rows, Kanban cards, etc).
 */
var Results = function Results(_ref) {
  var children = _ref.children;
  var data = (0, _react.useContext)(_.Context);
  var results = data.results;
  var totalResults = data.totalResults;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "search-results"
  }, /*#__PURE__*/_react.default.cloneElement(children, {
    results: results,
    totalResults: totalResults
  }));
};

Results.Mapper = _Mapper.default;
Results.Panel = _Panel.default;
Results.AggregatePanel = _AggregatePanel.default;
var _default = Results;
exports.default = _default;
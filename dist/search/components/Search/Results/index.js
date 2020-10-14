"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

var _Mapper = _interopRequireDefault(require("./Mapper"));

var _Panel = _interopRequireDefault(require("./Panel"));

var _AggregatePanel = _interopRequireDefault(require("./AggregatePanel"));

// Because I can't write a simple recursive function, apparently: https://stackoverflow.com/a/39596586
function FindInObjByKey(obj, key) {
  var result;

  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (property === key) {
        return obj[key]; // returns the value
      } else if ((0, _typeof2.default)(obj[property]) === "object") {
        // Go deeper in an object
        result = FindInObjByKey(obj[property], key);

        if (typeof result !== "undefined") {
          return result;
        }
      }
    }
  }
}
/**
 * Render the results of a search as a simple list of components. 
 * 
 * Provide your own component to render each result (e.g. as table rows, Kanban cards, etc).
 */


var Results = function Results(_ref) {
  var children = _ref.children;
  var data = (0, _react.useContext)(_.Context); // Locate the (possibly nested) results array in the data object

  var results = FindInObjByKey(data, 'results');
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "search-results"
  }, /*#__PURE__*/_react.default.cloneElement(children, {
    results: results
  }));
};

Results.Mapper = _Mapper.default;
Results.Panel = _Panel.default;
Results.AggregatePanel = _AggregatePanel.default;
var _default = Results;
exports.default = _default;
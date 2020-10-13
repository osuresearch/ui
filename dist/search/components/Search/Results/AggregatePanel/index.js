"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _useSearch2 = _interopRequireDefault(require("../../../../hooks/useSearch"));

var _createBuckets = _interopRequireDefault(require("./helpers/createBuckets"));

var _balanceBuckets = _interopRequireDefault(require("./helpers/balanceBuckets"));

var _Empty = _interopRequireDefault(require("../../Empty"));

var _Error = _interopRequireDefault(require("../../Error"));

require("./index.scss");

var AggregatePanel = function AggregatePanel(_ref) {
  var provider = _ref.provider,
      results = _ref.results,
      totalResults = _ref.totalResults,
      categorizeBy = _ref.categorizeBy,
      children = _ref.children;

  var _useSearch = (0, _useSearch2.default)(provider),
      terms = _useSearch.terms;

  var renderCategory = function renderCategory(category, results) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "search-category"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "search-category-header"
    }, category), /*#__PURE__*/_react.default.createElement("ul", {
      className: "search-category-results"
    }, results.map(function (result, idx) {
      return /*#__PURE__*/_react.default.createElement("li", {
        key: "search-result-".concat(idx)
      }, /*#__PURE__*/_react.default.cloneElement(children, {
        result: result
      }));
    })));
  };

  if (terms) {
    // At least one result came back
    if (results && results.length > 0) {
      // Bucket results based on categorizeBy
      var buckets = (0, _createBuckets.default)(results, categorizeBy); // Split buckets into two columns, maximum of 5 buckets per column

      var leftKeys = Object.keys(buckets);
      leftKeys.splice(10);
      var rightKeys = leftKeys.splice(Math.ceil(leftKeys.length / 2)); // Balance results in each column

      var leftBuckets = {};
      leftKeys.forEach(function (key) {
        return leftBuckets[key] = buckets[key];
      });
      leftBuckets = (0, _balanceBuckets.default)(leftBuckets);
      var rightBuckets = {};
      rightKeys.forEach(function (key) {
        return rightBuckets[key] = buckets[key];
      });
      rightBuckets = (0, _balanceBuckets.default)(rightBuckets);
      return /*#__PURE__*/_react.default.createElement("div", {
        id: provider + '-results',
        className: "dropdown-menu search-aggregate-panel",
        role: "listbox"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "col-6"
      }, leftKeys.map(function (key) {
        return renderCategory(key, leftBuckets[key]);
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "col-6"
      }, rightKeys.map(function (key) {
        return renderCategory(key, rightBuckets[key]);
      }))), // If the total number of results exceeds the results array limit, display a prompt to narrow their search
      totalResults && totalResults - results.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
        className: "dropdown-header"
      }, "There are ", /*#__PURE__*/_react.default.createElement("strong", null, totalResults - results.length), " additional results. Please narrow your search."));
    }

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Empty.default, null, /*#__PURE__*/_react.default.createElement("div", {
      id: provider + '-results',
      className: "dropdown-menu search-aggregate-panel",
      role: "listbox"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "dropdown-header"
    }, "There are no matching results."))), /*#__PURE__*/_react.default.createElement(_Error.default, null, /*#__PURE__*/_react.default.createElement("div", {
      id: provider + '-results',
      className: "dropdown-menu search-aggregate-panel",
      role: "listbox"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "dropdown-header"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "lookup-error text-danger"
    }, "Something went wrong. Try reloading the page. If the problem persists, contact ", /*#__PURE__*/_react.default.createElement("a", {
      href: "mailto:orhelpdesk@osu.edu"
    }, "orhelpdesk@osu.edu"))))));
  } // Return null if there are no terms


  return null;
};

var _default = AggregatePanel;
exports.default = _default;
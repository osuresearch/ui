"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _RenderCategory = _interopRequireDefault(require("./RenderCategory"));

var _createBuckets = _interopRequireDefault(require("./helpers/createBuckets"));

var _balanceBuckets = _interopRequireDefault(require("./helpers/balanceBuckets"));

var DisplayResults = function DisplayResults(_ref) {
  var terms = _ref.terms,
      results = _ref.results,
      categorizeBy = _ref.categorizeBy,
      totalResults = _ref.totalResults,
      children = _ref.children;

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
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "col-6"
      }, leftKeys.map(function (key, i) {
        return /*#__PURE__*/_react.default.createElement(_RenderCategory.default, {
          key: "".concat(key, "-left-").concat(i),
          category: key,
          results: leftBuckets[key]
        }, children);
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "col-6"
      }, rightKeys.map(function (key, i) {
        return /*#__PURE__*/_react.default.createElement(_RenderCategory.default, {
          key: "".concat(key, "-right-").concat(i),
          category: key,
          results: rightBuckets[key]
        }, children);
      }))), // If the total number of results exceeds the results array limit, display a prompt to narrow their search
      totalResults && totalResults - results.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
        className: "dropdown-header"
      }, "There are ", /*#__PURE__*/_react.default.createElement("strong", null, totalResults - results.length), " additional results. Please narrow your search."));
    }
  }

  return null;
};

var _default = DisplayResults;
exports.default = _default;
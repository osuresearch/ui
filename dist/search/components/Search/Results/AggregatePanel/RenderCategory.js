"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RenderCategory;

var _react = _interopRequireDefault(require("react"));

function RenderCategory(_ref) {
  var category = _ref.category,
      categoryHeaderWrapper = _ref.categoryHeaderWrapper,
      results = _ref.results,
      children = _ref.children;

  var CategoryHeader = function CategoryHeader() {
    var Header = categoryHeaderWrapper;

    if (Header) {
      return /*#__PURE__*/_react.default.createElement(Header, null, category);
    }

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, category);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "search-category"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "search-category-header"
  }, /*#__PURE__*/_react.default.createElement(CategoryHeader, null)), /*#__PURE__*/_react.default.createElement("ul", {
    className: "search-category-results"
  }, results.map(function (result, idx) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: "search-result-".concat(idx)
    }, /*#__PURE__*/_react.default.cloneElement(children, {
      result: result
    }));
  })));
}
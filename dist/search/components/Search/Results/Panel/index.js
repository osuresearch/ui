"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _useSearch2 = _interopRequireDefault(require("../../../../hooks/useSearch"));

var _Empty = _interopRequireDefault(require("../../Empty"));

var _Error = _interopRequireDefault(require("../../Error"));

require("./index.scss");

var Panel = function Panel(_ref) {
  var provider = _ref.provider,
      results = _ref.results,
      totalResults = _ref.totalResults,
      children = _ref.children;

  var _useSearch = (0, _useSearch2.default)(provider),
      terms = _useSearch.terms;

  if (terms) {
    // At least one result came back
    if (results && results.length > 0) {
      return /*#__PURE__*/_react.default.createElement("div", {
        id: provider + '-results',
        className: "dropdown-menu",
        role: "listbox"
      }, results === null || results === void 0 ? void 0 : results.map(function (result, idx) {
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
          key: "search-result-".concat(idx)
        }, /*#__PURE__*/_react.default.cloneElement(children, {
          result: result
        }));
      }), // If the total number of results exceeds the results array limit, display a prompt to narrow their search
      totalResults && totalResults - results.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
        className: "dropdown-header"
      }, "There are ", /*#__PURE__*/_react.default.createElement("strong", null, totalResults - results.length), " additional results. Please narrow your search."));
    }

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Empty.default, null, /*#__PURE__*/_react.default.createElement("div", {
      id: provider + '-results',
      className: "dropdown-menu",
      role: "listbox"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "dropdown-header"
    }, "There are no matching results."))), /*#__PURE__*/_react.default.createElement(_Error.default, null, /*#__PURE__*/_react.default.createElement("div", {
      id: provider + '-results',
      className: "dropdown-menu",
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

var _default = Panel;
exports.default = _default;
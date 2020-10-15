"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _useSearch2 = _interopRequireDefault(require("../../../../hooks/useSearch"));

var _DisplayResults = _interopRequireDefault(require("./DisplayResults"));

var _Empty = _interopRequireDefault(require("../../Empty"));

var _Error = _interopRequireDefault(require("../../Error"));

require("./index.scss");

var AggregatePanel = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var provider = _ref.provider,
      results = _ref.results,
      totalResults = _ref.totalResults,
      categorizeBy = _ref.categorizeBy,
      categoryHeaderWrapper = _ref.categoryHeaderWrapper,
      placeholder = _ref.placeholder,
      children = _ref.children;

  var _useSearch = (0, _useSearch2.default)(provider),
      terms = _useSearch.terms;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var panel = (0, _react.useRef)(null);

  var handleHide = function handleHide() {
    // Only hide the panel as long as no element within
    // the panel has focus for keyboard accessibility
    // Need a very short timeout since the hide method
    // will be attached to an onBlur
    setTimeout(function () {
      var _panel$current;

      if (!((_panel$current = panel.current) === null || _panel$current === void 0 ? void 0 : _panel$current.contains(document.activeElement))) {
        setShow(false);
      }
    }, 1);
  };

  var handleKeyDown = function handleKeyDown(e) {
    // Hide the panel if the escape key is pressed
    if (e.key === 'Escape') {
      setShow(false);
    }
  };

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      show: function show() {
        return setShow(true);
      },
      hide: function hide() {
        return handleHide();
      }
    };
  });

  var Placeholder = function Placeholder() {
    if (placeholder && !terms) {
      var P = placeholder;
      return /*#__PURE__*/_react.default.createElement(P, null);
    }

    return null;
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    id: provider + '-results',
    className: "dropdown-menu search-aggregate-panel",
    role: "listbox",
    style: {
      display: show ? 'block' : 'none'
    },
    ref: panel,
    onBlur: handleHide,
    onKeyDown: handleKeyDown
  }, /*#__PURE__*/_react.default.createElement(Placeholder, null), /*#__PURE__*/_react.default.createElement(_DisplayResults.default, {
    terms: terms,
    results: results,
    categorizeBy: categorizeBy,
    categoryHeaderWrapper: categoryHeaderWrapper,
    totalResults: totalResults
  }, children), /*#__PURE__*/_react.default.createElement(_Empty.default, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-header"
  }, "There are no matching results.")), /*#__PURE__*/_react.default.createElement(_Error.default, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-header"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "lookup-error text-danger"
  }, "Something went wrong. Try reloading the page. If the problem persists, contact ", /*#__PURE__*/_react.default.createElement("a", {
    href: "mailto:orhelpdesk@osu.edu"
  }, "orhelpdesk@osu.edu")))));
});

var _default = AggregatePanel;
exports.default = _default;
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _lodash = require("lodash");

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

var _2 = require("../../../..");

require("./index.scss");

// Should probably take input props so we can add things like aria-owns, aria-haspopup, etc
// for specific use cases. Also a required ID for labeling?

/**
 * Full-text search terms input
 *
 * Accepts
 * [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text)
 * props EXCEPT: `type | title | value | onChange | onKeyUp`
 */
var Terms = function Terms(_ref) {
  var _ref$live = _ref.live,
      live = _ref$live === void 0 ? false : _ref$live,
      _ref$throttleRate = _ref.throttleRate,
      throttleRate = _ref$throttleRate === void 0 ? 750 : _ref$throttleRate,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      id = _ref.id,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["live", "throttleRate", "className", "id", "title"]);

  var _useContext = (0, _react.useContext)(_.Context),
      terms = _useContext.terms,
      searching = _useContext.searching,
      setTerms = _useContext.setTerms;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(id !== null && id !== void 0 ? id : (0, _lodash.uniqueId)('terms-')),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 1),
      elementId = _useState4[0]; // Update self when an external entity modifies search terms


  (0, _react.useEffect)(function () {
    return setValue(terms);
  }, [terms]);
  var setTermsThrottled = (0, _react.useCallback)((0, _throttle.default)(function (terms) {
    return setTerms(terms);
  }, throttleRate), [_throttle.default, throttleRate]);

  var onChange = function onChange(e) {
    var value = e.currentTarget.value;
    setValue(value);

    if (live) {
      setTermsThrottled(value);
    }
  };

  if (!title) {
    return /*#__PURE__*/_react.default.createElement("span", {
      className: "text-danger"
    }, "Title property not defined");
  }

  return /*#__PURE__*/_react.default.createElement(_2.Text, {
    id: elementId
  }, /*#__PURE__*/_react.default.createElement(_2.Text.Label, {
    className: "sr-only"
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: 'input-group terms ' + (live ? 'is-live ' : ' ') + className
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "input-group-prefix"
  }, searching && /*#__PURE__*/_react.default.createElement(_2.Icon, {
    name: "spinner",
    spin: true
  }), !searching && /*#__PURE__*/_react.default.createElement(_2.Icon, {
    name: "search"
  })), /*#__PURE__*/_react.default.createElement(_2.Text.Input, (0, _extends2.default)({}, props, {
    title: "Search by keywords",
    value: value,
    onChange: onChange,
    onKeyUp: function onKeyUp(e) {
      return e.key === 'Enter' && setTerms(value);
    }
  })), !live && /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn btn-outline-secondary",
    onClick: function onClick() {
      return setTerms(value);
    }
  }, "Search")), live && terms.length > 0 && /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-link terms-clear",
    type: "button",
    title: "Clear search terms",
    onClick: function onClick() {
      return setTerms('');
    }
  }, /*#__PURE__*/_react.default.createElement(_2.Icon, {
    name: "close"
  }))));
};

var _default = Terms;
exports.default = _default;
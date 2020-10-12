"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

var _2 = require("../../../..");

/**
 * Full-text search terms input
 */
var Terms = function Terms(props) {
  var _useContext = (0, _react.useContext)(_.Context),
      terms = _useContext.terms,
      setTerms = _useContext.setTerms;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1]; // Update self when an external entity modifies search terms


  (0, _react.useEffect)(function () {
    return setValue(terms);
  }, [terms]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group filters-terms"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "input-group-prefix"
  }, /*#__PURE__*/_react.default.createElement(_2.Icon, {
    name: "search"
  })), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control",
    title: "Search by keywords",
    value: value,
    onChange: function onChange(e) {
      return setValue(e.currentTarget.value);
    },
    onKeyUp: function onKeyUp(e) {
      return e.keyCode === 13 && setTerms(value);
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn btn-outline-secondary",
    onClick: function onClick() {
      return setTerms(value);
    }
  }, "Search")));
};

var _default = Terms;
exports.default = _default;
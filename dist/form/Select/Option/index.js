"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

var _Diff = require("../../../internal/FormCommon/Utility/Diff");

require("../../../internal/FormCommon/style.scss");

/**
 * An option nested in a `<Select.Control>`
 * 
 * Requires *either* a `value` or `optionsBind` prop.
 * 
 * Accepts all 
 * [HTMLOptionElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)
 * props.
 */
var Option = function Option(props) {
  var _useContext = (0, _react.useContext)(_.Context),
      bind = _useContext.bind;

  var optionsBind = props.optionsBind,
      otherProps = (0, _objectWithoutProperties2.default)(props, ["optionsBind"]);

  if (optionsBind) {
    if (bind.diff) {
      return /*#__PURE__*/_react.default.createElement(_Diff.Diff, {
        removed: !(bind.initialValue in optionsBind.value) ? optionsBind.initialValue[bind.initialValue] : optionsBind.value[bind.initialValue],
        added: optionsBind.value[bind.value]
      });
    }

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, Object.keys(optionsBind.value).map(function (key) {
      return /*#__PURE__*/_react.default.createElement("option", (0, _extends2.default)({}, otherProps, {
        key: key,
        value: key
      }), optionsBind.value[key]);
    }));
  }

  return /*#__PURE__*/_react.default.createElement("option", otherProps, props.children);
};

var _default = Option;
exports.default = _default;
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _ = require(".");

var Input = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _props$className;

  var _useContext = (0, _react.useContext)(_.Context),
      bind = _useContext.bind;

  var value = bind.value || props.defaultValue;
  var classNames = 'form-control ' + ((_props$className = props.className) !== null && _props$className !== void 0 ? _props$className : '') + (bind.error ? ' is-invalid' : '') + (bind.success ? ' is-valid' : '');
  return /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
    ref: ref
  }, props, {
    type: "number",
    id: bind.id,
    name: bind.name || props.name,
    defaultValue: value,
    className: classNames,
    "aria-describedBy": "".concat(bind.id, "-help"),
    onChange: function onChange(e) {
      bind.value = e.currentTarget.value;
      if (props.onChange) props.onChange(e);
    },
    readOnly: bind.readOnly || props.readOnly,
    required: bind.required || props.required
  }));
});

exports.Input = Input;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Context = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _types = require("../../internal/FormCommon/types");

var _useFieldBindOrProps2 = _interopRequireDefault(require("../../internal/FormCommon/hooks/useFieldBindOrProps"));

var _withFormContext = require("../../internal/FormCommon/HOC/withFormContext");

var _Input = require("./Input");

var _Components = require("../../internal/FormCommon/Components");

var Context = /*#__PURE__*/_react.default.createContext({
  bind: new _types.NullFieldBind()
});
/**
 * Provides a time input.
 *
 * This component replicates the `<input type='time' />` Firefox/
 * Chrome element to work in all browsers.
 * 
 * The component expects/returns an `hour:minutes` string in 
 * 24-hour time format.
 */


exports.Context = Context;

var Time = function Time(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children"]);

  var _useFieldBindOrProps = (0, _useFieldBindOrProps2.default)(props),
      bind = _useFieldBindOrProps.bind;

  return /*#__PURE__*/_react.default.createElement(Context.Provider, {
    value: {
      bind: bind
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ui-form-element ui-form-time ".concat(bind.required ? 'is-required' : '', " ").concat(bind.error && 'is-invalid', " ").concat(bind.success && 'is-valid')
  }, children));
};

Time.Input = _Input.Input;
Time.Label = (0, _withFormContext.withFormContext)(_Components.Label, Context);
Time.Help = (0, _withFormContext.withFormContext)(_Components.Help, Context);
Time.Error = (0, _withFormContext.withFormContext)(_Components.Error, Context);
Time.Success = (0, _withFormContext.withFormContext)(_Components.Success, Context);
var _default = Time;
exports.default = _default;
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

var _Components = require("../../internal/FormCommon/Components");

var _Input = _interopRequireDefault(require("./Input"));

var Context = /*#__PURE__*/_react.default.createContext({
  bind: new _types.NullFieldBind()
});
/**
 * Provides a date and (optional) time picker
 */


exports.Context = Context;

var DatePicker = function DatePicker(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children"]);

  var _useFieldBindOrProps = (0, _useFieldBindOrProps2.default)(props),
      bind = _useFieldBindOrProps.bind;

  return /*#__PURE__*/_react.default.createElement(Context.Provider, {
    value: {
      bind: bind
    }
  }, children);
};

DatePicker.Input = _Input.default;
DatePicker.Label = (0, _withFormContext.withFormContext)(_Components.Label, Context);
DatePicker.Help = (0, _withFormContext.withFormContext)(_Components.Help, Context);
DatePicker.Error = (0, _withFormContext.withFormContext)(_Components.Error, Context);
DatePicker.Success = (0, _withFormContext.withFormContext)(_Components.Success, Context);
var _default = DatePicker;
exports.default = _default;
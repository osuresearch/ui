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
  bind: new _types.NullFieldBind() // Add your other prop defaults here that should be made available to consumers
  // foo: 1

});
/**
 * Number input
 * 
 * ### Subcomponents
 * 
 * #### `<Number.Label>` (required)
 * Equivalent of `<label>`
 * 
 * 
 * #### `<Number.Input>` (required)
 * Equivalent of `<input type='number'>`
 * 
 * 
 * #### `<Number.Help>`
 * Help text for the `<Number>`
 * 
 * 
 * #### `<Number.Error>` (required if `<Number>` requires validation)
 * Provides instructions on how to resolve the validation error; 
 * will display when `error` is set in `<Number>`
 * 
 * 
 * #### `<Number.Success>`
 * Feedback for when the set meets the validation rules; will 
 * display when `success` is set in `<Number>`
 * 
 */


exports.Context = Context;

var Number = function Number(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children"]);

  var _useFieldBindOrProps = (0, _useFieldBindOrProps2.default)(props),
      bind = _useFieldBindOrProps.bind;

  return /*#__PURE__*/_react.default.createElement(Context.Provider, {
    value: {
      bind: bind
      /* foo */

    }
  }, children);
};

Number.Input = _Input.Input;
Number.Label = (0, _withFormContext.withFormContext)(_Components.Label, Context);
Number.Help = (0, _withFormContext.withFormContext)(_Components.Help, Context);
Number.Error = (0, _withFormContext.withFormContext)(_Components.Error, Context);
Number.Success = (0, _withFormContext.withFormContext)(_Components.Success, Context);
var _default = Number;
exports.default = _default;
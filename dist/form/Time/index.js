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
 * Provides a time input.
 *
 * This component replicates the `<input type='time' />` Firefox/
 * Chrome element to work in all browsers.
 * 
 * The component expects/returns an `hour:minutes` string in 
 * 24-hour time format.
 * 
 * ### Subcomponents
 * 
 * #### `<Time.Input>` (required) * 
 * * **Props**
 *  * `defaultValue` – must be an hour:minutes string in 24h format 
 *  * `value` – must be an hour:minutes string in 24h format
 *  * `onChange` – Returns the time in a 24h format, e.g. `14:05`
 * 
 * 
 * #### `<Time.Label>` (required)
 * Equivalent of `<label>`
 * 
 * * **Props**
 *  * [HTML Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
 * 
 * 
 * #### `<Time.Help>`
 * Help text for the `<Time>`
 * 
 * 
 * #### `<Time.Error>` (required if `<Time>` requires validation)
 * Provides instructions on how to resolve the validation error; 
 * will display when `error` is set in `<Time>`
 * 
 * 
 * #### `<Time.Success>`
 * Feedback for when the set meets the validation rules; will 
 * display when `success` is set in `<Time>`
 * 
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
      /* foo */

    }
  }, children);
};

Time.Input = _Input.Input;
Time.Label = (0, _withFormContext.withFormContext)(_Components.Label, Context);
Time.Help = (0, _withFormContext.withFormContext)(_Components.Help, Context);
Time.Error = (0, _withFormContext.withFormContext)(_Components.Error, Context);
Time.Success = (0, _withFormContext.withFormContext)(_Components.Success, Context);
var _default = Time;
exports.default = _default;
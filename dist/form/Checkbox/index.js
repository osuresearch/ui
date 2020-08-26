"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Context = void 0;

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
 * A single checkbox
 * 
 * ### Subcomponents
 * 
 * #### `<Checkbox.Input>` (required)
 * Equivalent of `<input type='checkbox'>`
 * 
 * * **Props**
 *  * [`checkbox` input attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
 *  * [React event handlers](https://reactjs.org/docs/events.html#supported-events)
 *  * All common [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) attributes
 * 
 * 
 * #### `<Checkbox.Label>` (required)
 * Equivalent of `<label>`
 * 
 * * **Props**
 *  * [HTML Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
 * 
 * 
 * #### `<Checkbox.Help>`
 * Help text for the `<Checkbox>`
 * 
 * 
 * #### `<Checkbox.Error>` (required if single `<Checkbox>` that requires validation)
 * Provides instructions on how to resolve the validation error; 
 * will display when `error` is set in `<Checkbox>`
 * 
 * 
 * #### `<Checkbox.Success>`
 * Feedback for when the set meets the validation rules; will 
 * display when `success` is set in `<Checkbox>`
 * 
 */


exports.Context = Context;

var Checkbox = function Checkbox(props) {
  var _useFieldBindOrProps = (0, _useFieldBindOrProps2.default)(props),
      bind = _useFieldBindOrProps.bind;

  return /*#__PURE__*/_react.default.createElement(Context.Provider, {
    value: {
      bind: bind
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "custom-control custom-checkbox"
  }, props.children));
};

Checkbox.Input = _Input.Input;
Checkbox.Label = (0, _withFormContext.withFormContext)(_Components.ControlLabel, Context);
Checkbox.Help = (0, _withFormContext.withFormContext)(_Components.Help, Context);
Checkbox.Success = (0, _withFormContext.withFormContext)(_Components.Success, Context);
Checkbox.Error = (0, _withFormContext.withFormContext)(_Components.Error, Context);
var _default = Checkbox; // Compound Component pattern adapted from https://blog.martindidiego.com/compound-components-typescript/

exports.default = _default;
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

var _Control = require("./Control");

var _Option = require("./Option");

var _Components = require("../../internal/FormCommon/Components");

var Context = /*#__PURE__*/_react.default.createContext({
  bind: new _types.NullFieldBind() // Add your other prop defaults here that should be made available to consumers
  // foo: 1

});
/**
 * A styled Select drop-down component
 * 
 * ### Subcomponents
 * #### `<Select.Label>` (required)
 * Equivalent of `<label>`
 * 
 *  * **Props**
 *      * [HTML Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
 * 
 * 
 * #### `<Select.Control>` (required)
 * A control container for options (this is `<select>` in 
 * native HTML)
 * 
 * 
 * #### `<Select.Option>` (required)
 * An option nested in a `<Select.Control>` (this is 
 * `<option>` in native HTML)
 *  * **Props**
 *      * One of the following are required:
 *          * `value`
 *          * `optionsBind`
 *      * Accepts [`<option>` attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)
 * 
 * #### `<Select.Help>`
 * Help text for the `<Select>`
 * 
 * 
 * #### `<Select.Error>` (required if component requires 
 * validation)
 * Provides instructions on how to resolve the validation error; 
 * will display when `error` is set in `<Select>`
 * 
 * 
 * #### `<Select.Success>`
 * Feedback for when the set meets the validation rules; will 
 * display when `success` is set in `<Select>`
 * 
 */


exports.Context = Context;

var Select = function Select(_ref) {
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

Select.Control = _Control.Control;
Select.Option = _Option.Option;
Select.Label = (0, _withFormContext.withFormContext)(_Components.Label, Context);
Select.Help = (0, _withFormContext.withFormContext)(_Components.Help, Context);
Select.Error = (0, _withFormContext.withFormContext)(_Components.Error, Context);
Select.Success = (0, _withFormContext.withFormContext)(_Components.Success, Context);
var _default = Select;
exports.default = _default;
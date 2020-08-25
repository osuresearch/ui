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

var _Search = require("./Search");

var _Email = require("./Email");

var _Rich = _interopRequireDefault(require("./Rich"));

var _Area = require("./Area");

var _Components = require("../../internal/FormCommon/Components");

var Context = /*#__PURE__*/_react.default.createContext({
  bind: new _types.NullFieldBind() // Add your other prop defaults here that should be made available to consumers
  // foo: 1

});
/**
 * Multiple types of text inputs
 * 
 * ### Subcomponents
 * 
 * #### `<Text.Label>` (required)
 * Equivalent of `<label>`
 * 
 * 
 * #### Input Components (one is required):
 * 
 * ##### `<Text.Input>`
 * Equivalent of `<input type='text'>`
 * 
 * 
 * ##### `<Text.Area>`
 * Equivalent of `<textarea>`
 * 
 * 
 * ##### `<Text.Email>`
 * Email input field with automatic validation for invalid email 
 * addresses
 * 
 * 
 * ##### `<Text.Rich>`
 * A rich text editor (RTE) based on CKEditor (additional 
 * requirements must be met to use this component; see the 
 * section on `<Text.Rich>` below for more details)
 * 
 * 
 * ##### `<Text.Search>`
 * Jams a standard ORIS/UI search result pair into a single  
 * string value bind in the form `key|name`
 * 
 * 
 * #### `<Text.Help>`
 * Help text for the `<Text>`
 * 
 * 
 * #### `<Text.Error>` (required if `<Text>` requires validation)
 * Provides instructions on how to resolve the validation error; 
 * will display when `error` is set in `<Text>`
 * 
 * 
 * #### `<Text.Success>`
 * Feedback for when the set meets the validation rules; will 
 * display when `success` is set in `<Text>`
 * 
 */


exports.Context = Context;

var Text = function Text(_ref) {
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

Text.Input = _Input.Input;
Text.Search = _Search.Search;
Text.Email = _Email.Email;
Text.Area = _Area.TextArea;
Text.Rich = _Rich.default;
Text.Label = (0, _withFormContext.withFormContext)(_Components.Label, Context);
Text.Help = (0, _withFormContext.withFormContext)(_Components.Help, Context);
Text.Error = (0, _withFormContext.withFormContext)(_Components.Error, Context);
Text.Success = (0, _withFormContext.withFormContext)(_Components.Success, Context);
var _default = Text;
exports.default = _default;
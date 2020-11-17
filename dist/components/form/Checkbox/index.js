"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Context = void 0;

var _react = _interopRequireDefault(require("react"));

var _types = require("../../../internal/FormCommon/types");

var _useFieldBindOrProps2 = _interopRequireDefault(require("../../../internal/FormCommon/hooks/useFieldBindOrProps"));

var _withFormContext = require("../../../internal/FormCommon/HOC/withFormContext");

var _Input = _interopRequireDefault(require("./Input"));

var _Label = _interopRequireDefault(require("./Label"));

var _Components = require("../../../internal/FormCommon/Components");

var Context = /*#__PURE__*/_react.default.createContext({
  bind: new _types.NullFieldBind()
});
/**
 * A single checkbox. 
 * 
 * Requires `<Checkbox.Input />` and `<Checkbox.Label />` child components.
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
    className: "ui-form-element custom-control custom-checkbox ".concat(bind.required ? 'is-required' : '', " ").concat(bind.error && 'is-invalid', " ").concat(bind.success && 'is-valid')
  }, props.children));
};

Checkbox.Input = _Input.default;
Checkbox.Label = (0, _withFormContext.withFormContext)(_Label.default, Context);
Checkbox.Help = (0, _withFormContext.withFormContext)(_Components.Help, Context);
Checkbox.Success = (0, _withFormContext.withFormContext)(_Components.Success, Context);
Checkbox.Error = (0, _withFormContext.withFormContext)(_Components.Error, Context);
var _default = Checkbox; // Compound Component pattern adapted from https://blog.martindidiego.com/compound-components-typescript/

exports.default = _default;
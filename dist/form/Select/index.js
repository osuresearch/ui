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

var _Control = _interopRequireDefault(require("./Control"));

var _Option = _interopRequireDefault(require("./Option"));

var _Components = require("../../internal/FormCommon/Components");

var Context = /*#__PURE__*/_react.default.createContext({
  bind: new _types.NullFieldBind() // Add your other prop defaults here that should be made available to consumers
  // foo: 1

});
/**
 * A styled Select drop-down component
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
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ui-form-element ".concat(bind.required ? 'is-required' : '', " ").concat(bind.error && 'is-invalid', " ").concat(bind.success && 'is-valid')
  }, children));
};

Select.Control = _Control.default;
Select.Option = _Option.default;
Select.Label = (0, _withFormContext.withFormContext)(_Components.Label, Context);
Select.Help = (0, _withFormContext.withFormContext)(_Components.Help, Context);
Select.Error = (0, _withFormContext.withFormContext)(_Components.Error, Context);
Select.Success = (0, _withFormContext.withFormContext)(_Components.Success, Context);
var _default = Select;
exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Context = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _types = require("../../../internal/FormCommon/types");

var _useFieldBindOrProps2 = _interopRequireDefault(require("../../../internal/FormCommon/hooks/useFieldBindOrProps"));

var _withFormContext = require("../../../internal/FormCommon/HOC/withFormContext");

var _Input = _interopRequireDefault(require("./Input"));

var _Components = require("../../../internal/FormCommon/Components");

var Context = /*#__PURE__*/_react.default.createContext({
  bind: new _types.NullFieldBind()
});
/**
 * Dropdown is used to select an item from a collection of options.
 */


exports.Context = Context;

var Dropdown = function Dropdown(_ref) {
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

Dropdown.Input = _Input.default;
Dropdown.Label = (0, _withFormContext.withFormContext)(_Components.Label, Context);
Dropdown.Help = (0, _withFormContext.withFormContext)(_Components.Help, Context);
Dropdown.Error = (0, _withFormContext.withFormContext)(_Components.Error, Context);
Dropdown.Success = (0, _withFormContext.withFormContext)(_Components.Success, Context);
var _default = Dropdown;
exports.default = _default;
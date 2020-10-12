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

var _Input = _interopRequireDefault(require("./Input"));

var _Label = _interopRequireDefault(require("./Label"));

var _Components = require("../../internal/FormCommon/Components");

var Context = /*#__PURE__*/_react.default.createContext({
  bind: new _types.NullFieldBind()
});
/**
 * Radio input and label
 * 
 * `<Radio>` components **must** always be contained within a `<FieldSet>`
 */


exports.Context = Context;

var Radio = function Radio(props) {
  var _useFieldBindOrProps = (0, _useFieldBindOrProps2.default)(props),
      bind = _useFieldBindOrProps.bind;

  return /*#__PURE__*/_react.default.createElement(Context.Provider, {
    value: {
      bind: bind
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "custom-control custom-radio"
  }, props.children));
};

Radio.Input = _Input.default;
Radio.Help = (0, _withFormContext.withFormContext)(_Components.Help, Context);
Radio.Label = (0, _withFormContext.withFormContext)(_Label.default, Context);
var _default = Radio; // Compound Component pattern adapted from https://blog.martindidiego.com/compound-components-typescript/

exports.default = _default;
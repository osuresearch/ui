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

var _Input = _interopRequireDefault(require("./Input"));

var _Search = _interopRequireDefault(require("./Search"));

var _Email = _interopRequireDefault(require("./Email"));

var _Rich = _interopRequireDefault(require("./Rich"));

var _Area = _interopRequireDefault(require("./Area"));

var _Components = require("../../internal/FormCommon/Components");

var Context = /*#__PURE__*/_react.default.createContext({
  bind: new _types.NullFieldBind()
});
/**
 * Text-like content input fields
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
    }
  }, children);
};

Text.Input = _Input.default;
Text.Search = _Search.default;
Text.Email = _Email.default;
Text.Area = _Area.default;
Text.Rich = _Rich.default;
Text.Label = (0, _withFormContext.withFormContext)(_Components.Label, Context);
Text.Help = (0, _withFormContext.withFormContext)(_Components.Help, Context);
Text.Error = (0, _withFormContext.withFormContext)(_Components.Error, Context);
Text.Success = (0, _withFormContext.withFormContext)(_Components.Success, Context);
var _default = Text;
exports.default = _default;
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

var _Components = require("../../internal/FormCommon/Components");

var _Legend = require("./Legend");

var _Inline = _interopRequireDefault(require("./Inline"));

var Context = /*#__PURE__*/_react.default.createContext({
  bind: new _types.NullFieldBind() // Add your other prop defaults here that should be made available to consumers
  // foo: 1

});

exports.Context = Context;

var IsInput = function IsInput(element) {
  // @ts-ignore
  switch (element === null || element === void 0 ? void 0 : element.type.name) {
    case 'FieldSet':
    case 'Radio':
    case 'Checkbox':
      //case 'Text':
      return true;

    default:
      return false;
  }
};
/**
 * A set of related form components.
 */


var FieldSet = function FieldSet(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children"]);

  var _useFieldBindOrProps = (0, _useFieldBindOrProps2.default)(props),
      bind = _useFieldBindOrProps.bind;

  return /*#__PURE__*/_react.default.createElement(Context.Provider, {
    value: {
      bind: bind
    }
  }, /*#__PURE__*/_react.default.createElement("fieldset", {
    className: "ui-form-element ".concat(bind.required ? 'is-required' : '', " ").concat(bind.error && 'is-invalid', " ").concat(bind.success && 'is-valid'),
    name: bind.name,
    "aria-describedBy": "".concat(bind.id, "-help")
  }, _react.default.Children.map(children, function (node) {
    if ( /*#__PURE__*/_react.default.isValidElement(node)) {
      if (IsInput(node)) {
        return /*#__PURE__*/_react.default.cloneElement(node, {
          // Add the name, success, and 
          // error props to the inputs
          name: node.props.name || bind.id,
          error: node.props.error || bind.error,
          success: node.props.success || bind.success
        });
      } else {
        // Else, clone it as-is
        return /*#__PURE__*/_react.default.cloneElement(node);
      }
    } else {
      return node;
    }
  })));
};

FieldSet.Inline = _Inline.default;
FieldSet.Legend = (0, _withFormContext.withFormContext)(_Legend.Legend, Context);
FieldSet.Help = (0, _withFormContext.withFormContext)(_Components.Help, Context);
FieldSet.Error = (0, _withFormContext.withFormContext)(_Components.Error, Context);
FieldSet.Success = (0, _withFormContext.withFormContext)(_Components.Success, Context);
var _default = FieldSet;
exports.default = _default;
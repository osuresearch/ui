"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Context = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _types = require("../../../internal/FormCommon/types");

var _useFieldBindOrProps2 = _interopRequireDefault(require("../../../internal/FormCommon/hooks/useFieldBindOrProps"));

var _withFormContext = require("../../../internal/FormCommon/HOC/withFormContext");

var _Components = require("../../../internal/FormCommon/Components");

var _Legend = require("./Legend");

var _Inline = _interopRequireDefault(require("./Inline"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Context = /*#__PURE__*/_react.default.createContext({
  bind: new _types.NullFieldBind() // Add your other prop defaults here that should be made available to consumers
  // foo: 1

}); // @ts-ignore


exports.Context = Context;

var IsCheckbox = function IsCheckbox(element) {
  return element.type.name === 'Checkbox';
}; // @ts-ignore


var IsRadio = function IsRadio(element) {
  return element.type.name === 'Radio';
};
/**
 * A set of related form components.
 */


var FieldSet = function FieldSet(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children"]);

  var _useFieldBindOrProps = (0, _useFieldBindOrProps2.default)(props),
      bind = _useFieldBindOrProps.bind;

  var handleCheckboxChange = (0, _react.useCallback)(function (value, id) {
    if (!bind.readOnly) {
      // Store the checked (i.e. true) Checkbox names in an array
      var bindValue = Array.isArray(bind.value) ? (0, _toConsumableArray2.default)(bind.value) : [];

      if (!value) {
        bindValue = bindValue.filter(function (checkbox) {
          return checkbox !== id;
        });
      } else {
        bindValue.push(id);
      }

      bind.value = bindValue;
    }
  }, [bind]);
  return /*#__PURE__*/_react.default.createElement(Context.Provider, {
    value: {
      bind: bind
    }
  }, /*#__PURE__*/_react.default.createElement("fieldset", {
    className: "ui-form-element ".concat(bind.required ? 'is-required' : '', " ").concat(bind.error && 'is-invalid', " ").concat(bind.success && 'is-valid'),
    name: bind.name,
    "aria-describedby": "".concat(bind.id, "-help")
  }, _react.default.Children.map(children, function (node) {
    if ( /*#__PURE__*/_react.default.isValidElement(node)) {
      var cloneProps = {
        // Add the FieldSet props to the
        // inputs (if the inputs have not
        // already defined them)
        name: bind.name,
        error: node.props.error || bind.error,
        success: node.props.success || bind.success,
        readOnly: node.props.readOnly || bind.readOnly,
        required: node.props.required || bind.required
      };

      if (IsCheckbox(node)) {
        return /*#__PURE__*/_react.default.cloneElement(node, _objectSpread(_objectSpread({}, cloneProps), {}, {
          onChange: function onChange(value) {
            return handleCheckboxChange(value, node.props.id);
          }
        }));
      }

      if (IsRadio(node)) {
        return /*#__PURE__*/_react.default.cloneElement(node, _objectSpread(_objectSpread({}, cloneProps), {}, {
          onChange: function onChange(value) {
            return bind.value = value;
          }
        }));
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
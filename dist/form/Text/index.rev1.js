"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TextContext = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _types = require("../../internal/FormCommon/types");

var _Label = require("./Label");

var _Help = require("./Help");

var _Input = require("./Input");

var TextContext = /*#__PURE__*/(0, _react.createContext)({
  bind: new _types.NullFieldBind(),
  // setValue: () => 0,
  lines: 0
});
exports.TextContext = TextContext;

function createFieldBindFromProps(props) {
  // We cast it off to a matching interface and
  // then map fields onto a concrete instance.
  var ifb = props;
  var bind = new _types.FieldBind();
  bind.error = ifb.error;
  bind.help = ifb.help;
  bind.instructions = ifb.instructions;
  bind.name = ifb.name;
  bind.id = ifb.id;
  bind.readOnly = ifb.readOnly;
  bind.value = ifb.value;
  return bind;
}

var Text = function Text(_ref) {
  var _ref$lines = _ref.lines,
      lines = _ref$lines === void 0 ? 1 : _ref$lines,
      bind = _ref.bind,
      children = _ref.children,
      onChange = _ref.onChange,
      props = (0, _objectWithoutProperties2.default)(_ref, ["lines", "bind", "children", "onChange"]);

  var _useState = (0, _react.useState)(function () {
    var _bind$value;

    return (_bind$value = bind === null || bind === void 0 ? void 0 : bind.value) !== null && _bind$value !== void 0 ? _bind$value : props.value;
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1]; // If a bind isn't provided, we need to construct one directly from props. 
  // BUT - if props ever change that bind should also change... So we're looking
  // at a big ass useEffect...


  var _useState3 = (0, _react.useState)(function () {
    if (bind) {
      console.log('init realbind from bind', bind);
      return bind;
    }

    console.log('init realbind from props', props);
    return createFieldBindFromProps(props);
  }),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      realBind = _useState4[0],
      setRealBind = _useState4[1]; // Register our state setter as a bind change handler to trigger a 
  // refresh of this component/context upon value change 


  (0, _react.useEffect)(function () {
    console.debug('bind onchange', realBind); // Register change listeners

    realBind.onValueChange.add(setValue);
    if (onChange) realBind.onValueChange.add(onChange); // Unregister change listeners

    return function () {
      realBind.onValueChange.remove(setValue);
      if (onChange) realBind.onValueChange.remove(onChange);
    };
  }, [realBind, onChange]); // If the bind object reference changes, apply the new bind.
  // Or - if any of the props change, update the props copy bind.

  (0, _react.useEffect)(function () {
    if (bind) {
      console.debug('bind change, setting state', bind);
      setRealBind(bind);
    } else {
      // It was removed, fallback to a props copy
      console.debug('falling back to props', props);
      setRealBind(createFieldBindFromProps(props));
    }
  }, [bind, props.value, props.error, props.help, props.instructions]); // ... and so on... unfortunately.

  return /*#__PURE__*/_react.default.createElement(TextContext.Provider, {
    value: {
      bind: realBind,
      value: value,
      lines: lines
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, children));
};

Text.Label = _Label.Label;
Text.Help = _Help.Help;
Text.Input = _Input.Input;
var _default = Text;
exports.default = _default;
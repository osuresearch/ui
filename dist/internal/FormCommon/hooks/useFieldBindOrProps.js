"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useFieldBindOrProps;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _types = require("../types");

var _useFieldBind = _interopRequireDefault(require("./useFieldBind"));

/**
 * Factory to convert a set of FormFieldProps over to an IFieldBind
 */
function createFieldBindFromProps(props) {
  var bind = new _types.FieldBind();
  bind.error = props.error || ''; // bind.name = props.name; // TODO: Fix this one. Placeholdering to ID for a sec.

  bind.name = props.id;
  bind.id = props.id;
  bind.readOnly = props.readOnly || false;
  return bind;
}

function fillFieldBindFromProps(bind, props) {
  bind.error = props.error || '';
  bind.success = props.success || '';
  bind.name = props.name || props.id; // TODO: Same as above

  bind.id = props.id;
  bind.readOnly = props.readOnly || false;
  bind.required = props.required || false;
}

function isFormFieldBindProp(props) {
  return typeof props.bind !== 'undefined';
}
/**
 * Generate an IFieldBind from a set of FormFieldProps. 
 * 
 * If the props contain a `bind`, that will be piped through as-is. Otherwise,
 * a new FieldBind will be constructed from the rest of the props. 
 * 
 * If an `onChange` delegate is provided, it will register with the IFieldBind 
 * result and safely unregister when the component is unmounted.
 */


function useFieldBindOrProps(props) {
  // Local bind copy to update from props, if one isn't supplied.
  var _useState = (0, _react.useState)(new _types.FieldBind()),
      _useState2 = (0, _slicedToArray2.default)(_useState, 1),
      propsBind = _useState2[0];

  var _useState3 = (0, _react.useState)(function () {
    if (isFormFieldBindProp(props)) {
      console.debug('[useFieldBindOrProps] Initializing from IFieldBind ref', props.bind);
      props.bind.controlled = true;
      return props.bind;
    }

    console.debug('[useFieldBindOrProps] Initialize from props', props);
    fillFieldBindFromProps(propsBind, props);
    return propsBind; // return createFieldBindFromProps(props);
  }),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      bind = _useState4[0],
      setBind = _useState4[1]; // If the bind object reference changes, apply the new bind.
  // Or - if any of the props change, update the props copy bind.


  (0, _react.useEffect)(function () {
    if (isFormFieldBindProp(props)) {
      console.debug('[useFieldBindOrProps] Bind change, setting state', props.bind);
      setBind(props.bind);
    } else {
      // It was removed, fallback to a props copy
      console.debug('[useFieldBindOrProps] Bind undefined, falling back to props', props);
      fillFieldBindFromProps(propsBind, props);
      setBind(propsBind);
    }
  }, Object.values(props)); // TODO: While the above monitors props, it doesn't monitor the bind itself.
  // I'd probably want some sort of state hash of the bind to check against.
  // e.g. your typical .hashCode() method that just bitwise combines properties.
  // On change of the bind or onChange delegate, (un)register the delegate.
  // This will also deal with cleaning up the delegate on unmount

  (0, _react.useEffect)(function () {
    if (props.onChange) {
      bind.onValueChange.add(props.onChange);
      console.debug('[useFieldBindOrProps] Register onChange', bind);
    }

    return function () {
      if (props.onChange) {
        bind.onValueChange.remove(props.onChange);
        console.debug('[useFieldBindOrProps] Unregister onChange', bind);
      }
    };
  }, [bind, props.onChange]);
  return (0, _useFieldBind.default)(bind);
}
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useFieldBind;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

/**
 * Automatically monitor an IFieldBind for changes and redraw the component.
 * 
 * Like `useState()`, you can provide a lambda factory method instead of an instance.
 */
function useFieldBind(ref) {
  var _useState = (0, _react.useState)(ref),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      bind = _useState2[0],
      setBind = _useState2[1]; // Value is stored to trigger re-renders, but we don't really use it.


  var _useState3 = (0, _react.useState)(bind.value),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      increment = _useState6[1]; // Update local store if the referenced bind changes


  (0, _react.useEffect)(function () {
    // TODO: What about the callable? That may cause issues when someone
    // is inlining a lambda like: `useFieldBind(() => new ...)`
    // Maybe just get rid of the IFieldBindFactory support?
    setBind(ref);
  }, [ref]); // Register our state setter as a bind change handler to trigger a 
  // refresh of this component/context upon value change 

  (0, _react.useEffect)(function () {
    console.debug('[useFieldBind] Bind onChange', bind);

    function incrementState(bind) {
      // This is a dumb way of triggering React re-renders on
      // IFieldBind state changes without caring about the 
      // specifics of what changed. Alternative solution is 
      // to retrieve a state hash from the IFieldBind, but
      // calculating that hash would be slower with minimal benefit.
      increment(function (prev) {
        return prev + 1;
      });
    } // Register change listeners


    bind.onValueChange.add(setValue);
    bind.onStateChange.add(incrementState); // Unregister change listeners

    return function () {
      console.debug('[useFieldBind] Unbind onChange', bind);
      bind.onValueChange.remove(setValue);
      bind.onStateChange.remove(incrementState);
    };
  }, [bind]);
  return {
    bind: bind
  };
}
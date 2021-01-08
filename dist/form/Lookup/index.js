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

var _Components = require("../../internal/FormCommon/Components");

var _search = require("../../search");

require("./index.scss");

var Context = /*#__PURE__*/_react.default.createContext({
  bind: new _types.NullFieldBind(),
  provider: ''
});
/**
 * Lookup a value from a selection of options
 */


exports.Context = Context;

var Lookup = function Lookup(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children"]);

  var _useFieldBindOrProps = (0, _useFieldBindOrProps2.default)(props),
      bind = _useFieldBindOrProps.bind; // Make sure either a provider or driver was supplied


  if (props.driver !== undefined && props.provider !== undefined) {
    throw new Error('You cannot provide both `driver` and `provider` for a Lookup. Specify only one.');
  }

  if (props.driver === undefined && props.provider === undefined) {
    throw new Error('You must specify either `driver` or `provider` for a Lookup.');
  }

  var provider = props.provider;
  var useLocalProvider = false; // If there's no provider, instantiate one local to this Lookup. 

  if (provider === undefined) {
    useLocalProvider = true;
    provider = 'RandomProviderName'; // TODO: Randomize (but only once - re-renders shouldn't ever change this)
  }

  var contextWrappedDOM = /*#__PURE__*/_react.default.createElement(Context.Provider, {
    value: {
      bind: bind,
      provider: provider
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "\n                ui-form-element ".concat(bind.required ? 'is-required' : '', " \n                ").concat(bind.error && ' is-invalid', " \n                ").concat(bind.success && 'is-valid', "\n            ")
  }, children)); // If we aren't using an external provider - instantiate a local
  // search provider with the supplied driver.


  if (useLocalProvider) {
    return /*#__PURE__*/_react.default.createElement(_search.SearchProvider, {
      id: provider,
      driver: props.driver
    }, contextWrappedDOM);
  } // If we ARE using an external provider - just return the context and DOM.


  return contextWrappedDOM;
};

Lookup.Input = _Input.default; // `as any` hacks are needed because we expand the context with data
// that's unexpected by withFormContext. It's safe to do here, 
// we safely typed the context beforehand.

Lookup.Label = (0, _withFormContext.withFormContext)(_Components.Label, Context);
Lookup.Help = (0, _withFormContext.withFormContext)(_Components.Help, Context);
Lookup.Error = (0, _withFormContext.withFormContext)(_Components.Error, Context);
Lookup.Success = (0, _withFormContext.withFormContext)(_Components.Success, Context);
var _default = Lookup;
exports.default = _default;
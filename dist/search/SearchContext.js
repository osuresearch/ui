"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initDynamicContext = initDynamicContext;
exports.destroyDynamicContext = destroyDynamicContext;
exports.getDynamicContext = getDynamicContext;

var _react = require("react");

/** Singleton storing all dynamic SearchContext instances during the app lifecycle */
var __dynamicContextMap = new Map();
/**
 * Create a new dynamic SearchContext tied to a named provider
 */


function initDynamicContext(provider, data) {
  // TODO: This *is* an implementation error for apps, but Styleguidist examples
  // need to be able to re-instantiate a provider when an example changes.
  // if (__dynamicContextMap.has(provider)) {
  //     throw new Error(
  //         `SearchProvider "${provider}" is already registered. Registering again is an implementation error.`
  //     );
  // }
  console.debug("[initDynamicContext(".concat(provider, ")]"), data);
  var context = /*#__PURE__*/(0, _react.createContext)(data);

  __dynamicContextMap.set(provider, context);

  return context;
}
/**
 * Destroy a dynamic SearchContext by name
 */


function destroyDynamicContext(provider) {
  console.debug("[destroyDynamicContext(".concat(provider, ")]"), __dynamicContextMap.get(provider));

  __dynamicContextMap.delete(provider);
}
/**
 * Get a dynamic SearchContext tied to a named provider.
 * 
 * @throws {Error} if the provider is not yet registered through a SearchProvider component
 */


function getDynamicContext(provider) {
  var context = __dynamicContextMap.get(provider); // Ensure it exists - for type safe useContext() calls.


  if (!context) {
    throw new Error("Cannot get SearchContext for \"".concat(provider, "\". Are you missing the parent SearchProvider?"));
  }

  return context;
}
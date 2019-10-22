"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Utility functions that are considered useful for any application component
 */
var Util = {
  /**
   * Generic debounce function for frequent event handlers
   *
   * @param {function} func Callback to debounce
   * @param {number} threshold Throttling time, in ms (default: 100)
   * @param {boolean} execAsap Run `func` once before debouncing
   */
  debounce: function debounce(func, threshold, execAsap) {
    var timeout;
    return function debounced() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var obj = this;

      function delayed() {
        if (!execAsap) {
          func.apply(obj, args);
        }

        timeout = null;
      }

      if (timeout) {
        clearTimeout(timeout);
      } else if (execAsap) {
        func.apply(obj, args);
      }

      timeout = setTimeout(delayed, threshold || 100);
    };
  }
};
var _default = Util;
exports.default = _default;
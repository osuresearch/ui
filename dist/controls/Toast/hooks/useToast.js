"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useToast = useToast;
exports.ToastProvider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _toast = require("primereact/toast");

var ToastContext = /*#__PURE__*/_react.default.createContext(null);

/**
 * Context provider for the toast at the app-level
 */
var ToastProvider = function ToastProvider(_ref) {
  var children = _ref.children,
      toast = _ref.toast;
  return /*#__PURE__*/_react.default.createElement(ToastContext.Provider, {
    value: toast
  }, /*#__PURE__*/_react.default.createElement(_toast.Toast, {
    ref: toast
  }), children);
};
/**
 * Provides the ref of the toast component in App.tsx
 * 
 * See https://primefaces.org/primereact/showcase/#/toast for implementation details for the Toast component
 */


exports.ToastProvider = ToastProvider;

function useToast() {
  var toast = (0, _react.useContext)(ToastContext);
  return toast;
}
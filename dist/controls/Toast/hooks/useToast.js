"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useToast = useToast;
exports.ToastProvider = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _toast = require("primereact/toast");

var toast = /*#__PURE__*/_react.default.createRef();

var ToastContext = /*#__PURE__*/_react.default.createContext(toast);
/**
 * Context provider for the toast at the app-level
 */


var ToastProvider = function ToastProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(ToastContext.Provider, {
    value: toast
  }, /*#__PURE__*/_react.default.createElement(_toast.Toast, {
    ref: toast
  }), children);
};
/**
 * Provides the current ref of the toast component
 */


exports.ToastProvider = ToastProvider;

function useToast() {
  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      currentToast = _useState2[0],
      setCurrentToast = _useState2[1];

  (0, _react.useEffect)(function () {
    setCurrentToast(toast.current); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toast]);
  return currentToast;
}
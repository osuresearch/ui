"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _ExternalLink = _interopRequireDefault(require("../../controls/ExternalLink"));

/**
 * Red server-wide alert banner. May appear for network issues,
 * planned outages, buckeye alerts, etc.
 */
var AppAlert = function AppAlert(_ref) {
  var _ref$endpoint = _ref.endpoint,
      endpoint = _ref$endpoint === void 0 ? "".concat(process.env.PUBLIC_URL, "/api/alert") : _ref$endpoint;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      message = _useState2[0],
      setMessage = _useState2[1];

  (0, _react.useEffect)(function () {
    var cancelled = false;
    fetch(endpoint, {
      cache: 'no-cache',
      redirect: 'follow',
      credentials: 'same-origin'
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      if (!cancelled) {
        setMessage(res.data);
      }
    }).catch(function () {
      if (!cancelled) {
        setMessage('Could not communicate with the alerting API');
      }
    });
    return function () {
      // Cancel request in scope on unmount.
      cancelled = true;
    };
  }, [endpoint]);

  if (!message) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "application-alert"
  }, message, ". Contact the ", /*#__PURE__*/_react.default.createElement(_ExternalLink.default, {
    href: "https://orhelp.osu.edu"
  }, "OR Help Desk"), " for more information.");
};

var _default = AppAlert;
exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Print;

var _react = _interopRequireDefault(require("react"));

var _Print = require("../../internal/FormCommon/Utility/Print");

function Print(_ref) {
  var value = _ref.value;

  if (!value) {
    return /*#__PURE__*/_react.default.createElement("p", {
      className: "text-print"
    }, "\u2014");
  }

  var strValue = '' + value;
  var tokens = [];
  var splitValue = strValue.split('\n');
  tokens.push(splitValue[0]);

  for (var i = 1; i < splitValue.length; i++) {
    tokens.push( /*#__PURE__*/_react.default.createElement("br", null));
    tokens.push(splitValue[i]);
  }

  return /*#__PURE__*/_react.default.createElement(_Print.Print, null, tokens.map(function (token) {
    return token;
  }));
}

;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Diff;

var _react = _interopRequireDefault(require("react"));

var _diff = require("diff");

;

function Diff(_ref) {
  var value = _ref.value,
      prevValue = _ref.prevValue;

  if (!value && !prevValue) {
    return /*#__PURE__*/_react.default.createElement("p", {
      className: "text-diff text-print"
    }, "\u2014");
  }

  var diff = (0, _diff.diffWords)(prevValue || '', value || '');
  var tokens = []; // @ts-ignore

  diff.forEach(function (token) {
    var className = '';

    if (token.added) {
      className = 'is-added';
    } else if (token.removed) {
      className = 'is-removed';
    }

    var splitValue = token.value.split('\n');
    tokens.push( /*#__PURE__*/_react.default.createElement("span", {
      className: className
    }, " ", splitValue[0], " "));

    for (var i = 1; i < splitValue.length; i++) {
      tokens.push( /*#__PURE__*/_react.default.createElement("br", null));
      tokens.push( /*#__PURE__*/_react.default.createElement("span", {
        className: className
      }, " ", splitValue[i], " "));
    }
  }); // `text-print` is included to still make it look textbox-like,
  // but also inline all the diff content.

  return /*#__PURE__*/_react.default.createElement("p", {
    className: "text-diff text-print"
  }, tokens.map(function (token) {
    return token;
  }));
}
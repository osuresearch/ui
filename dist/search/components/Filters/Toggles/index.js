"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Common = require("../Common");

var _ = require("..");

var _2 = require("../../..");

/**
 * Batch of multiple <Toggle> components matching to an enumeration 
 * between filter names and titles. Each filter will be set as a boolean
 * `true` value when checked, or deleted when unchecked.
 */
var Toggles = function Toggles(_ref) {
  var name = _ref.name,
      options = _ref.options,
      _ref$minimumOptionsFo = _ref.minimumOptionsForClearButton,
      minimumOptionsForClearButton = _ref$minimumOptionsFo === void 0 ? 5 : _ref$minimumOptionsFo,
      _ref$operator = _ref.operator,
      operator = _ref$operator === void 0 ? 'AND' : _ref$operator;
  var ctx = (0, _react.useContext)(_.Context);
  var filter;
  var terms = [];

  if (operator === 'OR') {
    filter = ctx.getFilter(name);

    if (filter) {
      terms = filter.OR;
    }
  } else {
    filter = ctx.getFilter(name);

    if (filter) {
      terms = filter.AND;
    }
  }

  var activeFields = [];
  terms.forEach(function (f) {
    activeFields.push(Object.keys(f.term)[0]);
  });
  /**
   * Add/Remove a key from the set of term filters
   */

  var toggleTerm = function toggleTerm(key, checked) {
    // Strip out existing
    terms = terms.filter(function (f) {
      var field = Object.keys(f.term)[0];
      return field !== key;
    });

    if (checked) {
      terms.push((0, _2.term)(key, true, options[key]));
    } // Finally - replace the filter with new terms


    if (operator === 'OR') {
      ctx.addFilter((0, _2.OR)(terms, name));
    } else {
      ctx.addFilter((0, _2.AND)(terms, name));
    }
  };

  var onClear = function onClear() {
    ctx.deleteFilter(name);
  };

  var keys = Object.keys(options);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "filters-toggles"
  }, keys.map(function (key) {
    return /*#__PURE__*/_react.default.createElement(_Common.YetAnotherCheckboxWrapper, {
      name: key,
      checked: activeFields.indexOf(key) >= 0,
      onClick: function onClick(checked) {
        return toggleTerm(key, checked);
      }
    }, options[key]);
  }), keys.length >= minimumOptionsForClearButton && /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-link",
    onClick: onClear
  }, "Clear"));
};

var _default = Toggles;
exports.default = _default;
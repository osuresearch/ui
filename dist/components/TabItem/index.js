"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

/**
 * Child entry of a TabList. Renders as either a `<li>` tab item or a dropdown item
 * depending on where this child needs to be (in the list or the overflow dropdown)
 */
var TabItem = function TabItem(_ref) {
  var children = _ref.children,
      _ref$active = _ref.active,
      active = _ref$active === void 0 ? false : _ref$active,
      href = _ref.href,
      onClick = _ref.onClick,
      onBoundingRect = _ref.onBoundingRect,
      asDropdownItem = _ref.asDropdownItem,
      index = _ref.index;
  var ref = (0, _react.useRef)(null);

  var internalOnClick = function internalOnClick(e) {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  (0, _react.useLayoutEffect)(function () {
    if (ref.current && onBoundingRect) {
      var _rect = ref.current.getBoundingClientRect();

      onBoundingRect(index, _rect);
    }
  }, [ref, onBoundingRect, index]);
  var anchorClassNames = 'nav-link';

  if (asDropdownItem) {
    anchorClassNames = 'dropdown-item';
  }

  if (active) {
    anchorClassNames += ' active';
  }

  if (asDropdownItem) {
    return /*#__PURE__*/_react.default.createElement("a", {
      className: anchorClassNames,
      href: href,
      onClick: internalOnClick
    }, children);
  }

  return /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item",
    ref: ref
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: anchorClassNames,
    onClick: onClick
  }, children));
};

var _default = TabItem;
exports.default = _default;
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../../generic/Icon"));

var TabList = function TabList(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)(9999),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      overflowIndex = _useState2[0],
      setOverflowIndex = _useState2[1];

  var ref = (0, _react.useRef)(null);
  var childRects = [];

  var checkForOverflow = function checkForOverflow() {
    if (!ref.current) return; // Test if any children are rendered beyond our bounding rect

    var bounds = ref.current.getBoundingClientRect();
    var lowestOverflowIdx = -1;

    for (var i = 0; i < childRects.length; i++) {
      if (childRects[i] !== undefined && childRects[i].right > bounds.right) {
        lowestOverflowIdx = i;
        break;
      }
    }

    if (lowestOverflowIdx >= 0) {
      setOverflowIndex(lowestOverflowIdx);
    }
  };
  /**
   * On window resize, update our viewport rect and reset overflow index.
   *
   * As we re-render children, a new overflow index will be determined and
   * a second re-render will be triggered to collapse overflow children
   * into a dropdown.
   * 
   * useLayoutEffect is used here to perform the first run *after*
   * all children have mounted.
   */


  (0, _react.useLayoutEffect)(function () {
    window.addEventListener('resize', checkForOverflow);
    checkForOverflow();
    return function () {
      window.removeEventListener('resize', checkForOverflow);
    };
  }, []);

  var onChildBoundingRect = function onChildBoundingRect(index, rect) {
    childRects[index] = rect;
  }; // Custom render each child with a forced ref


  var childrenArr = _react.default.Children.toArray(children);

  var overflowChildren = []; // TODO: Typed

  var renderChildren = function renderChildren() {
    return childrenArr.map(function (child, idx) {
      var isOverflow = idx >= overflowIndex;

      if ( /*#__PURE__*/_react.default.isValidElement(child)) {
        // TODO: Test if it's a TabItem, ignore the rest.
        var clone = /*#__PURE__*/_react.default.cloneElement(child, {
          index: idx,
          asDropdownItem: isOverflow,
          onBoundingRect: onChildBoundingRect
        });

        if (isOverflow) {
          overflowChildren.push(clone);
          return null;
        }

        return clone;
      }
    });
  };

  return /*#__PURE__*/_react.default.createElement("nav", {
    role: "navigation",
    ref: ref
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "nav nav-tabs"
  }, renderChildren(), overflowChildren.length > 0 && /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item dropdown"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-link nav-link dropdown-toggle tablist-dropdown",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "ellipsis-h"
  }, "Show more")), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-menu dropdown-menu-right"
  }, overflowChildren))));
};

var _default = TabList;
exports.default = _default;
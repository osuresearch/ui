"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../../component/Icon"));

var TabList =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(TabList, _React$Component);

  function TabList(props) {
    var _this;

    (0, _classCallCheck2.default)(this, TabList);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TabList).call(this, props));
    _this.state = {
      boundingClientRect: null,
      lowestOverflowIndex: 9999
    };
    _this.onChildBoundingRect = _this.onChildBoundingRect.bind((0, _assertThisInitialized2.default)(_this)); // this.onResize = this.debounce(this.onResize.bind(this), 100, true);

    _this.onResize = _this.onResize.bind((0, _assertThisInitialized2.default)(_this));
    _this.ref = _react.default.createRef();
    _this.childRects = [];
    return _this;
  }
  /**
   * Basic callback-based debounce function
   *
   * Author: http://davidwalsh.name/javascript-debounce-function
   */
  // debounce(func, wait, immediate) {
  //     let timeout;
  //     return function() {
  //         const context = this;
  //         const args = arguments;
  //         const later = function() {
  //             timeout = null;
  //             if (!immediate) func.apply(context, args);
  //         };
  //         const callNow = immediate && !timeout;
  //         clearTimeout(timeout);
  //         timeout = setTimeout(later, wait);
  //         if (callNow) func.apply(context, args);
  //     };
  // };


  (0, _createClass2.default)(TabList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Watch for window resize events to reflow tab items
      window.addEventListener('resize', this.onResize); // Since all the children have mounted and we should have their client rects,
      // check for overflow of any of the children and trigger a re-render if so.

      this.checkForOverflow();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }
  }, {
    key: "checkForOverflow",
    value: function checkForOverflow() {
      // Test if any children are rendered beyond our bounding rect
      var bounds = this.ref.current.getBoundingClientRect();
      var overflowIndex = -1;

      for (var i = 0; i < this.childRects.length; i++) {
        if (this.childRects[i] !== undefined && this.childRects[i].right > bounds.right) {
          overflowIndex = i;
          break;
        }
      }

      if (overflowIndex >= 0) {
        this.setState({
          overflowIndex: overflowIndex
        });
      }
    }
  }, {
    key: "onChildBoundingRect",
    value: function onChildBoundingRect(index, rect) {
      this.childRects[index] = rect;
    }
    /**
     * On window resize, update our viewport rect and reset overflow index.
     *
     * As we re-render children, a new overflow index will be determined and
     * a second re-render will be triggered to collapse overflowed children
     * into a dropdown.
     */

  }, {
    key: "onResize",
    value: function onResize() {
      this.checkForOverflow();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var vertical = this.props.vertical;
      var classNames = 'nav';

      if (vertical) {
        classNames += ' flex-column';
      } else {
        classNames += ' nav-tabs';
      } // Custom render each child with a forced ref


      var children = _react.default.Children.toArray(this.props.children);

      var overflowChildren = [];

      var renderChildren = function renderChildren() {
        return children.map(function (child, idx) {
          var isOverflow = idx >= _this2.state.overflowIndex;

          var clone = _react.default.cloneElement(child, {
            index: idx,
            asDropdownItem: isOverflow,
            onBoundingRect: _this2.onChildBoundingRect
          });

          if (isOverflow) {
            overflowChildren.push(clone);
            return null;
          }

          return clone;
        });
      };

      return _react.default.createElement("nav", {
        role: "navigation",
        ref: this.ref
      }, _react.default.createElement("ul", {
        className: classNames
      }, !vertical && renderChildren(), vertical && this.props.children, overflowChildren.length > 0 && _react.default.createElement("li", {
        className: "nav-item dropdown"
      }, _react.default.createElement("button", {
        className: "btn btn-link nav-link dropdown-toggle tablist-dropdown",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false"
      }, _react.default.createElement(_Icon.default, {
        name: "ellipsis-h"
      }, "Show more")), _react.default.createElement("div", {
        className: "dropdown-menu dropdown-menu-right"
      }, overflowChildren))));
    }
  }]);
  return TabList;
}(_react.default.Component);

TabList.propTypes = {
  /**
   * Lay the tabs out vertically instead of horizontal
   */
  vertical: _propTypes.default.bool
};
TabList.defaultProps = {
  vertical: false
};
var _default = TabList;
exports.default = _default;
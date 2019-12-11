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

// TODO: Probably add react-router and turn the items into NavLinks.
// I don't really see us using this outside of the router - since
// tabs should also drive the URL to send the user back to the
// right tab on page reload.

/**
 * Child entry of a TabList. Renders as either a `<ul>` tab item or a dropdown item
 * depending on where this child needs to be (in the list or the overflow dropdown)
 */
var TabItem =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(TabItem, _React$Component);

  function TabItem(props) {
    var _this;

    (0, _classCallCheck2.default)(this, TabItem);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TabItem).call(this, props));
    _this.onClick = _this.onClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.ref = _react.default.createRef();
    return _this;
  }

  (0, _createClass2.default)(TabItem, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.ref.current && this.props.onBoundingRect) {
        var rect = this.ref.current.getBoundingClientRect();
        this.props.onBoundingRect(this.props.index, rect);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.ref.current && this.props.onBoundingRect) {
        var rect = this.ref.current.getBoundingClientRect();
        this.props.onBoundingRect(this.props.index, rect);
      }
    }
    /**
     * Override anchor target if we have an onClick handler
     */

  }, {
    key: "onClick",
    value: function onClick(e) {
      if (this.props.onClick) {
        e.preventDefault();
        this.props.onClick();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          href = _this$props.href,
          asDropdownItem = _this$props.asDropdownItem;
      var anchorClassNames = 'nav-link';

      if (asDropdownItem) {
        anchorClassNames = 'dropdown-item';
      }

      if (active) {
        anchorClassNames += ' active';
      }

      if (asDropdownItem) {
        return _react.default.createElement("a", {
          className: anchorClassNames,
          href: href,
          onClick: this.onClick
        }, this.props.children);
      }

      return _react.default.createElement("li", {
        className: "nav-item",
        ref: this.ref
      }, _react.default.createElement("a", {
        className: anchorClassNames,
        href: href,
        onClick: this.onClick
      }, this.props.children));
    }
  }]);
  return TabItem;
}(_react.default.Component);

TabItem.propTypes = {
  active: _propTypes.default.bool,

  /**
   * Link that each tab will send the user. If not supplied, use `onClick`
   */
  href: _propTypes.default.string,

  /**
   * Click event handler for the tab. Overrides `href` if supplied
   */
  onClick: _propTypes.default.func,
  // Internal use properties required by TabList

  /**
   * Parent's client bounds for overflow detection
   * @ignore
   */
  containerRect: _propTypes.default.object,

  /**
   * Report the client bounding rect of this component after any updates
   * @ignore
   */
  onBoundingRect: _propTypes.default.func,

  /**
   * Render this item as a dropdown item instead of a list item
   * @ignore
   */
  asDropdownItem: _propTypes.default.bool,

  /**
   * Slot index in the parent, based on sibling order
   * @ignore
   */
  index: _propTypes.default.number
};
TabItem.defaultProps = {
  active: false,
  href: '#'
};
var _default = TabItem;
exports.default = _default;
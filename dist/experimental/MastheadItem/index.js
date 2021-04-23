"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ExternalLink = _interopRequireDefault(require("../../controls/ExternalLink"));

var _Icon = _interopRequireDefault(require("../../generic/Icon"));

require("./index.scss");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * "At a glance" information presented within a Masthead
 */
var MastheadItem = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(MastheadItem, _React$Component);

  var _super = _createSuper(MastheadItem);

  function MastheadItem(props) {
    var _this;

    (0, _classCallCheck2.default)(this, MastheadItem);
    _this = _super.call(this, props);
    _this.popper = /*#__PURE__*/_react.default.createRef();
    return _this;
  }

  (0, _createClass2.default)(MastheadItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Manual initialization of the jQuery plugin Bootstrap requires for popovers
      window.$(this.popper.current).popover({// ... etc
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          content = _this$props.content,
          href = _this$props.href,
          fill = _this$props.fill,
          extraContent = _this$props.extraContent;
      var classNames = "masthead-item";

      if (fill) {
        classNames += " masthead-item-fill";
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: classNames
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "masthead-item-title"
      }, title), extraContent && /*#__PURE__*/_react.default.createElement("button", {
        className: "btn-link",
        "data-container": "body",
        "data-toggle": "popover",
        "data-placement": "bottom",
        "data-content": extraContent,
        ref: this.popper
      }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
        name: "caret-down"
      }), " ", content), !extraContent && href && /*#__PURE__*/_react.default.createElement(_ExternalLink.default, {
        href: href
      }, content), !extraContent && !href && content);
    }
  }]);
  return MastheadItem;
}(_react.default.Component);

MastheadItem.propTypes = {
  /** Display title for the item */
  title: _propTypes.default.string.isRequired,

  /** Content within the list item */
  content: _propTypes.default.string.isRequired,

  /** Optional **external** link */
  href: _propTypes.default.string,

  /**
   * Should this item fill the remaining space.
   * You will typically want at least one item to fill.
   */
  fill: _propTypes.default.bool.isRequired,

  /**
   * Optional extra content to display if the indended content
   * for the item won't fit in the bar. `content` will become a
   * link to display the additional content when clicked.
   *
   * Cannot be combined with `href`.
   */
  extraContent: _propTypes.default.string
};
MastheadItem.defaultProps = {
  fill: false
};
var _default = MastheadItem;
exports.default = _default;
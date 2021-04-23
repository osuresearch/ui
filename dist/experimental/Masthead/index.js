"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _debounce = _interopRequireDefault(require("lodash/debounce"));

require("./index.scss");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Masthead for a resource details page (project, award, protocol, etc)
 *
 * Supports dynamic resizing of the title font based on container
 * size and a horizontal list of additional metadata.
 */
var Masthead = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Masthead, _React$Component);

  var _super = _createSuper(Masthead);

  function Masthead(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Masthead);
    _this = _super.call(this, props);
    _this.ref = /*#__PURE__*/_react.default.createRef();
    _this.onBodyResize = _this.onBodyResize.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Masthead, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', (0, _debounce.default)(this.onBodyResize, this.props.debounce));
      this.onBodyResize();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', (0, _debounce.default)(this.onBodyResize, this.props.debounce));
    }
  }, {
    key: "onBodyResize",
    value: function onBodyResize() {
      var _this$props = this.props,
          titleMaxHeight = _this$props.titleMaxHeight,
          titleMaxSize = _this$props.titleMaxSize,
          titleMinSize = _this$props.titleMinSize;

      if (!this.ref.current) {
        return;
      } // Unfortunately this is a bin packing problem.
      // Brute force is about as good as we'll get here.


      var size = titleMinSize;

      do {
        this.ref.current.style.fontSize = size + 'px';
        size++;
      } while (this.ref.current.scrollHeight < titleMaxHeight && size < titleMaxSize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          theme = _this$props2.theme,
          title = _this$props2.title,
          subtitle = _this$props2.subtitle,
          aside = _this$props2.aside,
          asideSubtitle = _this$props2.asideSubtitle,
          children = _this$props2.children;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "masthead"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "row no-gutters masthead-".concat(theme)
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: aside ? 'col-9' : 'col-12'
      }, subtitle && /*#__PURE__*/_react.default.createElement("div", {
        className: "masthead-subtitle"
      }, subtitle), /*#__PURE__*/_react.default.createElement("h1", {
        className: "masthead-title",
        ref: this.ref
      }, title)), aside && /*#__PURE__*/_react.default.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/_react.default.createElement("h2", {
        className: "masthead-aside"
      }, aside), asideSubtitle && /*#__PURE__*/_react.default.createElement("h5", {
        className: "masthead-aside-subtitle"
      }, asideSubtitle))), children && /*#__PURE__*/_react.default.createElement("div", {
        className: "row no-gutters"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "col-12 masthead-list"
      }, children)));
    }
  }]);
  return Masthead;
}(_react.default.Component);

Masthead.propTypes = {
  /**
   * Theme for the masthead background gradient.
   *
   * Current list of themes represent PI Portal resources
   * and may change in the future to more generic theme names.
   */
  theme: _propTypes.default.oneOf(['project', 'proposal', 'org', 'person', 'protocol', 'award']).isRequired,

  /**
   * Primary title to display in the masthead.
   * Font size will dynamically adjust to fit a container.
   */
  title: _propTypes.default.string.isRequired,

  /** Subtitle to appear above the title */
  subtitle: _propTypes.default.string,

  /**
   * Content to display to the right of the title.
   * Must be short, such as a monetary value
   */
  aside: _propTypes.default.string,

  /** Subtitle to display under the aside content */
  asideSubtitle: _propTypes.default.string,

  /** Debounce time (milliseconds) for window resize events */
  debounce: _propTypes.default.number.isRequired,

  /** Suggested maximum scroll height of the title content */
  titleMaxHeight: _propTypes.default.number.isRequired,

  /** Minimum font size (in pixels) that the title can compress to */
  titleMinSize: _propTypes.default.number.isRequired,

  /** Maximum font size (in pixels) that the title can expand to */
  titleMaxSize: _propTypes.default.number.isRequired
};
Masthead.defaultProps = {
  theme: 'project',
  debounce: 100,
  titleMaxHeight: 100,
  titleMinSize: 14,
  titleMaxSize: 30
};
var _default = Masthead;
exports.default = _default;
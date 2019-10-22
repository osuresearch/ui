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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

/**
 * Content banner for a resource (project, award, protocol, etc).
 *
 * Supports dynamic resizing of the title font based on container
 * size and a horizontal list of additional metadata.
 */
var Banner =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Banner, _React$Component);

  function Banner() {
    (0, _classCallCheck2.default)(this, Banner);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Banner).apply(this, arguments));
  }

  (0, _createClass2.default)(Banner, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          theme = _this$props.theme,
          title = _this$props.title;
      var classNames = 'banner banner-' + theme;
      return _react.default.createElement("div", {
        className: classNames
      }, title);
    }
  }]);
  return Banner;
}(_react.default.Component);

Banner.propTypes = {
  title: _propTypes.default.string.isRequired,
  theme: _propTypes.default.oneOf(['foo', 'bar']).isRequired
};
Banner.defaultProps = {
  theme: 'foo'
};
var _default = Banner;
exports.default = _default;
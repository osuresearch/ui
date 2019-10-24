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
 * A simple badge that might not be that simple
 */
var Badge =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Badge, _React$Component);

  function Badge() {
    (0, _classCallCheck2.default)(this, Badge);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Badge).apply(this, arguments));
  }

  (0, _createClass2.default)(Badge, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          theme = _this$props.theme;
      return _react.default.createElement("span", {
        className: "badge badge-".concat(theme)
      }, children);
    }
  }]);
  return Badge;
}(_react.default.Component);

Badge.propTypes = {
  /**
   * The content of the badge label
   */
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.object]),

  /**
   * The Bootstrap theme to apply to the badge
   */
  theme: _propTypes.default.string.isRequired
};
Badge.defaultProps = {
  theme: 'secondary'
};
var _default = Badge;
exports.default = _default;
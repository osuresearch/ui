"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

/**
 * Font Awesome 4.7 icons with build-in accessibility
 */
var Icon = function Icon(props) {
  var classNames = "fa fa-".concat(props.name);

  if (props.spin) {
    classNames += ' fa-spin';
  }

  ;
  var hasLabel = _react.default.Children.count(props.children) > 0;

  if (props.circled) {
    classNames += ' fa-stack-1x';
    return _react.default.createElement("span", {
      className: "fa-stack",
      "aria-hidden": !hasLabel
    }, _react.default.createElement("i", {
      className: "fa fa-circle-thin fa-stack-2x"
    }), _react.default.createElement("i", {
      className: classNames
    }, hasLabel && _react.default.createElement("span", {
      className: "sr-only"
    }, props.children)));
  } // Single icon


  return _react.default.createElement("i", {
    className: classNames,
    "aria-hidden": !hasLabel
  }, hasLabel && _react.default.createElement("span", {
    className: "sr-only"
  }, props.children));
};

Icon.propTypes = {
  /**
   * Font Awesome 4.7 icon name
   */
  name: _propTypes.default.string.isRequired,

  /**
   * Should the icon have a spin animation
   */
  spin: _propTypes.default.bool.isRequired,

  /**
   * Will encapsulate the specified icon within a circle
   */
  circled: _propTypes.default.bool.isRequired,

  /**
   * Screen reader labeling for the icon. If not provided,
   * the icon will be flagged as `aria-hidden`
   */
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.object])
};
Icon.defaultProps = {
  spin: false,
  circled: false
};
var _default = Icon;
exports.default = _default;
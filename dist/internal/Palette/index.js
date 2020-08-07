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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Palette = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Palette, _React$Component);

  var _super = _createSuper(Palette);

  function Palette(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Palette);
    _this = _super.call(this, props);
    _this.state = {
      className: _this.getColorClassName('', 0),
      sass: _this.getColorSass('', 0)
    };
    return _this;
  }

  (0, _createClass2.default)(Palette, [{
    key: "getColorClassName",
    value: function getColorClassName(tintOrShade, level) {
      // Illegal tint
      if (tintOrShade === 'tint' && !this.props.tints.includes(level)) {
        return 'disabled';
      } // Illegal shade


      if (tintOrShade === 'shade' && !this.props.shades.includes(level)) {
        return 'disabled';
      }

      var className = 'brand-' + this.props.color;

      if (tintOrShade !== '') {
        className += '-' + tintOrShade;
      }

      if (level !== 0) {
        className += '-' + level;
      }

      return className;
    }
  }, {
    key: "getColorSass",
    value: function getColorSass(tintOrShade, level) {
      if (tintOrShade === '') {
        return "$".concat(this.props.color);
      }

      return "".concat(tintOrShade, "($").concat(this.props.color, ", ").concat(level, "%)");
    }
  }, {
    key: "onClick",
    value: function onClick(tintOrShade, level) {
      this.setState({
        className: this.getColorClassName(tintOrShade, level),
        sass: this.getColorSass(tintOrShade, level)
      });
    }
  }, {
    key: "getColorLink",
    value: function getColorLink(tintOrShade, level) {
      var _this2 = this;

      var className = this.getColorClassName(tintOrShade, level);

      if (className === 'disabled') {
        return /*#__PURE__*/_react.default.createElement("button", {
          className: className
        }, ".");
      }

      return /*#__PURE__*/_react.default.createElement("button", {
        className: className,
        onClick: function onClick() {
          return _this2.onClick(tintOrShade, level);
        }
      }, level || '.');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          className = _this$state.className,
          sass = _this$state.sass;
      var colors = []; // Add tints

      for (var i = 10; i < 100; i += 10) {
        colors.push(this.getColorLink('tint', i));
      } // Add base color


      colors.push(this.getColorLink('', 0)); // Add shades

      for (var _i = 10; _i < 100; _i += 10) {
        colors.push(this.getColorLink('shade', _i));
      } // Print preview


      return /*#__PURE__*/_react.default.createElement("div", {
        className: "palette"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "palette-links"
      }, colors), /*#__PURE__*/_react.default.createElement("div", {
        className: "palette-example ".concat(className)
      }, sass));
    }
  }]);
  return Palette;
}(_react.default.Component);

Palette.propTypes = {
  color: _propTypes.default.string.isRequired,
  tints: _propTypes.default.arrayOf(_propTypes.default.number).isRequired,
  shades: _propTypes.default.arrayOf(_propTypes.default.number).isRequired
};
Palette.defaultProps = {
  color: 'gray',
  tints: [10, 20, 30, 40, 50, 60, 70, 80, 90],
  shades: [10, 20, 30, 40, 50, 60, 70, 80, 90]
};
var _default = Palette;
exports.default = _default;
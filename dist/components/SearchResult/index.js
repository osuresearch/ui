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

/**
 * Default implementation for a single result from `Search`. If you want to customize the
 * result renderer, you need to create your own variation of this component.
 */
var SearchResult =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(SearchResult, _React$Component);

  function SearchResult(props) {
    var _this;

    (0, _classCallCheck2.default)(this, SearchResult);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SearchResult).call(this, props));
    _this.onClick = _this.onClick.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(SearchResult, [{
    key: "onClick",
    value: function onClick() {
      // Call parent onSelect with the selected key/value pair
      this.props.onSelect(this.props.resource.id, this.props.resource.attributes.name);
    }
  }, {
    key: "render",
    value: function render() {
      var resource = this.props.resource;
      return _react.default.createElement("button", {
        className: "dropdown-item",
        type: "button",
        onClick: this.onClick
      }, resource.attributes.name);
    }
  }]);
  return SearchResult;
}(_react.default.Component);

SearchResult.propTypes = {
  /**
   * JSON:API resource this search result displays
   */
  resource: _propTypes.default.shape({
    id: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
    attributes: _propTypes.default.shape({
      name: _propTypes.default.string.isRequired
    })
  }).isRequired,

  /**
   * Callable provided by `Search` to update the
   * component when this result is selected
   */
  onSelect: _propTypes.default.func.isRequired
};
var _default = SearchResult;
exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

/**
 * Default implementation for a single result from `Search`. If you want to customize the
 * result renderer, you need to create your own variation of this component.
 */
var SearchResult = function SearchResult(props) {
  // Extract a key/value from the resource to display in the input field once selected
  var onClick = function onClick() {
    return props.onSelect(props.resource.id, props.resource.attributes.name);
  };

  return _react.default.createElement("button", {
    className: "dropdown-item",
    type: "button",
    onClick: onClick
  }, props.resource.attributes.name);
};

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
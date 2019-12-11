"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

/**
 * Search result component for looking up people in the University.
 * Includes their username alongside each result for better identifying
 * the correct result when multiple people with the same name are returned.
 */
var PersonSearchResult = function PersonSearchResult(props) {
  // Extract a key/value from the resource to display in the input field once selected
  var onClick = function onClick() {
    return props.onSelect(props.resource.id, props.resource.attributes.name);
  };

  return _react.default.createElement("button", {
    className: "dropdown-item",
    type: "button",
    onClick: onClick
  }, props.resource.attributes.name, _react.default.createElement("small", {
    className: "text-muted pull-right pl-2"
  }, "(", props.resource.attributes.username, ")"));
};

PersonSearchResult.propTypes = {
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
var _default = PersonSearchResult;
exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ExamplesRenderer = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Styled = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/Styled/Styled"));

var styles = function styles(_ref) {
  var space = _ref.space;
  return {
    // Just default jss-isolate rules
    root: {
      marginTop: space[4]
    }
  };
};

var ExamplesRenderer = function ExamplesRenderer(_ref2) {
  var classes = _ref2.classes,
      name = _ref2.name,
      children = _ref2.children;
  return /*#__PURE__*/_react.default.createElement("article", {
    className: classes.root,
    "data-testid": "".concat(name, "-examples")
  }, children);
};

exports.ExamplesRenderer = ExamplesRenderer;
ExamplesRenderer.propTypes = {
  classes: _propTypes.default.objectOf(_propTypes.default.string.isRequired).isRequired,
  name: _propTypes.default.string.isRequired,
  children: _propTypes.default.node
};

var _default = (0, _Styled.default)(styles)(ExamplesRenderer);

exports.default = _default;
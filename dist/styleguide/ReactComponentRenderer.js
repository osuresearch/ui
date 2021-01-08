"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ReactComponentRenderer = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Pathline = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/Pathline"));

var _Styled = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/Styled/Styled"));

// @ts-ignore
// @ts-ignore
var styles = function styles(_ref) {
  var color = _ref.color,
      fontSize = _ref.fontSize,
      space = _ref.space;
  return {
    root: {
      marginBottom: space[6]
    },
    header: {
      marginBottom: space[3]
    },
    tabs: {
      marginBottom: space[3]
    },
    tabButtons: {
      marginBottom: space[1]
    },
    tabBody: {
      overflowX: 'auto',
      maxWidth: '100%',
      WebkitOverflowScrolling: 'touch'
    },
    docs: {
      color: color.base,
      fontSize: fontSize.text
    }
  };
};

var ReactComponentRenderer = function ReactComponentRenderer(_ref2) {
  var classes = _ref2.classes,
      name = _ref2.name,
      heading = _ref2.heading,
      pathLine = _ref2.pathLine,
      description = _ref2.description,
      docs = _ref2.docs,
      examples = _ref2.examples,
      tabButtons = _ref2.tabButtons,
      tabBody = _ref2.tabBody;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root,
    "data-testid": "".concat(name, "-container")
  }, /*#__PURE__*/_react.default.createElement("header", {
    className: classes.header
  }, heading, pathLine && /*#__PURE__*/_react.default.createElement(_Pathline.default, null, pathLine)), (description || docs) && /*#__PURE__*/_react.default.createElement("div", {
    className: classes.docs
  }, description, docs), tabButtons && /*#__PURE__*/_react.default.createElement("div", {
    className: classes.tabs
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.tabButtons
  }, tabButtons), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.tabBody
  }, tabBody)), examples);
};

exports.ReactComponentRenderer = ReactComponentRenderer;
ReactComponentRenderer.propTypes = {
  classes: _propTypes.default.objectOf(_propTypes.default.string.isRequired).isRequired,
  name: _propTypes.default.string.isRequired,
  heading: _propTypes.default.node,
  // Change - made this optional
  filepath: _propTypes.default.string,
  pathLine: _propTypes.default.string,
  tabButtons: _propTypes.default.node,
  tabBody: _propTypes.default.node,
  description: _propTypes.default.node,
  docs: _propTypes.default.node,
  examples: _propTypes.default.node,
  isolated: _propTypes.default.bool
};

var _default = (0, _Styled.default)(styles)(ReactComponentRenderer);

exports.default = _default;
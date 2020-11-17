"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SectionRenderer = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Styled = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/Styled/Styled"));

var _SectionHeading = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/SectionHeading"));

var _Markdown = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/Markdown"));

var styles = function styles(_ref) {
  var space = _ref.space;
  return {
    root: {
      marginBottom: space[4]
    }
  };
};

var SectionRenderer = function SectionRenderer(allProps) {
  var classes = allProps.classes,
      name = allProps.name,
      slug = allProps.slug,
      content = allProps.content,
      components = allProps.components,
      sections = allProps.sections,
      depth = allProps.depth,
      description = allProps.description,
      pagePerSection = allProps.pagePerSection;
  return /*#__PURE__*/_react.default.createElement("section", {
    className: classes.root,
    "data-testid": "section-".concat(slug)
  }, name && name.length > 1 && /*#__PURE__*/_react.default.createElement(_SectionHeading.default, {
    depth: depth,
    id: slug,
    slotName: "sectionToolbar",
    pagePerSection: pagePerSection,
    slotProps: allProps
  }, name), description && /*#__PURE__*/_react.default.createElement(_Markdown.default, {
    text: description
  }), content, sections, components);
};

exports.SectionRenderer = SectionRenderer;
SectionRenderer.propTypes = {
  classes: _propTypes.default.objectOf(_propTypes.default.string.isRequired).isRequired,
  name: _propTypes.default.string,
  description: _propTypes.default.string,
  slug: _propTypes.default.string.isRequired,
  content: _propTypes.default.node,
  components: _propTypes.default.node,
  sections: _propTypes.default.node,
  isolated: _propTypes.default.bool,
  depth: _propTypes.default.number.isRequired,
  pagePerSection: _propTypes.default.bool
};

var _default = (0, _Styled.default)(styles)(SectionRenderer);

exports.default = _default;
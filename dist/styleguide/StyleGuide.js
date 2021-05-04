"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TableOfContents = _interopRequireDefault(require("./TableOfContents"));

var _StyleGuideRenderer = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/StyleGuide/StyleGuideRenderer"));

var _Sections = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/Sections"));

var _Welcome = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/Welcome"));

var _Error = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/Error"));

var _NotFound = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/NotFound"));

var _Context = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/Context"));

var _consts = require("react-styleguidist/lib/scripts/consts");

var _consts2 = require("react-styleguidist/lib/client/consts");

var _Utility = require("./Utility");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * This function will return true, if the sidebar should be visible and false otherwise.
 *
 * These sorted conditions (highest precedence first) define the visibility
 * state of the sidebar.
 *
 * - Sidebar is hidden for isolated example views
 * - Sidebar is always visible when pagePerSection
 * - Sidebar is hidden when showSidebar is set to false
 * - Sidebar is visible when showSidebar is set to true for non-isolated views
 *
 * @param {string} displayMode
 * @param {boolean} showSidebar
 * @param {boolean} pagePerSection
 * @returns {boolean}
 */
function hasSidebar(displayMode, showSidebar) {
  return displayMode === _consts2.DisplayModes.notFound || showSidebar && displayMode === _consts2.DisplayModes.all;
}

var StyleGuide = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(StyleGuide, _Component);

  var _super = _createSuper(StyleGuide);

  function StyleGuide() {
    var _this;

    (0, _classCallCheck2.default)(this, StyleGuide);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      error: false,
      info: null
    });
    return _this;
  }

  (0, _createClass2.default)(StyleGuide, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      this.setState({
        error: error,
        info: info
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          error = _this$state.error,
          info = _this$state.info;
      var _this$props = this.props,
          config = _this$props.config,
          sec = _this$props.sections,
          welcomeScreen = _this$props.welcomeScreen,
          patterns = _this$props.patterns,
          displayMode = _this$props.displayMode,
          allSec = _this$props.allSections,
          pagePerSection = _this$props.pagePerSection,
          codeRevision = _this$props.codeRevision,
          cssRevision = _this$props.cssRevision,
          slots = _this$props.slots;

      if (error && info) {
        return /*#__PURE__*/_react.default.createElement(_Error.default, {
          error: error,
          info: info
        });
      }

      if (welcomeScreen && patterns) {
        return /*#__PURE__*/_react.default.createElement(_Welcome.default, {
          patterns: patterns
        });
      }

      var sections = (0, _toConsumableArray2.default)(sec);
      var allSections = allSec ? (0, _toConsumableArray2.default)(allSec) : [];
      (0, _Utility.FormatSubcomponents)(allSections);
      return /*#__PURE__*/_react.default.createElement(_Context.default.Provider, {
        value: {
          codeRevision: codeRevision,
          config: config,
          slots: slots,
          displayMode: displayMode || _consts2.DisplayModes.all,
          cssRevision: cssRevision
        }
      }, /*#__PURE__*/_react.default.createElement(_StyleGuideRenderer.default, {
        key: cssRevision,
        title: config.title,
        version: config.version,
        homepageUrl: _consts.HOMEPAGE,
        toc: allSections ? /*#__PURE__*/_react.default.createElement(_TableOfContents.default, {
          sections: allSections,
          useRouterLinks: pagePerSection,
          tocMode: config.tocMode
        }) : null,
        hasSidebar: hasSidebar(displayMode, config.showSidebar)
      }, sections.length ? /*#__PURE__*/_react.default.createElement(_Sections.default, {
        sections: sections,
        depth: 1
      }) : /*#__PURE__*/_react.default.createElement(_NotFound.default, null)));
    }
  }]);
  return StyleGuide;
}(_react.Component);

exports.default = StyleGuide;
(0, _defineProperty2.default)(StyleGuide, "propTypes", {
  codeRevision: _propTypes.default.number.isRequired,
  cssRevision: _propTypes.default.string.isRequired,
  config: _propTypes.default.object.isRequired,
  slots: _propTypes.default.object.isRequired,
  sections: _propTypes.default.array.isRequired,
  welcomeScreen: _propTypes.default.bool,
  patterns: _propTypes.default.array,
  displayMode: _propTypes.default.string,
  allSections: _propTypes.default.array.isRequired,
  pagePerSection: _propTypes.default.bool
});
(0, _defineProperty2.default)(StyleGuide, "defaultProps", {
  displayMode: _consts2.DisplayModes.all
});
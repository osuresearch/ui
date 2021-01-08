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

var _ComponentsList = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/ComponentsList"));

var _TableOfContentsRenderer = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/TableOfContents/TableOfContentsRenderer"));

var _filterSectionsByName = _interopRequireDefault(require("react-styleguidist/lib/client//utils/filterSectionsByName"));

var _handleHash = require("react-styleguidist/lib/client//utils/handleHash");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TableOfContents = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(TableOfContents, _Component);

  var _super = _createSuper(TableOfContents);

  function TableOfContents() {
    var _this;

    (0, _classCallCheck2.default)(this, TableOfContents);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      searchTerm: ''
    });
    return _this;
  }

  (0, _createClass2.default)(TableOfContents, [{
    key: "renderLevel",
    value: function renderLevel(sections) {
      var _this2 = this;

      var useRouterLinks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var hashPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var useHashId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      // Match selected component in both basic routing and pagePerSection routing.
      var _this$props$loc = this.props.loc,
          hash = _this$props$loc.hash,
          pathname = _this$props$loc.pathname;
      var windowHash = pathname + (useRouterLinks ? hash : (0, _handleHash.getHash)(hash));
      var childrenContainSelected = false;
      var processedItems = sections.map(function (section) {
        var children = [].concat((0, _toConsumableArray2.default)(section.sections || []), (0, _toConsumableArray2.default)(section.components || []));
        var sectionDepth = section.sectionDepth || 0;
        var childHashPath = sectionDepth === 0 && useHashId ? hashPath : [].concat((0, _toConsumableArray2.default)(hashPath), [section.name ? section.name : '-']);

        var _ref = children.length > 0 ? _this2.renderLevel(children, useRouterLinks, childHashPath, sectionDepth === 0) : {
          content: undefined,
          containsSelected: false
        },
            content = _ref.content,
            containsSelected = _ref.containsSelected;

        var selected = (!useRouterLinks && section.href ? (0, _handleHash.getHash)(section.href) : section.href) === windowHash;

        if (containsSelected || selected) {
          childrenContainSelected = true;
        }

        return _objectSpread(_objectSpread({}, section), {}, {
          heading: !!section.name && children.length > 0,
          content: content,
          selected: selected,
          shouldOpenInNewTab: !!section.external && !!section.externalLink,
          initialOpen: _this2.props.tocMode !== 'collapse' || containsSelected || section.expand,
          forcedOpen: !!_this2.state.searchTerm.length //forcedOpen: true

        });
      });
      return {
        content: /*#__PURE__*/_react.default.createElement(_ComponentsList.default, {
          items: processedItems
        }),
        containsSelected: childrenContainSelected
      };
    }
  }, {
    key: "renderSections",
    value: function renderSections() {
      var searchTerm = this.state.searchTerm;
      var _this$props = this.props,
          sections = _this$props.sections,
          useRouterLinks = _this$props.useRouterLinks; // If there is only one section, we treat it as a root section
      // In this case the name of the section won't be rendered and it won't get left padding
      // Since a section can contain only other sections,
      // we need to make sure not to loose the subsections.
      // We will treat those subsections as the new roots.

      var firstLevel = sections.length === 1 ? // only use subsections if there actually are subsections
      sections[0].sections && sections[0].sections.length ? sections[0].sections : sections[0].components : sections;
      var filtered = firstLevel ? (0, _filterSectionsByName.default)(firstLevel, searchTerm) : firstLevel || [];
      return this.renderLevel(filtered, useRouterLinks).content;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var handleSearchTermChange = function handleSearchTermChange(searchTerm) {
        return _this3.setState({
          searchTerm: searchTerm
        });
      };

      return /*#__PURE__*/_react.default.createElement(_TableOfContentsRenderer.default, {
        searchTerm: this.state.searchTerm,
        onSearchTermChange: handleSearchTermChange
      }, this.renderSections());
    }
  }]);
  return TableOfContents;
}(_react.Component);

exports.default = TableOfContents;
(0, _defineProperty2.default)(TableOfContents, "propTypes", {
  sections: _propTypes.default.array.isRequired,
  useRouterLinks: _propTypes.default.bool,
  tocMode: _propTypes.default.string,
  loc: _propTypes.default.object
});
(0, _defineProperty2.default)(TableOfContents, "defaultProps", {
  loc: window.location
});
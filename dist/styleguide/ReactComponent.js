"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Examples = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/Examples"));

var _SectionHeading = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/SectionHeading"));

var _JsDoc = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/JsDoc"));

var _Markdown = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/Markdown"));

var _Slot = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/Slot"));

var _ReactComponentRenderer = _interopRequireDefault(require("./ReactComponentRenderer"));

var _Context = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/Context"));

var _ExamplePlaceholder = _interopRequireDefault(require("react-styleguidist/lib/client/rsg-components/ExamplePlaceholder"));

var _slots = require("react-styleguidist/lib/client/rsg-components/slots");

var _consts = require("react-styleguidist/lib/client/consts");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ExamplePlaceholder = process.env.STYLEGUIDIST_ENV !== 'production' ? _ExamplePlaceholder.default : function () {
  return /*#__PURE__*/_react.default.createElement("div", null);
};

var ReactComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(ReactComponent, _Component);

  var _super = _createSuper(ReactComponent);

  function ReactComponent() {
    var _this;

    (0, _classCallCheck2.default)(this, ReactComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      activeTab: _this.props.usageMode === _consts.UsageModes.expand ? _slots.DOCS_TAB_USAGE : undefined
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleTabChange", function (name) {
      _this.setState(function (state) {
        return {
          activeTab: state.activeTab !== name ? name : undefined
        };
      });
    });
    return _this;
  }

  (0, _createClass2.default)(ReactComponent, [{
    key: "render",
    value: function render() {
      var _component$module, _component$module$def, _component$props;

      var activeTab = this.state.activeTab;
      var _this$context = this.context,
          displayMode = _this$context.displayMode,
          pagePerSection = _this$context.config.pagePerSection;
      var _this$props = this.props,
          component = _this$props.component,
          depth = _this$props.depth,
          usageMode = _this$props.usageMode,
          exampleMode = _this$props.exampleMode;
      var name = component.name,
          visibleName = component.visibleName,
          _component$slug = component.slug,
          slug = _component$slug === void 0 ? '-' : _component$slug,
          filepath = component.filepath,
          pathLine = component.pathLine,
          href = component.href;

      var _ref = component.props || {},
          _ref$description = _ref.description,
          description = _ref$description === void 0 ? '' : _ref$description,
          _ref$examples = _ref.examples,
          examples = _ref$examples === void 0 ? [] : _ref$examples,
          _ref$tags = _ref.tags,
          tags = _ref$tags === void 0 ? {} : _ref$tags;

      if (!name) {
        return null;
      }

      var showUsage = usageMode !== _consts.UsageModes.hide; // @ts-ignore

      var pLine = ((_component$module = component.module) === null || _component$module === void 0 ? void 0 : (_component$module$def = _component$module.default) === null || _component$module$def === void 0 ? void 0 : _component$module$def.componentPathLine) || pathLine;
      return /*#__PURE__*/_react.default.createElement(_ReactComponentRenderer.default, {
        name: name,
        slug: slug,
        filepath: filepath,
        pathLine: pLine,
        docs: /*#__PURE__*/_react.default.createElement(_JsDoc.default, tags),
        description: description && /*#__PURE__*/_react.default.createElement(_Markdown.default, {
          text: description
        }),
        heading: visibleName &&
        /*#__PURE__*/
        // Only display heading if visibleName is defined (allows us to collapse sections when the section shares a name with the first component)
        _react.default.createElement(_SectionHeading.default, {
          id: slug,
          pagePerSection: pagePerSection,
          deprecated: !!tags.deprecated,
          slotName: "componentToolbar",
          slotProps: _objectSpread(_objectSpread({}, component), {}, {
            isolated: displayMode !== _consts.DisplayModes.all
          }),
          href: href,
          depth: depth
        }, visibleName),
        examples: examples.length > 0 && /*#__PURE__*/_react.default.createElement(_Examples.default, {
          examples: examples,
          name: name,
          exampleMode: exampleMode
        }) // Prompt to create example was removed
        ,
        tabButtons: // Only display props table if the component actually has props
        showUsage && ((_component$props = component.props) === null || _component$props === void 0 ? void 0 : _component$props.props) && component.props.props.length > 0 && /*#__PURE__*/_react.default.createElement(_Slot.default, {
          name: "docsTabButtons",
          active: activeTab,
          props: _objectSpread(_objectSpread({}, component), {}, {
            onClick: this.handleTabChange
          })
        }),
        tabBody: /*#__PURE__*/_react.default.createElement(_Slot.default, {
          name: "docsTabs",
          active: activeTab,
          onlyActive: true,
          props: component
        })
      });
    }
  }]);
  return ReactComponent;
}(_react.Component);

exports.default = ReactComponent;
(0, _defineProperty2.default)(ReactComponent, "propTypes", {
  component: _propTypes.default.object.isRequired,
  depth: _propTypes.default.number.isRequired,
  exampleMode: _propTypes.default.string.isRequired,
  usageMode: _propTypes.default.string.isRequired
});
(0, _defineProperty2.default)(ReactComponent, "contextType", _Context.default);
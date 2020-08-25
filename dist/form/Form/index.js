"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _FormContext = _interopRequireDefault(require("../../internal/FormCommon/FormContext"));

var _Group = _interopRequireDefault(require("./Group"));

var _Row = _interopRequireDefault(require("./Row"));

/**
 * (Somewhat) self-explanatory form container
 * 
 * In addition to [native `<form>` attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#Attributes) and 
 * [React event handlers](https://reactjs.org/docs/events.html#supported-events), `<Form>` takes two optional boolean 
 * form display props:
 * * `isDiff` – Display the form fields as a Diff
 * * `isPrint` – Display the form fields for printing
 * 
 * ### Subcomponents
 * #### `<Form.Group>` (required)
 * Each section of a `<Form>` should be wrapped in a 
 * `<Form.Group>`. Typically, a `<Form.Group>` will contain 
 * a single form component. 
 * 
 * **Note** – A group of checkboxes or radios should be wrapped
 * in a `<FieldSet>` within a `<Form.Group>`
 * 
 * #### `<Form.Row>`
 * Wrap multiple `<Form.Group>` components in a `<Form.Row>` if
 * they use the [Bootstrap layout column classes](https://getbootstrap.com/docs/4.0/layout/grid/#responsive-classes)
 * 
 */
var Form = function Form(_ref) {
  var _ref$isDiff = _ref.isDiff,
      isDiff = _ref$isDiff === void 0 ? false : _ref$isDiff,
      _ref$isPrint = _ref.isPrint,
      isPrint = _ref$isPrint === void 0 ? false : _ref$isPrint,
      props = (0, _objectWithoutProperties2.default)(_ref, ["isDiff", "isPrint"]);
  return /*#__PURE__*/_react.default.createElement("form", props, /*#__PURE__*/_react.default.createElement(_FormContext.default.Provider, {
    value: {
      isDiff: isDiff,
      isPrint: isPrint
    }
  }, props.children));
};

Form.Group = _Group.default;
Form.Row = _Row.default;
var _default = Form;
exports.default = _default;
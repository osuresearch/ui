"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Context = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _types = require("../../internal/FormCommon/types");

var _useFieldBindOrProps2 = _interopRequireDefault(require("../../internal/FormCommon/hooks/useFieldBindOrProps"));

var _withFormContext = require("../../internal/FormCommon/HOC/withFormContext");

var _Components = require("../../internal/FormCommon/Components");

var _Input = _interopRequireDefault(require("./Input"));

var Context = /*#__PURE__*/_react.default.createContext({
  bind: new _types.NullFieldBind() // Add your other prop defaults here that should be made available to consumers
  // foo: 1

});
/**
 * Provides a date and (optional) time picker.
 * 
  * ### Subcomponents
 * 
 * #### `<DatePicker.Input>` (required)
 * * **Props**
 *  * `<DatePicker>` is a wrapper around [react-datepicker](https://reactdatepicker.com/). This component will accept *most* props supported by react-datepicker. See exceptions below this list
 *  * `defaultValue` – **must** be an ISO8601 timestamp string
 *  * `onChange` – Returns the date as an ISO8601 timestamp string
 *  * `showTimeInput` – Include a `<Time>` input field in the calendar popup
 *
 * * **Exceptions**
 *  * The following props are disabled due to not meeting accessibility standards:
 *      * `customTimeInput`, `timeInputLabel`, `disabledKeyboardNavigation`, `showMonthYearPicker`, `showMonthYearDropdown`, `monthsShown`, `withPortal`, `showQuarterYearPicker`, `showTimeSelect`, `showTimeSelectOnly`, `todayButton`, `showYearPicker`
 *  * `showMonthDropdown` and `showYearDropdown` MUST be used with `dropdownMode="select"` to meet accessibility requirements
 *  * If you wish to use one of these, please submit a merge request with a patch that resolves the issues.
 * 
 * 
 * #### `<DatePicker.Label>` (required)
 * Equivalent of `<label>`
 * 
 * * **Props**
 *  * [HTML Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
 * 
 * 
 * #### `<DatePicker.Help>`
 * Help text for the `<DatePicker>`
 * 
 * 
 * #### `<DatePicker.Error>` (required if `<DatePicker>` requires validation)
 * Provides instructions on how to resolve the validation error; 
 * will display when `error` is set in `<DatePicker>`
 * 
 * 
 * #### `<DatePicker.Success>`
 * Feedback for when the set meets the validation rules; will 
 * display when `success` is set in `<DatePicker>`
 * 
 */


exports.Context = Context;

var DatePicker = function DatePicker(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children"]);

  var _useFieldBindOrProps = (0, _useFieldBindOrProps2.default)(props),
      bind = _useFieldBindOrProps.bind;

  return /*#__PURE__*/_react.default.createElement(Context.Provider, {
    value: {
      bind: bind
      /* foo */

    }
  }, children);
};

DatePicker.Input = _Input.default;
DatePicker.Label = (0, _withFormContext.withFormContext)(_Components.Label, Context);
DatePicker.Help = (0, _withFormContext.withFormContext)(_Components.Help, Context);
DatePicker.Error = (0, _withFormContext.withFormContext)(_Components.Error, Context);
DatePicker.Success = (0, _withFormContext.withFormContext)(_Components.Success, Context);
var _default = DatePicker;
exports.default = _default;
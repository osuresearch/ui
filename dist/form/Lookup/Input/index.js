"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

var _Icon = _interopRequireDefault(require("../../../components/Icon"));

var _search = require("../../../search");

/**
 * Lookup input
 */
var Input = function Input(props) {
  var _useContext = (0, _react.useContext)(_.Context),
      bind = _useContext.bind,
      provider = _useContext.provider;

  var _useSearch = (0, _search.useSearch)(provider),
      terms = _useSearch.terms,
      searching = _useSearch.searching,
      error = _useSearch.error,
      results = _useSearch.results,
      setTerms = _useSearch.setTerms; // const value = bind.value || props.defaultValue || props.value;
  // const readOnly = bind.readOnly || props.readOnly;
  // const required = bind.required || props.required;
  // // TODO: Diff support
  // // if (readOnly) {
  // //     return <Print value={typeof (value) === 'string' ? value : ''} />
  // // }


  var classNames = "\n        form-control ".concat(props.className ? props.className : '', "\n        ").concat(bind.error && ' is-invalid', "\n        ").concat(bind.success && ' is-valid', "\n    ");
  var iconProps = {
    name: 'search',
    spin: false
  };

  if (searching) {
    iconProps = {
      name: 'spinner',
      spin: true
    };
  } else if (error) {
    iconProps = {
      name: 'exclamation-circle',
      spin: false
    };
  } // let inputProps: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> = {
  //     ref: ref,
  //     ...props,
  //     type: "text",
  //     id: bind.id,
  //     name: bind.name || props.name,
  //     defaultValue: value,
  //     className: classNames,
  //     'aria-describedby': `${bind.id}-help`,
  //     onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
  //         bind.value = e.currentTarget.value;
  //         if (props.onChange) props.onChange(e);
  //     },
  //     readOnly: readOnly,
  //     "aria-disabled": readOnly,
  //     "aria-required": required,
  //     "aria-invalid": bind.error ? true : false
  // }
  // // Assign a value to the input if it is controlled
  // if (bind.controlled) {
  //     inputProps.value = value
  // }
  // TODO: Flexible based on JSON Path.
  // Right now we assume it's always { hits: number, results: any[] }


  var totalHits = (results === null || results === void 0 ? void 0 : results.hits) || 0;
  var hits = (results === null || results === void 0 ? void 0 : results.results) || [];

  var _useState = (0, _react.useState)(props.defaultValue ? props.defaultValue : null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var hasHits = terms.length > 0 && hits.length > 0;
  var hasNoHits = terms.length > 0 && !searching && totalHits < 1;
  var hasMoreHits = terms.length > 0 && !searching && totalHits > hits.length;
  var showResultsPane = !value && (hasHits || hasNoHits || error !== undefined);

  var updateValue = function updateValue(newValue) {
    setValue(newValue);
    setTerms(''); // Notify the bind and trigger onChange of the parent Lookup.

    bind.value = newValue;
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group lookup-input"
  }, !value && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "input-group-prefix ".concat(error && 'text-danger')
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, iconProps)), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: bind.id,
    name: bind.name,
    className: classNames,
    onChange: function onChange(e) {
      setTerms(e.target.value);
    }
  })), value && /*#__PURE__*/_react.default.createElement("div", {
    className: "lookup-value"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "lookup-value-content"
  }, props.resultRenderer(value)), /*#__PURE__*/_react.default.createElement("button", {
    className: "lookup-value-clear",
    onClick: function onClick() {
      return updateValue(null);
    }
  }, "\xD7")), /*#__PURE__*/_react.default.createElement("div", {
    className: "lookup-results"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "TODO",
    className: "dropdown-menu",
    role: "listbox",
    style: {
      display: showResultsPane ? 'block' : 'none'
    },
    tabIndex: -1
  }, error && /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-header lookup-error"
  }, error), hits.map(function (hit, idx) {
    return /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      key: idx,
      onClick: function onClick() {
        return updateValue(hit);
      }
    }, props.resultRenderer(hit));
  }), hasNoHits && /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-header"
  }, "There are no hits. Try different search terms."), hasMoreHits && /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-header"
  }, "There are ", /*#__PURE__*/_react.default.createElement("strong", null, totalHits - hits.length), " additional hits. Refine your search terms."))));
};

var _default = Input;
exports.default = _default;
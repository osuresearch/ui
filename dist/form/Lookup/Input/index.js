"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var _findIndex = _interopRequireDefault(require("lodash/findIndex"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

var _search = require("../../../search");

var _InputGroup = _interopRequireDefault(require("./InputGroup"));

var _SearchValue = _interopRequireDefault(require("./SearchValue"));

var _Result = _interopRequireDefault(require("./Result"));

var _ResultMessages = _interopRequireDefault(require("./ResultMessages"));

/**
 * Lookup input
 * 
 * Based on W3C Combobox pattern: https://w3c.github.io/aria-practices/examples/combobox/grid-combo.html
 * 
 */
var Input = function Input(props) {
  var _useContext = (0, _react.useContext)(_.Context),
      bind = _useContext.bind,
      provider = _useContext.provider;

  var _useSearchProvider = (0, _search.useSearchProvider)(provider),
      terms = _useSearchProvider.terms,
      searching = _useSearchProvider.searching,
      error = _useSearchProvider.error,
      results = _useSearchProvider.results,
      setTerms = _useSearchProvider.setTerms;

  var classNames = "\n        form-control ".concat(props.className ? props.className : '', "\n        ").concat(bind.error && ' is-invalid', "\n        ").concat(bind.success && ' is-valid', "\n    "); // TODO: Flexible based on JSON Path.
  // Right now we assume it's always { hits: number, results: JsonObject[] }

  var typedResults = results ? results : undefined;
  var totalHits = (typedResults === null || typedResults === void 0 ? void 0 : typedResults.hits) || 0;
  var hits = (typedResults === null || typedResults === void 0 ? void 0 : typedResults.results) || [];

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1]; // Update the internal value state if the props change


  (0, _react.useEffect)(function () {
    setValue(props.value || props.defaultValue || null);
  }, [props]);
  var hasHits = terms.length > 0 && hits.length > 0;
  var hasNoHits = terms.length > 0 && !searching && totalHits < 1;
  var hasMoreHits = terms.length > 0 && !searching && totalHits > hits.length;

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      showResultsPane = _useState4[0],
      setShowResultsPane = _useState4[1];

  (0, _react.useEffect)(function () {
    setShowResultsPane(!value && (hasHits || hasNoHits || error !== undefined));
  }, [error, hasHits, hasNoHits, value]);
  var inputRef = (0, _react.useRef)(null);
  var resultsRef = (0, _react.useRef)(null);
  var valueRef = (0, _react.useRef)(null);
  var setTermsThrottled = (0, _react.useCallback)((0, _throttle.default)(function (terms) {
    return setTerms(terms);
  }, 750), [_throttle.default]);

  var updateValue = function updateValue(newValue) {
    setValue(newValue);
    setTerms('');

    if (props.onChange) {
      props.onChange(newValue);
    } // Blur gets fired at the same time as onChange due to the
    // input either existing or not existing once a change happens.


    if (props.onBlur) {
      props.onBlur();
    } // Notify the bind and trigger onChange of the parent Lookup.


    bind.value = newValue;
  };

  var _useState5 = (0, _react.useState)(undefined),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      activeDescendant = _useState6[0],
      setActiveDescendant = _useState6[1];

  var isActiveDescendant = function isActiveDescendant(idx) {
    return activeDescendant === "".concat(bind.id, "-result-").concat(idx);
  };

  var handleInputKeyDown = function handleInputKeyDown(e) {
    var _resultsRef$current;

    var results = (_resultsRef$current = resultsRef.current) === null || _resultsRef$current === void 0 ? void 0 : _resultsRef$current.querySelectorAll('.lookup-result');
    var activeDescendantIndex = results && activeDescendant ? (0, _findIndex.default)(results, {
      id: activeDescendant
    }) : undefined;

    if (e.key !== "ArrowUp" && e.key !== "ArrowDown") {
      // Clear activeDescendant
      setActiveDescendant(undefined);
    } // Down Arrow - If the listbox is displayed


    if (showResultsPane && e.key === "ArrowDown" && results) {
      // Prevent viewport from moving down
      e.preventDefault();

      if (typeof activeDescendantIndex !== "undefined" && typeof results[activeDescendantIndex + 1] !== "undefined") {
        // Move activeDescendant focus to next item
        setActiveDescendant(results[activeDescendantIndex + 1].id);
      } else {
        // Move activeDescendant focus to the first suggested value
        setActiveDescendant(results[0].id);
      }
    } // Up Arrow - If the listbox is displayed


    if (showResultsPane && e.key === "ArrowUp" && results) {
      // Prevent viewport from moving up
      e.preventDefault();

      if (typeof activeDescendantIndex !== "undefined" && typeof results[activeDescendantIndex - 1] !== "undefined") {
        // Move activeDescendant focus to previous item
        setActiveDescendant(results[activeDescendantIndex - 1].id);
      } else {
        // Move activeDescendant focus to the last suggested value
        setActiveDescendant(results[results.length - 1].id);
      }
    } // Escape


    if (e.key === "Escape") {
      if (showResultsPane) {
        // If the listbox is displayed, close it
        setShowResultsPane(false);
      } else if (inputRef.current) {
        // If the listbox is not displayed, clear the textbox
        inputRef.current.value = '';
        setTerms('');
      }
    } // Enter - Select the activeDescendant if one is defined


    if (showResultsPane && e.key === "Enter") {
      var _resultsRef$current2, _resultsRef$current2$;

      (_resultsRef$current2 = resultsRef.current) === null || _resultsRef$current2 === void 0 ? void 0 : (_resultsRef$current2$ = _resultsRef$current2.querySelector("#".concat(activeDescendant))) === null || _resultsRef$current2$ === void 0 ? void 0 : _resultsRef$current2$.click();
    }
  }; // Read only 
  // TODO - Diff support


  if (bind.readOnly) {
    return /*#__PURE__*/_react.default.createElement(_SearchValue.default, {
      bind: bind
    }, value ? props.resultRenderer(value) : /*#__PURE__*/_react.default.createElement("span", null));
  } // Edit


  return /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group lookup-input"
  }, !value && /*#__PURE__*/_react.default.createElement(_InputGroup.default, {
    ref: inputRef,
    error: error,
    searching: searching,
    bind: bind,
    onChange: function onChange(e) {
      setTermsThrottled(e.target.value);
    },
    onBlur: props.onBlur,
    onKeyDown: handleInputKeyDown,
    classNames: classNames,
    showResultsPane: showResultsPane,
    activeDescendant: activeDescendant
  }), /*#__PURE__*/_react.default.createElement(_SearchValue.default, {
    ref: valueRef,
    bind: bind,
    onClear: function onClear() {
      updateValue(null); // Focus in the search input onClear
      // Needs setTimeout for the effect to apply correctly in Safari

      setTimeout(function () {
        var _inputRef$current;

        return (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
      }, 100);
    }
  }, value && props.resultRenderer(value)), /*#__PURE__*/_react.default.createElement("div", {
    className: "lookup-results"
  }, /*#__PURE__*/_react.default.createElement("div", {
    tabIndex: -1,
    className: "dropdown-menu ".concat(showResultsPane ? 'd-block' : 'd-none')
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: resultsRef,
    "aria-labelledby": bind.id,
    role: "listbox",
    id: "".concat(bind.id, "-lookup-results")
  }, hits.map(function (hit, idx) {
    return /*#__PURE__*/_react.default.createElement(_Result.default, {
      id: "".concat(bind.id, "-result-").concat(idx),
      onClick: function onClick() {
        updateValue(hit); // Needs setTimeout for the effect to apply correctly in Safari

        setTimeout(function () {
          var _valueRef$current;

          return (_valueRef$current = valueRef.current) === null || _valueRef$current === void 0 ? void 0 : _valueRef$current.focus();
        }, 100);
      },
      isSelected: isActiveDescendant(idx)
    }, props.resultRenderer(hit));
  })), /*#__PURE__*/_react.default.createElement(_ResultMessages.default, {
    hits: hits,
    hasNoHits: hasNoHits,
    hasMoreHits: hasMoreHits,
    totalHits: totalHits,
    emptyRenderer: props.emptyRenderer,
    error: error
  }))));
};

var _default = Input;
exports.default = _default;
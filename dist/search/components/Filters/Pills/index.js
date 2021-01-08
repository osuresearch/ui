"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

var _2 = require("../../..");

var Pill = function Pill(_ref) {
  var label = _ref.label,
      onDelete = _ref.onDelete;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "filters-pill",
    onClick: onDelete,
    title: "Remove \"".concat(label, "\" filter")
  }, label, /*#__PURE__*/_react.default.createElement("span", {
    className: "filters-pill-delete"
  }, "\xD7"));
};

function isAnyOf(filter) {
  return typeof filter.anyOf !== 'undefined';
}

function isOR(filter) {
  return typeof filter.OR !== 'undefined';
}

function isAND(filter) {
  return typeof filter.AND !== 'undefined';
}

function isTerm(filter) {
  return typeof filter.term !== 'undefined';
}

function prettyLabel(filter) {
  var _filter$name;

  if (!filter.name) {
    return 'Unknown'; // TODO: ??
  } // If the name ends with a colon, also show the value


  if (((_filter$name = filter.name) === null || _filter$name === void 0 ? void 0 : _filter$name.indexOf(':')) >= 0) {
    if (isTerm(filter)) {
      var field = Object.keys(filter.term)[0];
      return "".concat(filter.name, " \"").concat(filter.term[field], "\"");
    } // TODO: Other supported types?

  }

  return filter.name;
}
/**
 * Pills that show all the active filters, with an option to clear each one.
 */


var Pills = function Pills() {
  var _useContext = (0, _react.useContext)(_.Context),
      terms = _useContext.terms,
      filters = _useContext.filters,
      setTerms = _useContext.setTerms,
      getFilter = _useContext.getFilter,
      addFilter = _useContext.addFilter,
      deleteFilter = _useContext.deleteFilter;

  var onDeleteNamedFilter = function onDeleteNamedFilter(name) {
    deleteFilter(name);
  };
  /**
   * Delete a single entry from within an AnyOf filter
   */


  var onDeleteAnyOfEntry = function onDeleteAnyOfEntry(name, entry) {
    var filter = getFilter(name);

    if (!filter) {
      return;
    }

    var field = Object.keys(filter.anyOf)[0];
    var values = filter.anyOf[field];
    var updated = []; // Any is used here because of a re-map issue to string|number arrays.

    for (var i = 0; i < values.length; i++) {
      if (values[i] !== entry) {
        updated.push(values[i]);
      }
    }

    if (updated.length < 1) {
      deleteFilter(name);
    } else {
      addFilter((0, _2.anyOf)(field, updated, name));
    }
  };
  /**
   * Delete a single record from within an OR filter
   */


  var onDeleteOREntry = function onDeleteOREntry(name, filterName) {
    var filter = getFilter(name);

    if (!filter) {
      return;
    }

    var updated = filter.OR.filter(function (f) {
      return f.name != filterName;
    });

    if (updated.length < 1) {
      deleteFilter(name);
    } else {
      addFilter((0, _2.OR)(updated, name));
    }
  };
  /**
   * Delete a single record from within an AND filter
   */


  var onDeleteANDEntry = function onDeleteANDEntry(name, filterName) {
    var filter = getFilter(name);

    if (!filter) {
      return;
    }

    var updated = filter.AND.filter(function (f) {
      return f.name != filterName;
    });

    if (updated.length < 1) {
      deleteFilter(name);
    } else {
      addFilter((0, _2.AND)(updated, name));
    }
  };

  if (terms.length < 1 && filters.length < 1) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "filters-pills"
  }, terms.length > 0 && /*#__PURE__*/_react.default.createElement(Pill, {
    label: "\"".concat(terms, "\""),
    onDelete: function onDelete() {
      return setTerms('');
    }
  }), filters.map(function (filter) {
    // AnyOf - add a pill for each entry
    if (filter.name && isAnyOf(filter)) {
      var field = Object.keys(filter.anyOf)[0];
      var values = filter.anyOf[field];
      return values.map(function (entry) {
        return /*#__PURE__*/_react.default.createElement(Pill, {
          label: entry,
          onDelete: function onDelete() {
            return onDeleteAnyOfEntry(filter.name, entry);
          }
        });
      });
    } // ORFilters - show each sub-filter as a (single) pill
    // Does not support recursive complex filters (e.g. spreading AnyOf sub-filters)


    if (filter.name && isOR(filter)) {
      return filter.OR.map(function (entry) {
        return /*#__PURE__*/_react.default.createElement(Pill, {
          label: prettyLabel(entry),
          onDelete: function onDelete() {
            return onDeleteOREntry(filter.name, entry.name);
          }
        });
      });
    } // ANDFilters - show each sub-filter as a (single) pill.
    // Does not support recursive complex filters (e.g. spreading AnyOf sub-filters)


    if (filter.name && isAND(filter)) {
      return filter.AND.map(function (entry) {
        return /*#__PURE__*/_react.default.createElement(Pill, {
          label: prettyLabel(entry),
          onDelete: function onDelete() {
            return onDeleteANDEntry(filter.name, entry.name);
          }
        });
      });
    } // All other types - add just a single pill


    if (filter.name) {
      return /*#__PURE__*/_react.default.createElement(Pill, {
        label: prettyLabel(filter),
        onDelete: function onDelete() {
          return onDeleteNamedFilter(filter.name);
        }
      });
    } // Unnamed filters are hidden


    return null;
  }));
};

var _default = Pills;
exports.default = _default;
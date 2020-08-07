"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _bytes = _interopRequireDefault(require("bytes"));

var _startCase = _interopRequireDefault(require("lodash/startCase"));

// @ts-ignore
// @ts-ignore
function formatAttribute(file, attribute) {
  switch (attribute) {
    case 'name':
      // Filenames are wrapped in links to download file
      return /*#__PURE__*/_react.default.createElement("th", {
        scope: "row",
        key: file.id + attribute
      }, /*#__PURE__*/_react.default.createElement("a", {
        href: file.link,
        target: "_blank",
        rel: "noopener noreferrer",
        "data-filetype": file.name.split('.').reverse()[0].toLowerCase()
      }, file.name));

    case 'modifiedDate':
      // Convert modifiedDate string to local date string
      return /*#__PURE__*/_react.default.createElement("td", {
        key: file.id + attribute
      }, new Date(file[attribute]).toLocaleDateString());

    case 'size':
      return /*#__PURE__*/_react.default.createElement("td", {
        key: file.id + attribute
      }, (0, _bytes.default)(file[attribute], {
        unitSeparator: ' '
      }));

    case 'section':
      return /*#__PURE__*/_react.default.createElement("td", {
        key: file.id + attribute
      }, file[attribute]);

    default:
      return '';
  }
}
/**
 *
 * This component displays files and directories from
 * a Document Management System (DMS) parent directory
 * (or other similar endpoint).
 * 
 * Optionally, it can be used as a file selector for forms.
 * 
 * To-do: Display selected files that were removed from DMS
 *
 */


var Files = function Files(_ref) {
  var directories = _ref.directories,
      dmsLink = _ref.dmsLink,
      showHeader = _ref.showHeader,
      selectedFiles = _ref.selectedFiles,
      onSelect = _ref.onSelect,
      readOnly = _ref.readOnly;

  // Form handling
  var _useState = (0, _react.useState)(selectedFiles),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var isChecked = function isChecked(fileid) {
    if (selected && (selected === null || selected === void 0 ? void 0 : selected.findIndex(function (file) {
      return file.id === fileid;
    })) !== -1) return true;
    return false;
  };

  var handleSelectionChange = function handleSelectionChange(e) {
    var file = JSON.parse(JSON.stringify(e.target.dataset));
    var selectedIndex = selected === null || selected === void 0 ? void 0 : selected.findIndex(function (attachment) {
      return attachment.id === file.id;
    });

    if (selectedIndex === -1
    /* not found */
    ) {
        // Add it to selected
        setSelected(function (prevSelected)
        /** forgive me... */
        {
          return [].concat((0, _toConsumableArray2.default)(prevSelected), [file]);
        });
      } else {
      // Remove it from selected
      setSelected(selected === null || selected === void 0 ? void 0 : selected.filter(function (ele, i) {
        return i !== selectedIndex;
      }));
    }
  };

  (0, _react.useEffect)(function () {
    if (typeof onSelect !== 'undefined' && typeof selected !== 'undefined') onSelect(selected);
  }, [onSelect, selected]);
  (0, _react.useEffect)(function () {
    // Account for possible delay in the creation of the selectedFiles array
    if ((selected === null || selected === void 0 ? void 0 : selected.length) === 0) setSelected(selectedFiles);
  }, [selectedFiles, selected]);
  /* Return a loader until directories/files are available */
  // To-do - replace this functionality with skeleton loader

  if (!directories) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "app-loader"
    }, /*#__PURE__*/_react.default.createElement("i", {
      className: "fa fa-spinner fa-spin"
    }), /*#__PURE__*/_react.default.createElement("p", {
      className: "app-loader-help"
    }, "Loading, please wait..."));
  }
  /* Return the files in tables */


  return /*#__PURE__*/_react.default.createElement("div", {
    className: "files"
  }, showHeader && /*#__PURE__*/_react.default.createElement("div", {
    className: "card-header main-header"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Files"), dmsLink &&
  /*#__PURE__*/
  // If DMS link exists
  _react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("a", {
    href: dmsLink,
    title: "Open in Document Management System",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Open in DMS"))), Object.keys(directories).map(function (directory) {
    return directories[directory].files.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
      className: "card",
      key: directories[directory].name
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "card-header text-dark"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "fa fa-folder-open-o mr-2",
      "aria-hidden": "true"
    }), /*#__PURE__*/_react.default.createElement("span", null, directories[directory].name), /*#__PURE__*/_react.default.createElement("span", {
      className: "float-right badge badge-pill badge-dark"
    }, directories[directory].files.length, /*#__PURE__*/_react.default.createElement("span", {
      className: "sr-only"
    }, " files in this folder"))), /*#__PURE__*/_react.default.createElement("table", {
      className: 'table table-hover cols-' +
      /* number of columns */
      directories[directory].files.length.toString()
    }, /*#__PURE__*/_react.default.createElement("caption", {
      className: "sr-only"
    }, "".concat(directories[directory].name, " Files")), /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, Object.keys(directories[directory].files[0]) // Filter out ID & link keys
    .filter(function (h) {
      return !['id', 'link'].includes(h);
    }) // Map the keys to THs and split instances of camelCase to startCase
    .map(function (heading) {
      return /*#__PURE__*/_react.default.createElement("th", {
        scope: "col",
        key: "".concat(directories[directory].name, "-").concat(heading)
      }, (0, _startCase.default)(heading));
    }), selectedFiles && /*#__PURE__*/_react.default.createElement("th", {
      scope: "col"
    }, "Include"))), /*#__PURE__*/_react.default.createElement("tbody", null, directories[directory].files.map(function (file) {
      return /*#__PURE__*/_react.default.createElement("tr", {
        key: file.id
      }, Object.keys(file) // Filter out id and link
      .filter(function (k) {
        return !['id', 'link'].includes(k);
      }) // Map/format the rest
      .map(function (attr) {
        return formatAttribute(file, attr);
      }), selectedFiles && /*#__PURE__*/_react.default.createElement("td", {
        className: "custom-control custom-checkbox"
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "checkbox",
        className: "m-0 custom-control-input",
        id: "select-file-".concat(file.id),
        "data-id": file.id,
        "data-name": file.name,
        "data-section": file === null || file === void 0 ? void 0 : file.section,
        "data-modified-date": file === null || file === void 0 ? void 0 : file.modifiedDate,
        "data-size": file === null || file === void 0 ? void 0 : file.size,
        "data-link": file.link,
        onChange: handleSelectionChange,
        checked: isChecked(file.id),
        readOnly: readOnly,
        disabled: readOnly
      }), /*#__PURE__*/_react.default.createElement("label", {
        className: "custom-control-label",
        htmlFor: "select-file-".concat(file.id)
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "sr-only"
      }, "Include this file"))));
    }))));
  }));
};

var _default = Files;
exports.default = _default;
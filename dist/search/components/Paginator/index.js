"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Paginator;

var _react = _interopRequireDefault(require("react"));

var _useSearchProvider = _interopRequireDefault(require("../../hooks/useSearchProvider"));

var _get = _interopRequireDefault(require("lodash/get"));

var _FirstPageButton = _interopRequireDefault(require("./FirstPageButton"));

var _PreviousPageButton = _interopRequireDefault(require("./PreviousPageButton"));

var _PageButton = _interopRequireDefault(require("./PageButton"));

var _NextPageButton = _interopRequireDefault(require("./NextPageButton"));

var _LastPageButton = _interopRequireDefault(require("./LastPageButton"));

var _CurrentStatus = _interopRequireDefault(require("./CurrentStatus"));

var _ResultsPerPage = _interopRequireDefault(require("./ResultsPerPage"));

function Paginator(_ref) {
  var provider = _ref.provider,
      _ref$justify = _ref.justify,
      justify = _ref$justify === void 0 ? 'center' : _ref$justify,
      _ref$pageLimit = _ref.pageLimit,
      pageLimit = _ref$pageLimit === void 0 ? 5 : _ref$pageLimit,
      _ref$hitsPath = _ref.hitsPath,
      hitsPath = _ref$hitsPath === void 0 ? 'results.hits' : _ref$hitsPath;
  var ctx = (0, _useSearchProvider.default)(provider);
  var hits = (0, _get.default)(ctx, hitsPath);
  var pageCount = hits ? Math.ceil(hits / ctx.limit) : 0;
  var pages = Array.from(Array(pageCount).keys());
  var currentPage = (ctx.offset + ctx.limit) / ctx.limit;
  /** 
   * Limit the display of pages when the number of pages
   * exceeds the maximum number allowed per the 
   * pageLimit property 
   */

  var displayPages = pages;

  if (pages.length > pageLimit) {
    var halfOfLimit = Math.ceil(pageLimit / 2);

    if (currentPage < halfOfLimit) {
      /** 
       * Until the current page is half of the page 
       * limit, display the pages from page 1 to 
       * the page limit 
       */
      displayPages = displayPages.slice(0, pageLimit);
    } else if (currentPage >= halfOfLimit && currentPage < pages.length - halfOfLimit) {
      /**
       * Once the current page reaches half of the 
       * page limit, display the page number in the
       * center of the paginator
       */
      displayPages = displayPages.slice(currentPage - halfOfLimit, pageLimit + (currentPage - halfOfLimit));
    } else {
      /**
       * Once the number of pages left equals the 
       * page limit, mirror the first condition
       */
      displayPages = displayPages.slice(pages.length - pageLimit, pages.length);
    }
  }

  var className = "search-paginator justify-content-".concat(justify);

  if (hits) {
    var _displayPages;

    return /*#__PURE__*/_react.default.createElement("div", {
      className: className
    }, /*#__PURE__*/_react.default.createElement("nav", {
      "aria-label": "Search results pages"
    }, /*#__PURE__*/_react.default.createElement("ul", {
      className: "pagination"
    }, /*#__PURE__*/_react.default.createElement(_FirstPageButton.default, {
      ctx: ctx
    }), /*#__PURE__*/_react.default.createElement(_PreviousPageButton.default, {
      ctx: ctx
    }), (_displayPages = displayPages) === null || _displayPages === void 0 ? void 0 : _displayPages.map(function (page) {
      return /*#__PURE__*/_react.default.createElement(_PageButton.default, {
        key: page,
        ctx: ctx,
        page: page
      });
    }), /*#__PURE__*/_react.default.createElement(_NextPageButton.default, {
      ctx: ctx,
      hits: hits
    }), /*#__PURE__*/_react.default.createElement(_LastPageButton.default, {
      ctx: ctx,
      hits: hits,
      pageCount: pageCount
    }))), /*#__PURE__*/_react.default.createElement(_CurrentStatus.default, {
      ctx: ctx,
      hits: hits
    }), /*#__PURE__*/_react.default.createElement(_ResultsPerPage.default, {
      provider: provider
    }));
  }

  return null;
}
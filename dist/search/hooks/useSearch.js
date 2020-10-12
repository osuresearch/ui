"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useSearch;

var _react = require("react");

var _SearchContext = require("../SearchContext");

/**
 * Primary hook for interfacing with a named search.
 * 
 * Allows multiple components to share common search data.
 * 
 * @author Chase McManning <mcmanning.1@osu.edu>
 */
function useSearch(provider) {
  var context = (0, _react.useContext)((0, _SearchContext.getDynamicContext)(provider)); // There used to be work here, it's gone now. This just 
  // makes it easier to provide the dynamic context without
  // letting other developers know about the inner workings
  // of retrieving a dynamic context (and so this can be
  // updated in the future without breaking apps, of course)

  return context;
}
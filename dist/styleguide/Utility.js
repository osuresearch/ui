"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormatSubcomponents = exports.WrapNameInBrackets = void 0;

/** Wraps a string in angle brackets */
var WrapNameInBrackets = function WrapNameInBrackets(name) {
  return name ? "<".concat(name, ">") : undefined;
};
/** Formats Styleguide subcomponents when they meet certain requirements */


exports.WrapNameInBrackets = WrapNameInBrackets;

var FormatSubcomponents = function FormatSubcomponents(sections) {
  sections.forEach(function (section) {
    if (section.hasSubcomponents) {
      var _section$components;

      (_section$components = section.components) === null || _section$components === void 0 ? void 0 : _section$components.forEach(function (component) {
        // @ts-ignore - TS doesn't understand that we're
        // using `this` in scope of the forEach `thisArg`
        var section = this; // Add a dot between the section name and the
        // component name

        component.visibleName = "".concat(section.name, ".").concat(component.name); // Wrap the visible name of the component in
        // angle brackets

        if (section.wrapNamesInBrackets) {
          component.visibleName = WrapNameInBrackets(component.visibleName);
        } // Remove the component's visible name if it 
        // matches the section name


        if (section.name === component.name) {
          component.visibleName = undefined;
        }
      }, section);
    }

    if (section.wrapNamesInBrackets) {
      section.visibleName = WrapNameInBrackets(section.name);
    } // Continue down the section tree


    if (section.sections) {
      FormatSubcomponents(section.sections);
    }
  });
};

exports.FormatSubcomponents = FormatSubcomponents;
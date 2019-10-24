"use strict";

// Apply default overrides to jQuery dependencies
if (window.$) {
  // Ensure addon icons trigger the sibling inputs.
  window.$(document).on('click', 'span.input-group-addon', function () {
    window.$(this).siblings('input').focus();
  }); // Apply global configuration changes to bootstrap-datepicker, if included

  if (window.$.fn.datepicker) {
    window.$.fn.datepicker.defaults.format = 'mm/dd/yyyy';
    window.$.fn.datepicker.defaults.maxViewMode = 2; // years

    window.$.fn.datepicker.defaults.orientation = 'bottom auto';
    window.$.fn.datepicker.defaults.autoclose = true;
  } // Apply global configuration changes to datatables, if included


  if (window.$.fn.dataTable) {
    window.$.extend(true, window.$.fn.dataTable.defaults, {
      dom: 't',
      paging: false,
      language: {
        // Override pagination buttons with the same style we use
        // for Bootstrap's pagination controls
        paginate: {
          previous: "\n                        <i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>\n                        <span class=\"sr-only\">Previous</span>\n                    ",
          next: "\n                        <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>\n                        <span class=\"sr-only\">Next</span>\n                    "
        }
      }
    });
  }
}
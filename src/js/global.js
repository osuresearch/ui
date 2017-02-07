/**
 * Global behaviors applied to ORIS UI components
 *
 * Be VERY careful when editing these. You do not want to
 * introduce new behavior that doesn't make sense for every
 * application that uses your components.
 */

// Apply global configuration changes to bootstrap-datepicker
$.fn.datepicker.defaults.format = 'mm/dd/yyyy';
$.fn.datepicker.defaults.maxViewMode = 2; // years
$.fn.datepicker.defaults.orientation = 'bottom auto';
$.fn.datepicker.defaults.autoclose = true;

// Binds to create as soon as jQuery is setup
$(function globalBinds() {
    // Ensure addon icons trigger the datepicker as well, as people
    // may be inclined to click the icon instead of the input.
    // Note this is done as a document bind so that datepickers
    // late loaded into the DOM are also bound.
    $(document).on(
        'click',
        'input[data-provide="datepicker"] + .input-group-addon',
        function clickHandler() {
            $(this).siblings('input').focus();
        }
    );
});

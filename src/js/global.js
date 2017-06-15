/**
 * Global behaviors applied to ORIS UI components
 *
 * Be VERY careful when editing these. You do not want to
 * introduce new behavior that doesn't make sense for every
 * application that uses your components.
 */

// Apply global configuration changes to bootstrap-datepicker
if ($.fn.datepicker) {
    $.fn.datepicker.defaults.format = 'mm/dd/yyyy';
    $.fn.datepicker.defaults.maxViewMode = 2; // years
    $.fn.datepicker.defaults.orientation = 'bottom auto';
    $.fn.datepicker.defaults.autoclose = true;
}

// Binds to create as soon as jQuery is setup
$(function globalBinds() {
    // Ensure addon icons trigger the sibling inputs.
    $(document).on(
        'click',
        'span.input-group-addon',
        function clickHandler() {
            $(this).siblings('input').focus();
        }
    );
});

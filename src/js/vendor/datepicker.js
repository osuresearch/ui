/**
 * Apply global configuration changes to bootstrap-datepicker
 */
$.fn.datepicker.defaults.format = 'mm/dd/yyyy';
$.fn.datepicker.defaults.maxViewMode = 2; // years
$.fn.datepicker.defaults.orientation = 'bottom auto';
$.fn.datepicker.defaults.autoclose = true;

// Ensure any addon UI components (usually an icon at the right) trigger
// the actual date input. Note that if you setup bootstrap-datepicker
// on your own without utilizing it's data-api, you'll need to bind
// this event yourself.
$(function() {

    // Note that we use document binding so late created components
    // through AJAX/PJAX will still be bound as well.
    $(document).on('click', 'input[data-provide="datepicker"] + .input-group-addon', function() {
        $(this).siblings('input').focus();
    });
});

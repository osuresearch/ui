/**
 * Global behaviors applied to ORIS UI components
 *
 * Be VERY careful when editing these. You do not want to
 * introduce new behavior that doesn't make sense for every
 * application that uses your components.
 */

/**
 * Compatibility testing against external vendor libraries.
 * This is primarily to prevent developers from accidentally
 * including a new oris/ui build against an old vendor script
 */
function checkCompatibility() {
    var bsver = $.fn['button'].Constructor.VERSION;
    var jqver = $.fn.jquery.split(' ')[0].split('.');

    if ((jqver[0] < 3 && jqver[1] < 2) || (jqver[0] >= 4)) {
        throw new Error('oris/ui requires at least jQuery 3.2 but less than 4.0');
    }

    if (bsver !== '4.0.0-beta') {
        throw new Error('oris/ui requires Bootstrap 4.0.0-beta');
    }
}

// Binds to create as soon as jQuery is setup
$(function () {
    checkCompatibility();

    // Ensure addon icons trigger the sibling inputs.
    $(document).on(
        'click',
        'span.input-group-addon',
        function () {
            $(this).siblings('input').focus();
        }
    );

    // Apply global configuration changes to bootstrap-datepicker, if included
    if ($.fn.datepicker) {
        $.fn.datepicker.defaults.format = 'mm/dd/yyyy';
        $.fn.datepicker.defaults.maxViewMode = 2; // years
        $.fn.datepicker.defaults.orientation = 'bottom auto';
        $.fn.datepicker.defaults.autoclose = true;
    }
});

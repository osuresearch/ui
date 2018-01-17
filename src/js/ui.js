
// Polyfill for IE11 support
import 'node_modules/babel-polyfill/dist/polyfill';

// Polyfill for `position: sticky` support
import './vendor/fixedsticky-0.1.7';

import Lookup from './components/lookup';
import Uploader from './components/uploader';
import Emulate from './components/emulate';
import Support from './components/support';

import './components/alert';
import './components/alert-banner';
import './components/sticky-header';

(($) => {
    const bsver = $.fn.button.Constructor.VERSION;
    const jqver = $.fn.jquery.split(' ')[0].split('.');

    if ((jqver[0] < 3 && jqver[1] < 2) || (jqver[0] >= 4)) {
        throw new Error('oris/ui requires at least jQuery 3.2 but less than 4.0');
    }

    if (bsver !== '4.0.0-beta.2') {
        throw new Error('oris/ui requires Bootstrap 4.0.0-beta.2');
    }

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
})($);

export {
    Lookup,
    Uploader,
    Emulate,
    Support
};

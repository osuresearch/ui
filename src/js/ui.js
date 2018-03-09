
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

    // Make sure the developer included a compatible build of Bootstrap
    if (bsver !== '4.0.0') {
        throw new Error('oris/ui requires Bootstrap 4.0.0 release');
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

    // Apply global configuration changes to datatables, if included
    if ($.fn.dataTable) {
        $.extend(true, $.fn.dataTable.defaults, {
            dom: 't',
            paging: false,
            language: {
                // Override pagination buttons with the same style we use
                // for Bootstrap's pagination controls
                paginate: {
                    previous: `
                        <i class="fa fa-chevron-left" aria-hidden="true"></i>
                        <span class="sr-only">Previous</span>
                    `,
                    next: `
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        <span class="sr-only">Next</span>
                    `
                }
            }
        });
    }
})($);

export {
    Lookup,
    Uploader,
    Emulate,
    Support
};

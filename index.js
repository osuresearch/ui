
// Components
import AppAlert from './src/component/AppAlert';
import Badge from './src/component/Badge';
import Button from './src/component/Button';
import ExternalLink from './src/component/ExternalLink';
import Footer from './src/component/Footer';
import Icon from './src/component/Icon';
import Navbar from './src/component/Navbar';
import OhioStateNavbar from './src/component/OhioStateNavbar';
import Profile from './src/component/Profile';
import Search from './src/component/Search';
import SearchResult from './src/component/SearchResult';

// Experimental
import AppSearch from './src/experimental/AppSearch';
import TabList from './src/experimental/TabList';
import TabItem from './src/experimental/TabItem';

// Apply default overrides to jQuery dependencies
if (window.$) {
    // TODO: Move these funky overrides somewhere

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
}

// Export it all so implementers have a single entry point (if they so choose)
export {
    // Components
    AppAlert,
    Badge,
    Button,
    ExternalLink,
    Footer,
    Icon,
    Navbar,
    OhioStateNavbar,
    Profile,
    Search,
    SearchResult,

    // Experimental
    AppSearch,
    TabList,
    TabItem,
};

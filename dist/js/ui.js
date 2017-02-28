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
    // Ensure addon icons trigger the sibling inputs.
    $(document).on(
        'click',
        'span.input-group-addon',
        function clickHandler() {
            $(this).siblings('input').focus();
        }
    );
});

/**
 * Enhanced Inputs
 *
 * Adds a length counter widget to inputs (textareas, input type="text")
 *
 * Usage:
 *
 *  $('textarea').EnhancedInput();
 *
 * Also accepts Bootstrap-style data attributes:
 *  data-provide="enhanced-input" to enable on an input
 *
 */
(function enhancedInputPlugin($) {
    var NAME = 'EnhancedInput';
    var VERSION = '1.0.0';

    var DATA_API_EVENT = 'click.' + NAME + '.data-api';
    var PROVIDER = '[data-provide="enhanced-input"]';

    // Events on the input/textarea that will update the counter
    var INPUT_EVENTS = 'keyup keydown focus input paste';

    var DEFAULTS = {
        // Not applicable
    };

    var Plugin = function Plugin(element, options) {
        this.o = options;
        this.element = $(element);

        // Make sure there's a maxlength (required attr)
        if (!this.element.attr('maxlength')) {
            $.error(
                'You must specify maxlength for inputs using $.EnhancedInput'
            );
        }

        this.setupDOM();
        this.attachEvents();

        // Setup initial count
        this.update();
    };

    Plugin.prototype = {
        constructor: Plugin,

        attachEvents: function attachEvents() {
            this.element.on(INPUT_EVENTS, $.proxy(this.update, this));
        },

        setupDOM: function setupDOM() {
            // Add the counter to the DOM
            this.counter = $('<div class="enhanced-input-counter"/>');
            this.element.after(this.counter);
        },

        update: function update() {
            // Update textarea counter to reflect number of changes.
            // Note that Chrome counts \r\n as 1 character in JS, but
            // two when dealing with textarea[maxlength]. So we need
            // to do some math changes to get this to count properly.
            var length = this.element.val().replace(
                /\r(?!\n)|\n(?!\r)/g,
                '\r\n'
            ).length;

            this.counter.html(
                length + '/' +
                this.element.attr('maxlength')
            );
        }
    };

    // //////////////////////////
    // jQuery Plugin Interface
    // //////////////////////////
    $.fn[NAME] = function wrapper(option) {
        var args = Array.apply(null, arguments);
        var ret;

        args.shift();

        this.each(function iterator() {
            var $this = $(this);
            var data = $this.data(NAME);
            var options = typeof option === 'object' && option;
            var opts;

            if (!data) {
                // Options priority: js args, data-api, defaults
                opts = $.extend({}, DEFAULTS, $this.data(), options);

                data = new Plugin(this, opts);
                $this.data(NAME, data);
                ret = data;
            }

            if (typeof option === 'string' && typeof data[option] === 'function') {
                ret = data[option].apply(data, args);
            }
        });

        if (ret === undefined || ret instanceof Plugin) {
            return this;
        }

        return ret;
    };

    $.fn[NAME].defaults = DEFAULTS;
    $.fn[NAME].Constructor = Plugin;
    $.fn[NAME].version = VERSION;

    // Fire off construction of any lookups using data-api immediately
    $(document).on(
        DATA_API_EVENT,
        PROVIDER,
        function handler(e) {
            var $this = $(this);
            if ($this.data(NAME)) {
                return;
            }

            e.preventDefault();
            $.fn[NAME].call($this, {});
        });
}(jQuery));

/**
 * Simple ass AJAX lookup
 *
 * Compatible with Bootstrap 4.0.0a4
 *
 * Usage:
 *
 *  $('.form-lookup').Lookup({
 *      url: 'source url'
 *  });
 *
 * Also accepts Bootstrap-style data attributes:
 *  data-provide="lookup" to enable on an input
 *  data-url="https://..." to bind a url
 *  ... etc
 *
 * Note that this expects the backend to conform to JSON-API spec.
 *
 * Upstream query will be:
 *      GET {url}?q={term}
 *      Accept: application/vnd.api+json
 *
 * Downstream responses expect to be formatted as:
 *      200 OK
 *      Content-Type: application/vnd.api+json
 *      {
 *           "meta": {
 *               "total": 55
 *           },
 *           "data": [
 *               {
 *                   "type": "person",
 *                   "id": "200275154",
 *                   "attributes": {
 *                       "name": "McManning, Chase"
 *                   }
 *               }
 *           ]
 *       }
 *
 * It can also supply an access token to the ORIS API through the
 * `token` parameter. Just make sure your token has the correct
 * permissions before attempting to perform lookup against an endpoint.
 *
 * Additional Notes:
 * - Response can be application/json for non-API endpoints
 * - Some API endpoints may support filter[] parameters.
 *   Check the API documentation for more information.
 */
(function lookupPlugin($) {
    var NAME = 'Lookup';
    var VERSION = '1.0.0';

    var DATA_API_EVENT = 'click.' + NAME + '.data-api';
    var PROVIDER = '[data-provide="lookup"]';

    var DEFAULTS = {
        url: null,                      // Endpoint URL to request AJAX data from

        display: 'attributes.name',     // AJAX object attribute to display in the input upon select

        store: 'id',                    // AJAX object attribute to submit alongside the form.
                                        // If null, whatever is in the lookup input will be
                                        // submitted with the form.

        threshold: 3,                   // Minimum characters required before a search is started

        readonly: true,                 // Whether to go readonly once something is selected

        token: null                     // ORIS-API bearer token, if known.
    };

    var Plugin = function Plugin(element, options) {
        this.o = options;
        this.element = $(element);

        this.setupDOM();
        this.attachEvents();
    };

    Plugin.prototype = {
        constructor: Plugin,

        attachEvents: function attachEvents() {
            this.element.on('keyup', $.proxy(this.change, this));
            this.results.on('click', 'a', $.proxy(this.select, this));
            this.addon.on('click', $.proxy(this.clear, this));
        },

        setupDOM: function setupDOM() {
            var $parent = this.element.parent();

            // Setup a hidden input for storing selection data
            if (this.o.store) {
                this.store = $(
                    '<input type="hidden" name="' +
                    this.element.attr('name') + '">'
                );

                this.element.attr('name', '');
                $parent.after(this.store);
            }

            this.addon = this.element.siblings('.input-group-addon');

            if (this.addon.length < 1) {
                $.error(
                    'Could not locate sibling .input-group-addon to search input'
                );
            }

            this.results = $('<div class="list-group lookup-results"/>');
            $parent.after(this.results);
            this.results.hide();
        },

        change: function change() {
            var term;

            // Ignore change events if we're readonly
            if (this.element.is('[readonly]')) {
                return;
            }

            term = this.element.val();
            if (term.length >= this.o.threshold) {
                this.search(term);
            } else {
                this.results.html('');
            }
        },

        select: function select(e) {
            var json = $(e.target).data('json');

            this.element.val(this.resolvePath(this.o.display, json));
            this.results.html('').hide();

            this.element.focus();

            // Readonly mode enabled? Disable the input
            if (this.o.readonly) {
                this.element.attr('readonly', 'readonly');
                this.addon.html(
                    '<i class="fa fa-close" aria-hidden="true"></i>'
                );
            }

            // Store key in hidden input, if we choose to do so
            if (this.o.store) {
                this.store.val(this.resolvePath(this.o.store, json));
            }

            this.element.trigger('select.' + NAME, [json]);

            e.preventDefault();
            return false;
        },

        clear: function clear(e) {
            this.results.html('').hide();
            this.element.val('');
            this.element.focus();

            if (this.o.readonly) {
                this.element.removeAttr('readonly');
                this.addon.html(
                    '<i class="fa fa-search" aria-hidden="true"></i>'
                );
            }

            if (this.o.store) {
                this.store.val('');
            }

            this.element.trigger('clear.' + NAME);

            if (e) {
                e.preventDefault();
            }

            return false;
        },

        search: function search(term) {
            var that = this;
            var headers = {};

            this.addon.html(
                '<i class="fa fa-spinner fa-spin" aria-hidden="true"></i>'
            );

            // Cancel requests if new one comes in
            if (typeof this.request !== 'undefined') {
                this.abort = true;
                this.request.abort();
            } else {
                this.abort = false;
            }

            // If we have an OAuth bearer token, add it as an auth header
            if (this.o.token) {
                headers.Authorization = 'Bearer ' + this.o.token;
            }

            this.request = $.ajax({
                url: this.o.url,
                type: 'GET',
                data: 'q=' + term,
                dataType: 'json',
                headers: headers
            }).done(function (data) {
                that.displayResults(data);
            }).fail(function () {
                if (!that.abort) {
                    that.error();
                }
            });
        },

        displayResults: function displayResults(json) {
            var i;

            this.results.html('');

            this.addon.html(
                '<i class="fa fa-search" aria-hidden="true"></i>'
            );

            for (i = 0; i < json.data.length; i++) {
                this.results.append(
                    $('<a href="#" class="list-group-item list-group-action">' +
                        this.resolvePath(this.o.display, json.data[i]) +
                        '</a>'
                    ).data('json', json.data[i])
                );
            }

            if (json.meta && (json.meta.total - json.data.length) > 0) {
                this.results.append(
                    '<div class="lookup-total">There are <strong>' +
                    (json.meta.total - json.data.length) +
                    '</strong> additional results. Please narrow your search</div>'
                );
            } else if (json.meta && json.meta.total === 0) {
                this.results.append(
                    '<div class="lookup-total">There are no matching results.</div>'
                );
            }

            this.results.show();
        },

        error: function error() {
            this.results.html(
                '<div class="list-group-item">' +
                    '<span class="text-danger">' +
                        'Something went wrong. If the problem persists, ' +
                        'contact <a href="mailto:orhelp@osu.edu">orhelp@osu.edu</a>' +
                    '</span>' +
                '</div>'
            );
        },

        /**
         * Utility function to resolve dot notation paths to JSON records.
         *
         * Source: http://stackoverflow.com/a/6394168
         *
         * @param {string} path period separated JSON path
         * @param {object} obj JSON object to parse
         *
         * @returns {object} data within the JSON path
         */
        resolvePath: function resolvePath(path, obj) {
            return path.split('.').reduce(function reduce(o, i) {
                return o[i];
            }, obj);
        }
    };

    // //////////////////////////
    // jQuery Plugin Interface
    // //////////////////////////
    $.fn[NAME] = function wrapper(option) {
        var args = Array.apply(null, arguments);
        var ret;

        args.shift();

        this.each(function iterator() {
            var $this = $(this);
            var data = $this.data(NAME);
            var options = typeof option === 'object' && option;
            var opts;

            if (!data) {
                // Options priority: js args, data-api, defaults
                opts = $.extend({}, DEFAULTS, $this.data(), options);

                data = new Plugin(this, opts);
                $this.data(NAME, data);
                ret = data;
            }

            if (typeof option === 'string' && typeof data[option] === 'function') {
                ret = data[option].apply(data, args);
            }
        });

        if (ret === undefined || ret instanceof Plugin) {
            return this;
        }

        return ret;
    };

    $.fn[NAME].defaults = DEFAULTS;
    $.fn[NAME].Constructor = Plugin;
    $.fn[NAME].version = VERSION;

    // Fire off construction of any lookups using data-api immediately
    $(document).on(
        DATA_API_EVENT,
        PROVIDER,
        function handler(e) {
            var $this = $(this);
            if ($this.data(NAME)) {
                return;
            }

            e.preventDefault();
            $.fn[NAME].call($this, {});
        });
}(jQuery));

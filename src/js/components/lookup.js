/**
 * AJAX Lookup component
 *
 * Compatible with Bootstrap 4.0.0-beta
 *
 * Features:
 *  - Bootstrap-style Javascript-free configuration via data- attributes
 *  - support for JSON-API responses by default
 *  - customizable renderer for search results
 *  - setting of a hidden input to a value different than displayed in results
 *      (use case of displaying usernames while POSTing the user's ID instead)
 *  - throttling rules to reduce HTTP requests while still appearing responsive
 *  - accessibilty support for keyboard navigation
 *
 * Usage:
 *
 *  $('input.form-lookup').Lookup({
 *      endpoint: 'https://path.to/ajax/source'
 *  });
 *
 * Also accepts Bootstrap-style data attributes:
 *  data-provide="lookup" to enable on an input
 *  data-endpoint="https://..." to bind a url
 *  ... etc
 *
 * Note that this expects the backend to conform to JSON-API spec by default.
 * For advanced configuration of loading a different endpoint, see documented
 * settings below.
 *
 * The default expected endpoint format is as follows:
 *
 * Upstream query will be formatted as:
 *      GET {url}?q={term}&{query}
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
 * - 'meta.total' is optional in the response. If provided, an additional
 *   footer will be rendered in results to inform the user that there are
 *   additional results.
 */
(function ($) {
    var NAME = 'Lookup';
    var VERSION = '2.0.0';

    var DATA_API_EVENT = 'click.' + NAME + '.data-api';
    var PROVIDER = '[data-provide="lookup"]';

    var DEFAULTS = {
        endpoint: null,                     // Endpoint URL to request JSON data from.
                                            // If this is a string, an AJAX GET request will be
                                            // issued to it. If it is a function, that function
                                            // will be executed with (term, query) as parameters
                                            // and it is expected to return JSON data.

        token: null,                        // OAuth2 bearer token, if known.

        query: {},                          // Additional query parameters passed to the endpoint
                                            // as key-value pairs.

        readonly: true,                     // Whether to go readonly once something is selected

        display: 'attributes.name',         // JSON object attribute to display in the input upon
                                            // select. If display is a function, that function will
                                            // be called with the selected JSON object and must
                                            // return a string to insert into the input.

        optionDisplay: 'attributes.name',   // JSON object attribute to display in the results
                                            // dropdown for each result available to the user. If
                                            // this is a function, that function will be called
                                            // with the selected JSON object and must return HTML
                                            // to insert into the dropdown list item.

        store: 'id',                        // JSON object attribute to submit alongside the form.
                                            // If this is a function, that function will be called
                                            // with the selected JSON object and must return a
                                            // string to be submitted alongside the form.
                                            // If null, whatever is in the lookup input will be
                                            // submitted with the form. Note that if this is set,
                                            // the text in the lookup will *not* be submitted with
                                            // the form.

        language: {
            error: 'Something went wrong. Try reloading the page. If the problem persists, ' +
                   'contact <a href="mailto:orhelpdesk@osu.edu">orhelpdesk@osu.edu</a>'
        },

        // HTTP throttling configurations. These are adjusted to
        // improve the "feel" of responsiveness while minimizing
        // the amount of HTTP requests to the endpoint
        throttle: {
            threshold: 3,                   // Minimum characters required before searching

            termDelta: 5,                   // Delta of search term change required before we
                                            // fire off another HTTP request. This helps throttle
                                            // our requests for fast typers while keeping the
                                            // results as responsive as possible

            delay: 500                      // Delay between the last input event and the next
                                            // firing of the HTTP search request. This is applied
                                            // when a user inputs text that isn't long enough
                                            // to pass termDelta, but the stopped typing implies
                                            // that they are waiting for a result response
        }
    };

    var Plugin = function (element, options) {
        this.o = options;
        this.element = $(element);
        this.term = '';
        this.request = null;
        this.storedTermDelta = 0;

        this.setupDOM();
        this.attachEvents();
    };

    Plugin.prototype = {
        constructor: Plugin,

        /**
         * Attach event handlers to buttons and result links
         */
        attachEvents: function () {
            this.element.on('keyup', this.change.bind(this));
            this.results.on('click', 'a', this.select.bind(this));
            this.clearButton.on('click', this.clear.bind(this));
        },

        /**
         * Store the current DOM and create new DOM elements for the
         * search results and hidden input (if `store` is set)
         */
        setupDOM: function () {
            var $parent = this.element.parent();
            var nonce = Date.now();

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
            this.clearButton = $parent.find('button.lookup-clear');

            if (this.addon.length < 1) {
                $.error(
                    'Could not locate sibling .input-group-addon to search input'
                );
            }

            this.results = $(
                '<div id="results-' + nonce + '" class="dropdown-menu" ' +
                'role="listbox"/>'
            ).hide();

            $parent.append(this.results);

            this.element.addClass('lookup');

            // Accessibility adjustments
            this.element.attr('aria-owns', 'results-' + nonce);
        },

        /**
         * Execute an AJAX request when the input changes
         *
         * Changes occur from paste events, clears, and general typing.
         * This will also handle throttling to ensure that fast typers
         * are not sending unnecessary HTTP requests, and that slow typers
         * are still getting results in a timely manner.
         */
        change: function () {
            var term = this.element.val();

            if (this.changeTimeoutHandle) {
                window.clearTimeout(this.changeTimeoutHandle);
            }

            this.changeTimeoutHandle = window.setTimeout(
                this.changeTimeout.bind(this),
                this.o.throttle.delay
            );

            // Ignore change events if we're readonly
            // or haven't actually changed the input
            if (term === this.term || this.element.is('[readonly]')) {
                return;
            }

            // If there's too little in the search box,
            // we hide the results and wait.
            if (term.length < this.o.throttle.threshold) {
                this.results.html('').hide();
                this.term = term;
                return;
            }

            // If delta term + stored delta term (last change) is
            // smaller than the delta threshold, we wait.
            this.storedTermDelta += Math.abs(this.term.length - term.length);
            if (this.storedTermDelta < this.o.throttle.termDelta) {
                return;
            }

            // Even if term delta passes, throttle requests to a time delay
            // if (this.lastChange + this.o.throttle.delay > Date.now()) {
            //     return;
            // }

            // this.lastChange = Date.now();

            this.search(term);
        },

        /**
         * Callback for when the user stops typing.
         *
         * Executes a search if the input is different than our last search.
         */
        changeTimeout: function () {
            var term = this.element.val();

            if (term === this.term || this.element.is('[readonly]')) {
                return;
            }

            // If there's too little in the search box,
            // we hide the results and wait.
            if (term.length < this.o.throttle.threshold) {
                this.results.html('').hide();
                this.term = term;
                return;
            }

            this.changeTimeoutHandle = false;
            this.search(term);
        },

        /**
         * Event handler to select a result from the results dropdown
         *
         * @param {Event} e click event on a result
         *
         * @return {boolean} false
         */
        select: function (e) {
            var $item = $(e.target).closest('.dropdown-item');
            var json = $item.data('json');

            this.element.val(this.resolve(this.o.display, json));
            this.results.html('').hide();

            this.element.focus();

            // Readonly mode enabled? Disable the input
            if (this.o.readonly) {
                this.element.attr('readonly', 'readonly');
                this.addon.html(
                    '<i class="fa fa-check" aria-hidden="true"></i>'
                );
                this.clearButton.show();
            }

            // Store key in hidden input, if we choose to do so
            if (this.o.store) {
                this.store.val(this.resolve(this.o.store, json));
            }

            this.element.trigger('pick.lookup', [json]);

            return false;
        },

        /**
         * Clear the current search results and input
         *
         * If the input is in a readonly state, it'll become editable again.
         *
         * @return {boolean} false
         */
        clear: function () {
            this.results.html('').hide();
            this.clearButton.hide();
            this.element.val('');
            this.element.focus();
            this.term = '';

            if (this.o.readonly) {
                this.element.removeAttr('readonly');
                this.addon.html(
                    '<i class="fa fa-search" aria-hidden="true"></i>'
                );
            }

            if (this.o.store) {
                this.store.val('');
            }

            this.element.trigger('clear.lookup');

            return false;
        },

        /**
         * Execute AJAX search
         *
         * @param {string} term search term to send
         */
        search: function (term) {
            var that = this;
            var headers = {};
            var query = {};

            this.term = term;

            // Reset term delta throttling
            this.storedTermDelta = 0;

            this.addon.html(
                '<i class="fa fa-spinner fa-spin" aria-hidden="true"></i>'
            );

            // Cancel requests if new one comes in
            if (this.request) {
                this.abort = true;
                this.request.abort();
            } else {
                this.abort = false;
            }

            // If we have an OAuth bearer token, add it as an auth header
            if (this.o.token) {
                headers.Authorization = 'Bearer ' + this.o.token;
            }

            $.extend(query, this.o.query, {
                q: term
            });

            if (typeof this.o.url === 'function') {
                this.displayResults(this.o.url(term, query));
            } else {
                this.request = $.ajax({
                    url: this.o.endpoint,
                    type: 'GET',
                    data: query,
                    dataType: 'json',
                    headers: headers
                }).done(function (data) {
                    that.request = null;
                    that.displayResults(data);
                }).fail(function () {
                    if (!that.abort) {
                        that.request = null;
                        that.error();
                    }
                });
            }
        },

        /**
         * Parse the JSON results and display as a dropdown list
         */
        displayResults: function (json) {
            var i;

            this.json = json;
            this.results.html('');

            this.addon.html(
                '<i class="fa fa-search" aria-hidden="true"></i>'
            );

            for (i = 0; i < json.data.length; i++) {
                this.results.append(
                    $('<a class="dropdown-item" href="#">' +
                        this.resolve(this.o.optionDisplay, json.data[i]) +
                        '</a>'
                    ).data('json', json.data[i])
                );
            }

            if (json.meta && (json.meta.total - json.data.length) > 0) {
                this.results.append(
                    '<div class="dropdown-header">There are <strong>' +
                    (json.meta.total - json.data.length) +
                    '</strong> additional results. Please narrow your search</div>'
                );
            } else if (json.data.length === 0) {
                this.results.append(
                    '<div class="dropdown-header">There are no matching results.</div>'
                );
            }

            this.results.show();
        },

        /**
         * Activate an error state on AJAX failures (e.g. network issues)
         */
        error: function () {
            this.results.html(
                '<div class="dropdown-header">' +
                    '<span class="lookup-error text-danger">' +
                        this.o.language.error +
                    '</span>' +
                '</div>'
            ).show();

            // Turn spinner to an error icon
            this.addon.html(
                '<i class="fa fa-exclamation-circle text-danger" aria-hidden="true"></i>'
            );
        },

        /**
         * Utility function to either resolve a dot notation JSON path or a callback
         *
         * @param {string|function} path    period separated JSON path or resolver function
         * @param {object}          obj     JSON object to parse
         *
         * @returns {object} data within the JSON path or resolver function
         */
        resolve: function (path, obj) {
            if (typeof path === 'function') {
                return path(obj, this.json);
            }

            return path.split('.').reduce(function (o, i) {
                return o[i];
            }, obj);
        }
    };

    // //////////////////////////
    // jQuery Plugin Interface
    // //////////////////////////
    $.fn[NAME] = function (option) {
        var args = Array.apply(null, arguments);
        var ret;

        args.shift();

        this.each(function () {
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

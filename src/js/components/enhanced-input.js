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
            var length = this.element.val().length;

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

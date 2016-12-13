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
;(function ($) {
    var PLUGIN_NAME = 'enhanced-input';
    var VERSION = '1.0.0';

    // Events on the input/textarea that will update the counter
    var INPUT_EVENTS = 'keyup keydown focus input paste';

    var DEFAULTS = {
        // Not applicable
    };

    var EnhancedInput = function(element, options) {
        $.data(element, PLUGIN_NAME, this);

        this.o = options;
        this.element = $(element);

        // Make sure there's a maxlength (required attr)
        if (!this.element.attr('maxlength')) {
            $.error(
                'You must specify maxlength for inputs using $.EnhancedInput'
            );
        }

        this._setupDOM();
        this._attachEvents();

        // Setup initial count
        this._change();
    };

    EnhancedInput.prototype = {
        constructor: EnhancedInput,

        _attachEvents: function() {
            this.element.on(INPUT_EVENTS, $.proxy(this._change, this));
        },

        _setupDOM: function() {

            // Add the counter to the DOM
            this.counter = $('<div class="enhanced-input-counter"/>');
            this.element.after(this.counter);
        },

        _change: function() {

            // Update textarea counter to reflect number of changes.
            // Note that Chrome counts \r\n as 1 character in JS, but
            // two when dealing with textarea[maxlength]. So we need
            // to do some math changes to get this to count properly.
            var length = this.element.val().replace(
                /\r(?!\n)|\n(?!\r)/g, 
                "\r\n"
            ).length;

            this.counter.html(
                length + '/' + 
                this.element.attr('maxlength')
            );
        }
    };

    ////////////////////////////
    // jQuery Plugin Interface
    ////////////////////////////

    var plugin = function(option) {
        var args = Array.apply(null, arguments);
        args.shift();

        var ret;
        this.each(function () {
            var $this = $(this),
                data = $this.data(PLUGIN_NAME),
                options = typeof option === 'object' && option;

            if (!data) {
                // Options priority: js args, data-api, defaults
                var opts = $.extend({}, DEFAULTS, $this.data(), options);

                data = new EnhancedInput(this, opts);
                $this.data('', data);
                ret = data;
            }

            if (typeof option === 'string' && typeof data[option] === 'function') {
                ret = data[option].apply(data, args);
            }
        });

        if (ret === undefined || ret instanceof EnhancedInput) {
            return this;
        }

        return ret;
    };

    $.fn[PLUGIN_NAME] = plugin;
    $.fn[PLUGIN_NAME].defaults = DEFAULTS;
    $.fn[PLUGIN_NAME].Constructor = EnhancedInput;
    $.fn[PLUGIN_NAME].version = VERSION;

    // Fire off construction of any lookups using data-api immediately
    $(document).on(
        'click.'+PLUGIN_NAME+'.data-api',
        '[data-provide="'+PLUGIN_NAME+'"]',
        function (e) {
            var $this = $(this);
            if ($this.data(PLUGIN_NAME)) {
                return;
            }

            e.preventDefault();
            plugin.call($this, {});
        });

}( jQuery ));

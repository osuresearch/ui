
class Component {
    constructor(element, options) {
        this.el = element;
        this.o = options;

        // Mandatory class name for the DOM component
        this.el.addClass(this.constructor.CLASSNAME);
    }

    static get VERSION() {
        throw new Error(
            'Components inherited from `Component` must override `static get VERSION`'
        );
    }

    static get DEFAULTS() {
        return {};
    }

    static get CLASSNAME() {
        return this.name.replace(/([A-Z])/g, '-$1').toLowerCase().substr(1);
    }

    static get PROVIDER() {
        return `[data-provide="${this.CLASSNAME}"]`;
    }

    static get DATA_API() {
        return `click.${this.name}.data-api`;
    }

    /**
     * Override and return true to have all instances of the component
     * activate on window.load. This requires that all instances have
     * the PROVIDER data-api attribute set.
     *
     * If false, the component will only activate on the DATA_API event
     * on the DOM element with the PROVIDER data-api attribute. By default,
     * this means that the component code will only instantiate for the
     * DOM element once it's clicked.
     *
     * @return {boolean}
     */
    static get AUTOLOAD() {
        return false;
    }

    /**
     * Static interface for configuring a component to be activatable through
     * the standard jQuery component-style API.
     *
     * A component class named 'CoolTool' would be given an associated
     * constructor pattern: $('<div>').CoolTool({ ... })
     *
     * Furthermore, components with the PROVIDER data-api setup will activate
     * within the DOM. How this activation is done is described in the documentation
     * for the AUTOLOAD static getter.
     */
    static jQueryInterface() {
        const instance = this;
        const className = instance.name;

        const wrapper = function (...args) {
            let ret = null;

            // Method name (or options object)
            const method = args.shift();

            this.each(function () {
                const $this = $(this);
                let data = $this.data(className);

                const opts = $.extend(
                    {},
                    instance.DEFAULTS,
                    $this.data(),
                    typeof method === 'object' && method
                );

                if (!data) {
                    // eslint-disable-next-line new-cap
                    data = new instance($this, opts);
                    $this.data(className, data);
                    ret = data;
                }

                // Check for a method call instead of a construction
                if (typeof method === 'string') {
                    if (typeof data[method] === 'undefined') {
                        throw new Error(`No method or property named "${method}"`);
                    }

                    // Call the declared method with rest of the arguments
                    if (typeof data[method] === 'function') {
                        ret = data[method](...args);
                    }

                    // Otherwise, it's a property getter. Set directly
                    ret = data[method];
                }
            });

            if (ret === null || ret instanceof instance) {
                return this;
            }

            return ret;
        };

        $.fn[className] = wrapper;
        $.fn[className].Constructor = instance;
        $.fn[className].version = instance.VERSION;
        $.fn[className].noConflict = function () {
            return wrapper;
        };

        // If the component is setup to autoload on document ready,
        // run it immediately without additional configurations.
        // Note that this still requires data-provide provider
        if (instance.AUTOLOAD) {
            $(window).on(
                'load',
                () => {
                    $(instance.PROVIDER).each(function () {
                        wrapper.call($(this), {});
                    });
                }
            );
        } else {
            // Utilize the Data-API with data-provide (provider)
            // for initialization on interaction
            $(document).on(
                instance.DATA_API,
                instance.PROVIDER,
                function (e) {
                    e.preventDefault();
                    wrapper.call($(this), {});
                }
            );
        }
    }
}

export default Component;

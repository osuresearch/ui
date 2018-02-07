
/**
 * Base class for frontend self-contained components to inherit off of.
 *
 * Provides a uniform interface for the following:
 *  - Options handling with a defined default options list, and the ability to
 *      override through construction or data-attributes
 *  - Versioning to ensure compatibility between reusable nested components
 *  - lazy loading support - activating a component only on an event (such as a click)
 *      to allow quicker initial page load times
 *  - interface into jQuery to support jQuery-style conventions of calling the component
 *      constructor and methods on any number of DOM elements
 */
class Component {
    constructor(element, options) {
        this.el = element;
        this.o = options;

        // Mandatory class name for the DOM component
        this.el.addClass(this.constructor.CLASSNAME);
    }

    /**
     * Revision number of this component
     *
     * Typically only matters for components that may be shared between applications
     * or other components to ensure compatibility is still met. Should follow semver
     * conventions.
     *
     * @return {string}
     */
    static get VERSION() {
        return 'Unknown';
    }

    /**
     * Dictionary of setting defaults for this component, available internally
     * as the `o` class attribute.
     *
     * Each key in the dictionary may be overriden via a data-attribute on the
     * component's DOM, or via an object passed in through the jQuery plugin pattern
     * e.g. $(selector).CoolTool({ someKey: 'My Override' }).
     *
     * The priority order of option overrides are:
     *  1. jQuery constructor parameter
     *  2. data-attributes
     *  3. defaults
     *
     * Note that the data-attribute version of keys is only one level deep, and
     * performs kebabcase translation via the browser.
     *
     * For example:
     *  fooOption: { barSubOption: 'hello' }
     * must be provided as:
     *  data-foo-option="{ barSubOption: 'hello' }"
     *
     * @return {object}
     */
    static get DEFAULTS() {
        return {};
    }

    /**
     * Return a kebabcase version of this class' name. Used for setting/selecting
     * the DOM class name for this component that follows the SMACSS conventions
     *
     * @return {string}
     */
    static get CLASSNAME() {
        return this.name.replace(/([A-Z])/g, '-$1').toLowerCase().substr(1);
    }

    /**
     * Returns a selector for DOM elements that should be autoloaded as
     * an instance of this component.
     *
     * By default, this is an attribute data-provide containing the
     * kebabcase version of this component's class name.
     *
     * @return {string}
     */
    static get PROVIDER() {
        return `[data-provide="${this.CLASSNAME}"]`;
    }

    /**
     * Returns an event handler name for what interactions initializes this
     * component, if not set to autoload on page load.
     *
     * By default, this is the click event on the component's main DOM element
     * (the one selectable via this.PROVIDER)
     *
     * @return {string}
     */
    static get DATA_API() {
        return `click.${this.name}.data-api`;
    }

    /**
     * By default, all instances of the component (those DOM elements
     * with the PROVIDER data-api attribute set) will initialize on window.load
     *
     * If overriden to return false, the component will only activate on the
     * DATA_API event on the DOM element with the PROVIDER data-api attribute.
     * By default, this means that the component code will only instantiate for the
     * DOM element once it's clicked.
     *
     * @return {boolean}
     */
    static get AUTOLOAD() {
        return true;
    }

    /**
     * Static interface for configuring a component to be activatable through
     * the standard jQuery component-style API.
     *
     * A component class named 'CoolTool' would be given an associated
     * constructor pattern: $(selector).CoolTool({ ... })
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

        $.fn[instance.CLASSNAME] = $.fn[className];

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

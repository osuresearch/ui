
import Component from '../component';

class Emulate extends Component {
    static get VERSION() {
        return '3.2.0';
    }

    static get DEFAULTS() {
        return {
            endpoint: null,         // API endpoint to POST emulation requests

            lookupEndpoint: null,   // API endpoint for people that can be emulated

            user: null,             // Display name of the actively emulated user

            historyLimit: 4,        // Number of people to keep in local history
        };
    }

    constructor(element, options) {
        super(element, options);

        this.localStorage = JSON.parse(
            window.localStorage.getItem('emulate-history')
        ) || [];

        this.setupDOM();
        this.attachEventListeners();
    }

    setupDOM() {
        const template = $('.emulate-modal-template').text();

        // Build modal DOM from the template
        this.modal = $(template);

        // Inject the modal into the document body
        $('body').append(this.modal);

        // Initialize Bootstrap modal plugin
        this.modal.modal({
            show: false
        });

        this.history = this.modal.find('.emulate-history');
        this.lookup = this.modal.find('.emulate-lookup');
        this.clear = this.modal.find('.emulate-clear');
        this.form = this.modal.find('form');

        this.form.attr('action', this.o.endpoint);

        // Customize the Lookup results renderer to give us
        // some additional information about each person
        // Note that the nbsp; are because of the floated span.
        // It's too small of an adjustment to warrant a CSS rule
        this.lookup.Lookup({
            endpoint: this.o.lookupEndpoint,
            optionDisplay: data => `${data.attributes.name}
                <span class="text-muted pull-right">
                    &nbsp;&nbsp;(${data.attributes.username})
                </span>`
        });

        if (this.o.user) {
            this.lookup.Lookup('set', this.o.user, '');
        }

        // Render local history
        this.localStorage.forEach(
            item => this.history.prepend(`
                <a href="#" class="badge badge-primary" data-id="${item.id}">
                    ${item.name}
                </a>
            `)
        );
    }

    attachEventListeners() {
        this.el.on('click', () => this.modal.modal('show'));
        this.lookup.on('pick.lookup', () => this.change());
        this.clear.on('click', () => this.reset());
        this.history.find('a').on('click', e => this.onClickHistory(e));
    }

    /**
     * Event handler for when the a person is selected in the lookup
     *
     * This will end up triggering a page reload
     */
    change() {
        // Add the picked person to local history
        if (this.lookup.Lookup('displayValue').length > 0) {
            this.addToHistory(
                this.lookup.Lookup('storeValue'),
                this.lookup.Lookup('displayValue')
            );
        }

        // Simply push the form to submit
        this.form.submit();
    }

    /**
     * Clear emulation
     *
     * This will end up triggering a page reload
     */
    reset() {
        this.lookup.Lookup('clear');
        this.change();
    }

    /**
     * Event handler for when a person is selected from the history list
     */
    onClickHistory(e) {
        const target = e.currentTarget;

        // Set the person into the lookup
        this.lookup.Lookup(
            'set',
            target.innerText,
            target.attributes['data-id'].value
        );

        // Trigger a change
        this.change();

        return false;
    }

    /**
     * Add a user to our emulation history in local storage
     *
     * @param {string} id Emulated user's OSU ID
     * @param {string} name Emulated user's display name
     */
    addToHistory(id, name) {
        let found = false;

        this.localStorage.forEach((item) => {
            if (item.id === id) {
                found = true;
            }
        });

        // Store person in our recent history
        if (!found) {
            this.localStorage.push({ id, name });

            // Only show the last N individuals emulated
            if (this.localStorage.length > this.o.historyLimit) {
                this.localStorage.shift();
            }

            window.localStorage.setItem(
                'emulate-history',
                JSON.stringify(this.localStorage)
            );
        }
    }
}

Emulate.jQueryInterface();

export default Emulate;

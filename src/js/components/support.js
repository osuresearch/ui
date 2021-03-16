
import Component from '../component';

/**
 * Support modal component. Brings up a modal where the end user can
 * submit either a request for support or their feedback about the app.
 *
 * Requires the DOM in twig/support.html. If including the DOM through Twig,
 * see twig/support.html for the required Twig variables to configure the component.
 */
class Support extends Component {
    static get name() {
        return 'Support';
    }

    static get VERSION() {
        return '3.2.0';
    }

    static get DEFAULTS() {
        return {
            app: 'OR Application',          // Human-readable application name

            name: 'Anonymous',              // Logged in user's name
            email: 'noreply@osu.edu',       // Logged in user's email

            helpEndpoint: null,             // API endpoint to POST help requests
            feedbackEndpoint: null,         // API endpoint to POST feedback

            metadata: null,                 // Optional metadata to send along with the request.
                                            // Will be stringified if JSON
            language: {
                help: '',                   // Optional content before the help form (HTML)
                feedback: '',               // Optional content before the feedback form (HTML)

                // Thank you message after submitting
                thanks: 'Thank you for your feedback. If you are reporting a problem ' +
                        'with this application our help desk will reach out to you shortly.',

                error: 'An internal error is preventing your feedback from submitting. ' +
                        'Please contact us directly at orhelpdesk@osu.edu or (614) 688-8288'
            }
        };
    }

    constructor(element, options) {
        super(element, options);

        this.setupDOM();
        this.attachEventListeners();
    }

    /**
     * Add modal DOM from the template into the document body
     * and initialize the Bootstrap modal sub-component
     */
    setupDOM() {
        const template = $('.support-modal-template').text();

        // Create DOM from the template and inject into body
        this.modal = $(template);
        $('body').append(this.modal);

        // Add additional content to the modal, if specified
        this.modal.find('.support-help .js-extra-content').html(this.o.language.help);
        this.modal.find('.support-feedback .js-extra-content').html(this.o.language.feedback);

        // Initialize Bootstrap modal plugin
        this.modal.modal({
            show: false
        });
    }

    /**
     * Hook click events/submissions/choice changes to event handlers
     */
    attachEventListeners() {
        this.el.on('click', () => this.open());
        this.modal.find('form').on('submit', e => this.onSubmit(e));
        this.modal.find('input[name="choice"]').on('change', () => this.onChangeType());
    }

    /**
     * Display the support form to the end user
     */
    open() {
        const checked = this.modal.find('input[name="choice"]:checked');
        if (checked.length) {
            checked[0].checked = false;
        }

        // Reset modal state for a new support request
        this.modal.removeClass('is-help').removeClass('is-feedback');
        this.modal.find('textarea').val('');

        this.modal.modal('show');
    }

    /**
     * Event handler for changing the support type (help vs feedback)
     */
    onChangeType() {
        const selected = this.modal.find('input[name="choice"]:checked').val();

        // Toggle modal view state based on the selected choice
        if (selected === 'help') {
            this.modal.addClass('is-help');
            this.modal.removeClass('is-feedback');
        } else {
            this.modal.addClass('is-feedback');
            this.modal.removeClass('is-help');
        }
    }

    /**
     * Event handler for submitting the active support form
     *
     * @param {Event} e
     *
     * @return {boolean} false to prevent event bubbling
     */
    onSubmit(e) {
        const selected = this.modal.find('input[name="choice"]:checked').val();
        const form = this.modal.find('form');
        let endpoint = this.o.helpEndpoint;
        let message = this.modal.find('#support-help-entry');

        if (selected === 'help' && message.val().length < 1) {
            alert('Please describe your issue');
            e.preventDefault();
            return false;
        }

        if (selected !== 'help') {
            endpoint = this.o.feedbackEndpoint;
            message = form.find('#support-feedback-entry');

            if (message.val().length < 1) {
                alert('Please fill out the suggestion form');
                e.preventDefault();
                return false;
            }
        }

        // Submit request to the appropriate endpoint
        $.ajax({
            type: 'POST',
            url: endpoint,
            data: {
                application: this.o.app,
                name: this.o.name,
                email: this.o.email,
                metadata: JSON.stringify(this.o.metadata),
                url: location.href,
                message: message.val()
            }
        }).done(() => {
            this.modal.modal('hide');
            alert(this.o.language.thanks);
        }).fail(() => {
            alert(this.o.language.error);
        });

        e.preventDefault();
        return false;
    }
}

Support.jQueryInterface();

export default Support;

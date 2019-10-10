
import React from 'react';
import PropTypes from 'prop-types';

import Modal from './Modal';
import Lookup from './Lookup';

/**
 * Modal to change emulation of users within the application.
 *
 * Renders itself as a link to open the modal.
 *
 * Usage:
 * ```jsx
 *  <Emulate className="btn btn-danger"
 *      endpoint="/my-app/api/emulate"
 *      isEmulating={bool}
 *      username={string} />
 * ```
 */
class Emulate extends React.Component {
    constructor(props) {
        super(props);

        this.modal = React.createRef();

        this.onClick = this.onClick.bind(this);
        this.onEmulate = this.onEmulate.bind(this);
        this.onReset = this.onReset.bind(this);

        this.state = {
            localStorage: JSON.parse(
                window.localStorage.getItem(props.localStorageKey)
            ) || []
        };
    }

    /**
     * Display the modal on button click
     */
    onClick() {
        this.modal.current.show();
    }

    /**
     * Reset emulation action.
     *
     * Submits an emulation DELETE request and refreshes the current page.
     */
    onReset(e) {
        fetch(this.props.endpoint, {
            method: 'DELETE'
        })
        .then(() => location.reload());

        e.preventDefault();
        return false;
    }

    /**
     * Submit emulation for an individual, by ID
     *
     * After success, this will reload the current page.
     *
     * @param {string} id OSU ID
     * @param {string} name Display name
     */
    emulate(id, name) {
        this.addToHistory(id, name);

        fetch(this.props.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id }),
            cache: 'no-cache',
            redirect: 'follow',
            credentials: 'same-origin'
        })
        .then(() => location.reload());
    }

    /**
     * Add a user to our emulation history in local storage
     *
     * @param {string} id OSU ID
     * @param {string} name Display name
     */
    addToHistory(id, name) {
        const localStorage = this.state.localStorage;
        const matches = localStorage.filter((item) => item.id === id);

        // If they're already in recent history, do nothing
        if (matches.length) {
            return;
        }

        // Insert the new person into local storage
        localStorage.push({ id, name });

        // Only show the last N individuals emulated
        if (localStorage.length > 4) {
            localStorage.shift();
        }

        window.localStorage.setItem(
            this.props.localStorageKey,
            JSON.stringify(localStorage)
        );

        this.setState({ localStorage });
    }

    /**
     * Change event callback for the Lookup component
     *
     * @param {SyntheticEvent} e
     * @param {object} person
     */
    onEmulate(e, person) {
        this.emulate(person.id, person.attributes.name);
        e.preventDefault();
        return false;
    }

    /**
     * Render the list of previously emulated individuals from local storage
     */
    renderHistory() {
        return (
            <div className="emulate-history">
                {this.state.localStorage.map((item) =>
                    <span key={item.id}> <a href="#" className="badge badge-primary"
                        onClick={() => this.emulate(item.id, item.name)}>
                        {item.name}
                    </a></span>
                )}
            </div>
        );
    }

    /**
     * Returns a callable that generates raw HTML for each Lookup option.
     *
     * @return {callable}
     */
    static getOptionDisplay() {
        return (data) => `${data.attributes.name}
            <span class="text-muted pull-right">
                &nbsp;&nbsp;(${data.attributes.username})
            </span>`;
    }

    renderModal() {
        return (
            <Modal ref={this.modal}>
                <div className="modal-dialog">
                    <form className="modal-content" method="post" action="imtrash">
                        <div className="modal-header">
                            <h5 className="modal-title" id="emulate-label">
                                Emulate User
                            </h5>
                            <button type="button" className="close"
                                data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <fieldset className="form-group">
                                <Lookup
                                    name="emulate-user-lookup"
                                    endpoint={this.props.lookupEndpoint}
                                    hasClearButton={false}
                                    onChange={this.onEmulate}
                                    optionDisplay={Emulate.getOptionDisplay()}>
                                    <button className="btn btn-danger emulate-clear"
                                        aria-label="remove emulation"
                                        onClick={this.onReset}>
                                        Reset
                                    </button>
                                </Lookup>

                                {this.props.isEmulating &&
                                    <small className="form-text">
                                        Currently emulating <strong>{this.props.username}. </strong>
                                        Click <strong>Reset</strong> to clear all emulation.
                                    </small>
                                }

                                {this.renderHistory()}
                            </fieldset>
                        </div>
                    </form>
                </div>
            </Modal>
        );
    }

    render() {
        return (
            <div>
                <button type="button" className={this.props.className}
                    onClick={this.onClick}>
                    Emulate
                </button>

                {this.renderModal()}
            </div>
        );
    }
}

Emulate.propTypes = {
    /**
     * Custom className to apply to the rendered <button> element.
     *
     * Useful for buttons that should be displayed in dropdowns
     * versus displayed on a page with a particular color
     */
    className: PropTypes.string,

    /**
     * Endpoint for emulation POST/DELETE requests (absolute path)
     */
    endpoint: PropTypes.string.isRequired,

    /**
     * API endpoint for user lookups (absolute path)
     *
     * Must conform to OR Lookup endpoint format
     */
    lookupEndpoint: PropTypes.string.isRequired,

    /**
     * True if we're emulating a user on the current session
     */
    isEmulating: PropTypes.bool.isRequired,

    /**
     * Individual we're currently emulating
     */
    username: PropTypes.string,

    /**
     * Key used for emulation history in Local Storage
     */
    localStorageKey: PropTypes.string.isRequired
};

Emulate.defaultProps = {
    lookupEndpoint: 'https://orapps.osu.edu/api/v1/person',
    isEmulating: false,
    username: null,
    className: 'btn btn-danger',
    localStorageKey: 'emulate-history'
};

export default Emulate;

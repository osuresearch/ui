
import React from 'react';
import PropTypes from 'prop-types';

import {
    Search,
    PersonSearchResult,
    Modal,
    ModalHeader,
    ModalBody
} from '@osuresearch/ui';

/**
 * Modal to change emulation of users within the application.
 *
 * Renders itself as a link to open the modal. Once emulation has
 * changed, the entire application will be refreshed to load
 * under the new emulated user.
 *
 * @deprecated Use `@ORIS/auth`. Will be removed in a future version of `@osuresearch/ui`
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
        .then(() => window.location.reload());
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
        .then(() => window.location.reload());
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
     */
    onEmulate(e) {
        const person = e.target.value;
        console.log(person);

        if (person.key !== null) {
            this.emulate(person.key, person.value);
        }
    }

    render() {
        return (
            <>
                <Modal ref={this.modal}>
                    <ModalHeader hasCloseButton={true}>
                        Emulate User
                    </ModalHeader>
                    <ModalBody>
                        <Search
                            name="emulate-user-lookup"
                            endpoint={this.props.lookupEndpoint}
                            hasClearButton={false}
                            onChange={this.onEmulate}
                            resultComponent={PersonSearchResult}
                        />

                        {this.props.isEmulating &&
                            <small className="form-text">
                                Currently emulating <strong>{this.props.username}. </strong>

                                <button className="btn-link" onClick={this.onReset}>
                                    Click to clear emulation.
                                </button>
                            </small>
                        }

                        <div className="emulate-history">
                            {this.state.localStorage.map((item) =>
                                <span key={item.id}> <a href="#" className="badge badge-secondary"
                                    onClick={() => this.emulate(item.id, item.name)}>
                                    {item.name}
                                </a></span>
                            )}
                        </div>
                    </ModalBody>
                </Modal>

                <button
                    type="button"
                    className={this.props.className}
                    onClick={this.onClick}
                >
                    Emulate
                </button>
            </>
        );
    }
}

Emulate.propTypes = {
    /**
     * Custom className to apply to the rendered `<button>` element.
     *
     * Useful for buttons that should be displayed in dropdowns
     * versus displayed on a page with a particular color
     */
    className: PropTypes.string,

    /**
     * Endpoint for emulation POST/DELETE requests (absolute url)
     */
    endpoint: PropTypes.string.isRequired,

    /**
     * API endpoint for user lookups (absolute url)
     *
     * Must work from a `<Search>` component using `<PersonSearchResult>` for results.
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

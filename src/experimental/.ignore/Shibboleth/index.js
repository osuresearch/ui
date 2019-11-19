
import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../components/Modal';
import ModalHeader from '../../components/ModalHeader';
import ModalBody from '../../components/ModalBody';

/*
    Language references:
    https://i.stack.imgur.com/KCged.png


*/

/**
 * Shibboleth state monitor
 */
class Shibboleth extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pendingLogin: false,
            loginWindowRef: null
        };

        this.modalOpen = false;

        this.modal = React.createRef();

        this.ping = this.ping.bind(this);
        this.openLoginWindow = this.openLoginWindow.bind(this);
        this.onPingSuccess = this.onPingSuccess.bind(this);
        this.onPingError = this.onPingError.bind(this);
    }

    /**
     * On mount, start pinging for Shibboleth status
     */
    componentDidMount() {
        this.start(this.props.backgroundPing);
    }

    /**
     * Start sending pings for Shibboleth status
     *
     * @param {number} interval Ping interval, in seconds
     */
    start(interval) {
        this.stop();
        this.interval = window.setInterval(this.ping, interval * 1000);
    }

    /**
     * Stop sending pings for Shibboleth status
     */
    stop() {
        if (this.interval) {
            window.clearInterval(this.interval);
        }

        this.interval = null;
    }

    /**
     * Ping the endpoint for a valid response.
     *
     * If Shibboleth is timed out, it'll attempt a 302 redirect.
     * Since the redirect is made to a different domain (webauth.service...)
     * a preflight CORS request is sent. Shibb doesn't respond to CORS,
     * so it fails, and we get back a failed AJAX response.
     *
     * Note that it is impossible to identify CORS redirect failure versus
     * any other server failure on our end due to browser security. See:
     *      https://stackoverflow.com/a/19325710
     *      https://stackoverflow.com/a/6734427
     */
    ping() {
        fetch(this.props.endpoint, {
            method: 'HEAD',
            cache: 'no-cache',
            redirect: 'follow',
            credentials: 'same-origin'
        })
        .then((res) => {
            if (res.ok) {
                this.onPingSuccess();
            } else {
                this.onPingError();
            }
        })
        .catch(this.onPingError);
    }

    /**
     * Shibboleth ping error.
     *
     * We're logged out and can't make any additional AJAX calls or form POSTs
     * without a session refresh. Lock the user out of the application by opening
     * up the login modal and reset our ping interval to the faster active version
     */
    onPingError() {
        const { pendingLogin, loginWindowRef } = this.state;

        // Still waiting? Keep modal open.
        if (pendingLogin) {
            // If the window handle was closed, fire off an event
            if (loginWindowRef && loginWindowRef.closed) {
                this.onCloseLoginWindow();
            }

            return;
        }

        // Prompt the user for login
        this.modal.current.show();

        this.setState({ pendingLogin: true });

        // Restart pings using active interval time
        this.start(this.props.loginPing);
    }

    /**
     * Shibboleth ping success.
     *
     * If this is a background ping, this method does nothing.
     *
     * If the login modal is open, this will close the modal and restart
     * the ping interval to the slower background version.
     */
    onPingSuccess() {
        // Background success, don't need to do anything else
        if (!this.state.pendingLogin) {
            return;
        }

        // If this was a successful ping with the prompt open close the modal
        // and let the user go back to what they were doing
        this.modal.current.hide();

        this.setState({ pendingLogin: false });

        // Restart pings using background interval time
        this.start(this.props.backgroundPing);
    }

    /**
     * Open a new window/tab to get the user to refresh their login
     */
    openLoginWindow() {
        let loginWindowRef = this.state.loginWindowRef;

        if (!loginWindowRef || loginWindowRef.closed) {
            loginWindowRef = window.open(
                this.props.endpoint,
                'Login',
                'width=800,height=600'
            );
        } else { // Window is already open, focus it
            loginWindowRef.focus();
        }

        this.setState({ loginWindowRef });
    }

    /**
     * User closed the login window before we confirmed our login status.
     *
     * We assume the user has logged in before they close it (because typically
     * the window will ask them to close the window after they've logged in) so
     * we ping immediately to verify.
     */
    onCloseLoginWindow() {
        this.setState({ loginWindowRef: null });
        this.ping();
    }

    render() {
        return (
            <Modal ref={this.modal} keyboard={false} backdrop="static">
                <ModalBody>
                    <p>
                        Your login session has expired.
                        To avoid losing work, click the button below to log back in.
                        Session expired, click the button below to login again.
                    </p>

                    <p>This window will close automatically after you have logged in.</p>
                </ModalBody>
                <div className="modal-footer">
                    {this.state.loginWindowRef &&
                        <Button theme="success" onClick={this.openLoginWindow}>
                            <Icon name="spinner" spin={true} /> Waiting for login...
                        </Button>
                    }

                    {!this.state.loginWindowRef &&
                        <Button theme="success" onClick={this.openLoginWindow}>
                            Login
                        </Button>
                    }
                </div>
            </Modal>
        );
    }
}

Shibboleth.propTypes = {
    /**
     * API endpoint to query for login status
     */
    endpoint: PropTypes.string.isRequired,

    /**
     * Frequency (in seconds) to ping the status endpoint
     */
    backgroundPing: PropTypes.number.isRequired,

    /**
     * Frequency (in seconds) to ping the status endpoint while the login
     * modal is open and waiting for the user to finish the login flow.
     */
    loginPing: PropTypes.number.isRequired,

    // Two below settings are TBD - waiting for a dev meeting

    /**
     * How long the user can be inactive until we
     */
    // inactivityTimeout: PropTypes.number.isRequired,

    /**
     * Whether the user should be forcibly logged out after the inactivity timeout.
     */
    // inactiveLogout: PropTypes.bool.isRequired
};

Shibboleth.defaultProps = {
    backgroundPing: 300,
    loginPing: 5
};

export default Shibboleth;

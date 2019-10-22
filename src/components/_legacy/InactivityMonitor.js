

import React from 'react';
import PropTypes from 'prop-types';

import Modal from './Modal';

/**
 * Watches for user actions on the page and creates an inactivity popup
 * when the user has been detected as inactive, and optionally logs them
 * out of Shibboleth automatically.
 *
 * Usage:
 * ```jsx
 *      <InactivityMonitor timeout={300} hidePage={false} logout={false} />
 * ```
 */
class InactivityMonitor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // TBD
        };
    }

    render() {
        return (
            <Modal ref={this.modal} className="inactivity-monitor"
                keyboard={false} backdrop="static">

                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p>
                                Message here.
                            </p>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-success"
                                onClick={this.reset}>
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

InactivityMonitor.propTypes = {
    /**
     * How long the user can be inactive until we bring up the
     * warning modal (in seconds)
     */
    timeout: PropTypes.number.isRequired,

    /**
     * If true, the contents of the page will be hidden once
     * the inactive warning modal is displayed
     */
    hidePage: PropTypes.bool.isRequired,

    /**
     * If true, the user will be forcibly logged out once the
     * inactivity timeout is reached, instead of displaying
     * the warning modal.
     */
    logout: PropTypes.bool.isRequired
};

InactivityMonitor.defaultProps = {
    timeout: 300, // 5min
    hidePage: false,
    logout: false
};

export default InactivityMonitor;

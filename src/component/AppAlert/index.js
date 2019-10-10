
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Red server-wide alert banner. May appear for network issues,
 * planned outages, buckeye alerts, etc.
 */
class AppAlert extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: null
        };
    }

    /**
     * Load the alert contents from the endpoint on mount
     */
    componentDidMount() {
        fetch(this.props.endpoint, {
            cache: 'no-cache',
            redirect: 'follow',
            credentials: 'same-origin'
        })
        .then((res) => res.json())
        .then((res) => this.setState({
            message: res.data
        }))
        .catch(() => this.setState({
            message: 'Could not communicate with the alerting API'
        }));
    }

    render() {
        if (!this.state.message) {
            return null;
        }

        return (
            <div className="application-alert">
                {this.state.message}. Contact the <a href="https://orhelp.osu.edu" target="_blank" rel="noopener noreferrer">OR Help Desk</a> for more information.
            </div>
        );
    }
}

AppAlert.propTypes = {
    /**
     * API endpoint to query for alerts
     */
    endpoint: PropTypes.string.isRequired
};

export default AppAlert;

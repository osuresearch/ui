
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Static loader message. Must match whatever the DOM is for the template's loader.
 * 
 * Usage:
 * ```jsx
 *  <AppLoader title="My App"/>
 * ```
 */
const AppLoader = (props) => (
    <div className="app-loader">
        <i className="fa fa-spinner fa-spin"></i>
        <p className="app-loader-help">
            Loading {props.title}, please wait...
        </p>
        <p className="app-loader-help-small">
            Taking too long? Let the OR Help Desk know
            at <a href="mailto:orhelpdesk@osu.edu">orhelpdesk@osu.edu</a>.
        </p>
    </div>
);

AppLoader.propTypes = {
    /**
     * Application title to display to the end user
     */
    title: PropTypes.string.isRequired
};

export default AppLoader;

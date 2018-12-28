
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Error message to display to the end user on major application error
 * 
 * Usage:
 * ```jsx
 *  <AppError>Message content here</AppError>
 * ```
 * 
 * Note that the contents of AppError are wrapped with a <p> tag, so only
 * use DOM elements that are not block-level.
 * 
 * For more information about what's illegal in a <p> tag, see
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p "Tag omission" section.
 * ```
 */
const AppError = (props) => (
    <div className="app-error">
        <p className="app-error-help">
            {props.children}
        </p>
        <p className="app-error-help-small">
            For additional assistance, please contact the OR Help Desk at
            <a href="mailto:orhelpdesk@osu.edu">orhelpdesk@osu.edu</a>.
        </p>
    </div>
);

AppError.propTypes = {
    /**
     * Error message to display to the end user
     */
    children: PropTypes.node.isRequired
};

export default AppError;

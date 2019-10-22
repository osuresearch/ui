
import React from 'react';
import PropTypes from 'prop-types';

/**
 * A simple badge that might not be that simple
 */
class Badge extends React.Component {
    render() {
        const { children, theme } = this.props;
        return <span className={`badge badge-${theme}`}>{children}</span>;
    }
}

Badge.propTypes = {
    /**
     * The content of the badge label
     */
    children: PropTypes.any,

    /**
     * The Bootstrap theme to apply to the badge
     */
    theme: PropTypes.string.isRequired
};

Badge.defaultProps = {
    theme: 'secondary'
};

export default Badge;

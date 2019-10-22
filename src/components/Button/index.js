
import React from 'react';
import PropTypes from 'prop-types';

/**
 * A simple themed button
 */
class Button extends React.Component {
    render() {
        const { children, theme, small, onClick } = this.props;

        let classNames = 'btn btn-' + theme;
        if (small) {
            classNames += ' btn-sm';
        }

        return <button type="button" className={classNames} onClick={onClick}>{children}</button>;
    }
}

Button.propTypes = {
    /**
     * The content of the button label
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.object
    ]),

    /**
     * The Bootstrap theme to apply to the button
     */
    theme: PropTypes.string.isRequired,

    /**
     * Should the button be rendered smaller. Useful for inlining buttons into tables.
     */
    small: PropTypes.bool.isRequired,

    /**
     * Callable for when the button is clicked
     */
    onClick: PropTypes.func
};

Button.defaultProps = {
    theme: 'primary',
    small: false
};

export default Button;

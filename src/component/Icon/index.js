
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Font Awesome 4.7 icons with build-in accessibility
 */
const Icon = (props) => {
    let classNames = `fa fa-${props.name}`;

    if (props.spin) {
        classNames += ' fa-spin'
    };

    const hasLabel = React.Children.count(props.children) > 0;

    return (
        <i className={classNames} aria-hidden={!hasLabel}>
            {hasLabel &&
            <span className="sr-only">
                {props.children}
            </span>
            }
        </i>
    );
};

Icon.propTypes = {
    /**
     * Font Awesome 4.7 icon name
     */
    name: PropTypes.string.isRequired,

    /**
     * Should the icon have a spin animation
     */
    spin: PropTypes.bool.isRequired,

    /**
     * Screen reader labeling for the icon. If not provided,
     * the icon will be flagged as `aria-hidden`
     */
    children: PropTypes.string
};

Icon.defaultProps = {
    spin: false,
};

export default Icon;

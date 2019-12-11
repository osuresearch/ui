
import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

/**
 * Creates an external link with an icon and [secure](https://developers.google.com/web/tools/lighthouse/audits/noopener)
 * `target="_blank"` redirection
 */
const ExternalLink = (props) => (
    <a href={props.href} target={props.redirect ? '_top' : '_blank'} rel="noopener noreferrer">
        <Icon name="external-link" /> {` `}
        {React.Children.count(props.children) > 0 && props.children}
        {React.Children.count(props.children) < 1 && props.href}

        {!props.redirect && <span className="sr-only">(Opens in a new window)</span>}
    </a>
);

ExternalLink.propTypes = {
    /**
     * Site to redirect the user to
     */
    href: PropTypes.string.isRequired,

    /**
     * If no children are supplied, the link `href` will be rendered in their place.
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.object
    ]),

    /**
     * Should the link redirect the current window instead of opening in a new one
     */
    redirect: PropTypes.bool.isRequired
};

ExternalLink.defaultProps = {
    redirect: false
};

export default ExternalLink;

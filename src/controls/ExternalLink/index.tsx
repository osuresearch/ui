
import React from 'react';
import Icon from '../../generic/Icon';

export interface Props {
    /** Site to redirect the user to */
    href: string;

    /** Should the link redirect the current window instead of opening in a new one */
    redirect?: boolean;
}

/**
 * Creates an external link with an icon and [secure](https://developers.google.com/web/tools/lighthouse/audits/noopener)
 * `target="_blank"` redirection
 */
const ExternalLink: React.FC<Props> = ({
    children,
    href,
    redirect = false
}) => (
        <a className="external-link" href={href} target={redirect ? '_top' : '_blank'} rel="noopener noreferrer">
            {React.Children.count(children) > 0 && children}
            {React.Children.count(children) < 1 && href}

            {!redirect && <span className="sr-only">(Opens in a new window)</span>}
            <Icon name="external-link" />
        </a>
    );

export default ExternalLink;

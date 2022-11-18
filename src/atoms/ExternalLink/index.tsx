
import React from 'react';
import { Icon } from '../Icon';

export type Props = {
    /**
     * Optional child components. 
     * 
     * If omitted, the `href` prop value will be displayed.
     */
    children?: React.ReactNode

    /** Site to redirect the user to */
    href: string;

    /** Should the link redirect the current window instead of opening in a new one */
    redirect?: boolean;
}

/**
 * Creates an external link with an icon and [secure](https://developers.google.com/web/tools/lighthouse/audits/noopener)
 * `target="_blank"` redirection
 */
export const ExternalLink = ({
    children,
    href,
    redirect = false
}: Props) => (
    <a className="external-link" href={href} target={redirect ? '_top' : '_blank'} rel="noopener noreferrer">
        {children && children}
        {!children && href}

        {!redirect && <span className="sr-only">(Opens in a new window)</span>}
        <Icon name="external-link" />
    </a>
);

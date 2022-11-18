
import React from 'react';
import { Icon } from '../../atoms/Icon';

export type Props = {
    /**
     * Optional child components. 
     * 
     * If omitted, the `to` prop value will be displayed.
     */
    children?: React.ReactNode

    /** TO addresses */
    to: string | string[]

    /** CC addresses */
    cc?: string | string[]

    /** BCC addresses */
    bcc?: string | string[]

    /** Email subject */
    subject?: string

    /** Email body */
    body?: string
}

function addressesToString(addresses: string | string[]) {
    if (Array.isArray(addresses)) {
        return addresses.join(';');
    }

    return addresses;
}

/**
 * Creates an email link with an icon, optionally prefilled with content.
 *
 * If the component has no children the `to` address will be displayed.
 */
export const EmailLink = ({
    children,
    to,
    cc,
    bcc,
    subject,
    body
}: Props) => {
    const params: string[] = [];
    if (cc) params.push('cc=' + addressesToString(cc));
    if (bcc) params.push('bcc=' + addressesToString(bcc));
    if (subject) params.push('subject=' + encodeURIComponent(subject));
    if (body) params.push('body=' + encodeURIComponent(body));

    let mailto = 'mailto:' + addressesToString(to);
    if (params.length > 0) {
        mailto += '?' + params.join('&');
    }

    return (
        <a className="email-link" href={mailto} rel="noopener noreferrer">
            {React.Children.count(children) > 0 && children}
            {React.Children.count(children) < 1 && to}

            <Icon name="envelope-o" />
        </a>
    );
}

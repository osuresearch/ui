import React from 'react';
export interface Props {
    /** TO addresses */
    to: string | string[];
    /** CC addresses */
    cc?: string | string[];
    /** BCC addresses */
    bcc?: string | string[];
    /** Email subject */
    subject?: string;
    /** Email body */
    body?: string;
}
/**
 * Creates an email link with an icon, optionally prefilled with content.
 *
 * If the component has no children the `to` address will be displayed.
 */
declare const EmailLink: React.FC<Props>;
export default EmailLink;
//# sourceMappingURL=index.d.ts.map
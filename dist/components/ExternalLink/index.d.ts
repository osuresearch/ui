import React from 'react';
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
declare const ExternalLink: React.FC<Props>;
export default ExternalLink;
//# sourceMappingURL=index.d.ts.map
import React from "react";
export interface Props {
    /** Application Name */
    app: string;
    /** Title in the button */
    title?: string;
    /** Knowledgebase article link, if one exists */
    kbUrl?: string;
    /** Additional per-application metadata to be sent alongside the report */
    meta?: object;
    /** Endpoint for form submissions. */
    endpoint?: string;
    /** Controls if button is fixed to bottom right of page (true) or in its DOM position (false) */
    isFixed?: boolean;
}
/**
 * Support and feedback collection for applications.
 *
 * Users click on button fixed on bottom right of page, which
 * shows a form within a modal. The user selects a feedback type (help
 * or suggestion) and is provided instructions for providing such
 * feedback. Instructions for users seeking help include a link to the
 * knowledgebase (kb) for the application and the phone number to the helpdesk.
 */
declare const Support: React.FC<Props>;
export default Support;
//# sourceMappingURL=index.d.ts.map
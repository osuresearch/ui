import React from 'react';
export interface Props {
    /** API endpoint to query for alerts */
    endpoint?: string;
}
/**
 * Red server-wide alert banner. May appear for network issues,
 * planned outages, buckeye alerts, etc.
 */
declare const AppAlert: React.FC<Props>;
export default AppAlert;
//# sourceMappingURL=index.d.ts.map
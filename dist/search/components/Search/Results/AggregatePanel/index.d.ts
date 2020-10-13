import React from 'react';
import './index.scss';
export interface Buckets {
    [key: string]: any;
}
export declare type Props = {
    provider: string;
    results?: any[];
    totalResults?: number;
    /**
     * 	JSON value to extract for categorizing results into multiple buckets.
     * Dot-notation can be used to select a nested JSON path.
     */
    categorizeBy: string;
    children: React.ReactElement;
};
declare const AggregatePanel: React.FC<Props>;
export default AggregatePanel;
//# sourceMappingURL=index.d.ts.map
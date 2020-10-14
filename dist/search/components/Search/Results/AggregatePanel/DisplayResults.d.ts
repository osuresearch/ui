import React from 'react';
export interface Buckets {
    [key: string]: any;
}
declare type Props = {
    terms: string;
    results?: any[];
    categorizeBy: string;
    totalResults?: number;
    children: React.ReactElement;
};
declare const DisplayResults: React.FC<Props>;
export default DisplayResults;
//# sourceMappingURL=DisplayResults.d.ts.map
import React from 'react';
import './index.scss';
export interface PanelMethods {
    show: () => void;
    hide: () => void;
}
export declare type Props = {
    provider: string;
    results?: any[];
    /**
     * 	JSON value to extract for categorizing results into multiple buckets.
     * Dot-notation can be used to select a nested JSON path.
     */
    categorizeBy: string;
    categoryHeaderWrapper?: React.FC;
    placeholder?: React.FC;
    children: React.ReactElement;
};
declare const AggregatePanel: React.ForwardRefExoticComponent<Props & React.RefAttributes<PanelMethods>>;
export default AggregatePanel;
//# sourceMappingURL=index.d.ts.map
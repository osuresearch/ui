import React from 'react';
import { Props as MapperProps } from './Mapper';
import { Props as PanelProps } from './Panel';
import { Props as AggregatePanelProps, PanelMethods } from './AggregatePanel';
export declare type Props = {
    /**
     * A **single** React Element Component that will receive
     * the results array
     */
    children: React.ReactElement;
};
export interface IResultsComposition {
    Mapper: React.FC<MapperProps>;
    Panel: React.FC<PanelProps>;
    AggregatePanel: React.ForwardRefExoticComponent<AggregatePanelProps & React.RefAttributes<PanelMethods>>;
}
/**
 * Render the results of a search as a simple list of components.
 *
 * Provide your own component to render each result (e.g. as table rows, Kanban cards, etc).
 *
 * @deprecated To be replaced since this is no longer necessary - search results are available directly off of the useSearch() hook so a wrapping component no longer makes sense.
 */
declare const Results: React.FC<Props> & IResultsComposition;
export default Results;
//# sourceMappingURL=index.d.ts.map
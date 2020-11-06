import React, { useContext } from 'react';
import { Context } from '..';

import Mapper, { Props as MapperProps } from './Mapper';
import Panel, { Props as PanelProps } from './Panel';
import AggregatePanel, { Props as AggregatePanelProps, PanelMethods } from './AggregatePanel';

export type Props = {
    /**
     * A **single** React Element Component that will receive
     * the results array
     */
    children: React.ReactElement;
}

export interface IResultsComposition {
    Mapper: React.FC<MapperProps>
    Panel: React.FC<PanelProps>
    AggregatePanel: React.ForwardRefExoticComponent<AggregatePanelProps & React.RefAttributes<PanelMethods>>
}

/**
 * Render the results of a search as a simple list of components.
 *
 * Provide your own component to render each result (e.g. as table rows, Kanban cards, etc).
 *
 * @deprecated To be replaced since this is no longer necessary - search results are available directly off of the useSearch() hook so a wrapping component no longer makes sense.
 */
const Results: React.FC<Props> & IResultsComposition = ({
    children
}) => {
    const data = useContext(Context);
    const results = data.results;

    return (
        <div className="search-results">
            {React.cloneElement(children, { results })}
        </div>
    );
}

Results.Mapper = Mapper;
Results.Panel = Panel;
Results.AggregatePanel = AggregatePanel;

export default Results;

import React, { useContext } from 'react';
import { Context } from '..';

import get from 'lodash/get';

import Mapper, { Props as MapperProps } from './Mapper';
import Panel, { Props as PanelProps } from './Panel';
import AggregatePanel, { Props as AggregatePanelProps } from './AggregatePanel';

export type Props = {
    /**
     * A **single** React Element Component that will receive 
     * the results array
     */
    children: React.ReactElement;

    /**
     * Path to results array within data object - defaults to
     * 'results'
     */
    resultsPath?: string;
}

export interface IResultsComposition {
    Mapper: React.FC<MapperProps>
    Panel: React.FC<PanelProps>
    AggregatePanel: React.FC<AggregatePanelProps>
}

/**
 * Render the results of a search as a simple list of components. 
 * 
 * Provide your own component to render each result (e.g. as table rows, Kanban cards, etc).
 */
const Results: React.FC<Props> & IResultsComposition = ({
    children,
    resultsPath = 'search.results'
}) => {
    const data = useContext(Context);

    const results = [''];


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

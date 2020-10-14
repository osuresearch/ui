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

// Because I can't write a simple recursive function, apparently: https://stackoverflow.com/a/39596586
function FindInObjByKey(obj: { [key: string]: any }, key: string): any {
    let result;

    for (let property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (property === key) {
                return obj[key]; // returns the value
            }
            else if (typeof obj[property] === "object") {
                // Go deeper in an object
                result = FindInObjByKey(obj[property], key);

                if (typeof result !== "undefined") {
                    return result;
                }
            }
        }
    }
}

/**
 * Render the results of a search as a simple list of components. 
 * 
 * Provide your own component to render each result (e.g. as table rows, Kanban cards, etc).
 */
const Results: React.FC<Props> & IResultsComposition = ({
    children
}) => {
    const data = useContext(Context);

    // Locate the (possibly nested) results array in the data object
    const results = FindInObjByKey(data, 'results');

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

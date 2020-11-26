import React, { useState, useEffect } from 'react';
import { SearchDriver } from '../..';
import useSearch from '../../hooks/useSearch';

import AutoComplete, { Props as AutoCompleteProps, SearchMethods } from './AutoComplete';
import Results, { Props as ResultsProps, IResultsComposition } from './Results';
import Mapper from './Results/Mapper';
import Panel from './Results/Panel';
import AggregatePanel from './Results/AggregatePanel';
import Error, { Props as ErrorProps } from './Error';
import Empty, { Props as EmptyProps } from './Empty';

type Props = {
    /** SearchProvider `id` to use when manipulating search data */
    provider: string

    /** The API integration driver to submit search data */
    driver: SearchDriver

    /** Children are required for this component. */
    children: React.ReactNode
};

interface ISearchComposition {
    AutoComplete: React.ForwardRefExoticComponent<AutoCompleteProps & React.RefAttributes<SearchMethods>>
    Results: React.FC<ResultsProps> & IResultsComposition
    Error: React.FC<ErrorProps>
    Empty: React.FC<EmptyProps>
}

interface ISearchContext {
    loading: boolean
    error?: string
    results?: any[]
}

export const Context = React.createContext<ISearchContext>({} as ISearchContext);

/**
 * Composite component that handles performing searches with a provided `driver`
 * and displaying the results of each search.
 *
 * Drivers will typically execute a search whenever search data changes (terms, filters, or sorting).
 * For more information on how each driver executes a search, see their respective documentation.
 */
const Search: React.FC<Props> & ISearchComposition = ({ provider, driver, children }) => {
    const [data, setData] = useState<ISearchContext>({ loading: true });
    
    // TODO: Remove this component. Unnecessary.

    const DriverComponent = driver;
    return (
        <Context.Provider value={data}>
            <DriverComponent provider={provider} />
            {children}
        </Context.Provider>
    )
}

Search.AutoComplete = AutoComplete;
Search.Results = Results;
Search.Results.Mapper = Mapper;
Search.Results.Panel = Panel;
Search.Results.AggregatePanel = AggregatePanel;
Search.Error = Error;
Search.Empty = Empty;

export default Search;

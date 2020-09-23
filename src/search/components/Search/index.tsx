import React, { useState } from 'react';
import { SearchDriver } from '../..';

import Results, { Props as ResultsProps } from './Results';
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
    Results: React.FC<ResultsProps>
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

    const DriverComponent = driver;
    return (
        <Context.Provider value={data}>
            <DriverComponent provider={provider} updateSearchData={setData} />
            {children}
        </Context.Provider>
    )
}

Search.Results = Results;
Search.Error = Error;
Search.Empty = Empty;

export default Search;

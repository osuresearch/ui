import React, { useState } from 'react';
import { SearchDriver } from '../..';

import Results, { Props as ResultsProps } from './Results';
import Error from './Error';
import Empty from './Empty';

type Props = {
    id: string
    driver: SearchDriver
};

interface ISearchComposition {
    Results: React.FC<ResultsProps>
    Error: React.FC
    Empty: React.FC
}

type SearchData = {
    loading: boolean
    error?: string
    results?: any[]
}

const EmptySearchData: SearchData = {
    loading: true
};

export const Context = React.createContext<SearchData>(EmptySearchData);

const Search: React.FC<Props> & ISearchComposition = ({ id, driver, children }) => {
    const [data, setData] = useState<SearchData>(EmptySearchData);

    const DriverComponent = driver;
    return (
        <Context.Provider value={data}>
            <DriverComponent id={id} updateSearchData={setData} />
            {children}
        </Context.Provider>
    )
}

Search.Results = Results;
Search.Error = Error;
Search.Empty = Empty;

export default Search;

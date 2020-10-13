import React from 'react';
import { SearchDriver } from '../..';
import { Props as AutoCompleteProps } from './AutoComplete';
import { Props as ResultsProps } from './Results';
import { Props as MapperProps } from './Results/Mapper';
import { Props as PanelProps } from './Results/Panel';
import { Props as AggregatePanelProps } from './Results/AggregatePanel';
import { Props as ErrorProps } from './Error';
import { Props as EmptyProps } from './Empty';
declare type Props = {
    /** SearchProvider `id` to use when manipulating search data */
    provider: string;
    /** The API integration driver to submit search data */
    driver: SearchDriver;
    /** Children are required for this component. */
    children: React.ReactNode;
};
interface ISearchComposition {
    AutoComplete: React.ForwardRefExoticComponent<AutoCompleteProps>;
    Results: React.FC<ResultsProps> & {
        Mapper?: React.FC<MapperProps>;
        Panel?: React.FC<PanelProps>;
        AggregatePanel?: React.FC<AggregatePanelProps>;
    };
    Error: React.FC<ErrorProps>;
    Empty: React.FC<EmptyProps>;
}
interface ISearchContext {
    loading: boolean;
    error?: string;
    results?: any[];
}
export declare const Context: React.Context<ISearchContext>;
/**
 * Composite component that handles performing searches with a provided `driver`
 * and displaying the results of each search.
 *
 * Drivers will typically execute a search whenever search data changes (terms, filters, or sorting).
 * For more information on how each driver executes a search, see their respective documentation.
 */
declare const Search: React.FC<Props> & ISearchComposition;
export default Search;
//# sourceMappingURL=index.d.ts.map
import React, { createContext } from 'react';

import Active, { Props as ActiveProps } from './Active';
import Terms, { Props as TermsProps } from './Terms';
import Group, { Props as GroupProps } from './Group';
import OneOf, { Props as OneOfProps } from './OneOf';
import AnyOf, { Props as AnyOfProps } from './AnyOf';
import Toggle, { Props as ToggleProps } from './Toggle';
import Match, { Props as MatchProps } from './Match';
import More, { Props as MoreProps } from './More';
import Toggles, { Props as TogglesProps } from './Toggles';
import SortBy, { Props as SortByProps } from './SortBy';
import useSearchProvider from '../../hooks/useSearchProvider';
import { ISearchContext } from '../..';

type Props = {
    /** SearchProvider `id` to use when manipulating search data */
    provider: string
};

interface IFiltersComposition {
    Active: React.FC<ActiveProps>
    Terms: React.FC<TermsProps>
    Group: React.FC<GroupProps>
    OneOf: React.FC<OneOfProps>
    AnyOf: React.FC<AnyOfProps>
    Toggles: React.FC<TogglesProps>
    Toggle: React.FC<ToggleProps>
    Match: React.FC<MatchProps>
    More: React.FC<MoreProps>
    SortBy: React.FC<SortByProps>
}

interface IFiltersContext extends ISearchContext<unknown> {
    // Anything filter-tree specific goes here.
}

// Context shared by all children of <Filters>
export const Context = createContext<IFiltersContext>({} as IFiltersContext);

/**
 * Set of UI components that control the terms and filters for a search.
 *
 * At the top level `<Filters>` binds to a named search via `useSearchProvider()`
 * and all the child components automatically update terms and filters of
 * that search.
 */
const Filters: React.FC<Props> & IFiltersComposition = ({ provider, children }) => {
    // This uses a search provider and shares the same provider with all child
    // components, without each one needing to also hook the provider.
    // const search = useSearchProvider(provider);
    const search = useSearchProvider(provider);

    return (
        <Context.Provider value={search}>
            <div className="filters">
                {children}
            </div>
        </Context.Provider>
    );
}

Filters.Terms = Terms;
Filters.Group = Group;
Filters.OneOf = OneOf;
Filters.AnyOf = AnyOf;
Filters.Toggles = Toggles;
Filters.Toggle = Toggle;
Filters.Match = Match;
Filters.Active = Active;
Filters.More = More;
Filters.SortBy = SortBy;

export default Filters;

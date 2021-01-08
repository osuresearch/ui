import React from 'react';
import './index.scss';
import { Props as ActiveProps } from './Active';
import { Props as TermsProps } from './Terms';
import { Props as GroupProps } from './Group';
import { Props as OneOfProps } from './OneOf';
import { Props as AnyOfProps } from './AnyOf';
import { Props as ToggleProps } from './Toggle';
import { Props as MatchProps } from './Match';
import { Props as MoreProps } from './More';
import { Props as TogglesProps } from './Toggles';
import { Props as SortByProps } from './SortBy';
import { ISearchContext } from '../..';
declare type Props = {
    /** SearchProvider `id` to use when manipulating search data */
    provider: string;
};
interface IFiltersComposition {
    Active: React.FC<ActiveProps>;
    Terms: React.FC<TermsProps>;
    Group: React.FC<GroupProps>;
    OneOf: React.FC<OneOfProps>;
    AnyOf: React.FC<AnyOfProps>;
    Toggles: React.FC<TogglesProps>;
    Toggle: React.FC<ToggleProps>;
    Match: React.FC<MatchProps>;
    More: React.FC<MoreProps>;
    SortBy: React.FC<SortByProps>;
}
interface IFiltersContext extends ISearchContext<unknown> {
}
export declare const Context: React.Context<IFiltersContext>;
/**
 * Set of UI components that control the terms and filters for a search.
 *
 * At the top level `<Filters>` binds to a named search via `useSearchProvider()`
 * and all the child components automatically update terms and filters of
 * that search.
 */
declare const Filters: React.FC<Props> & IFiltersComposition;
export default Filters;
//# sourceMappingURL=index.d.ts.map
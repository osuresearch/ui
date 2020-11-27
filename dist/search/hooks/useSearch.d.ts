import { ISearchContext } from '..';
export interface useSearchRetval extends ISearchContext {
}
/**
 * Primary hook for interfacing with a named search.
 *
 * Allows multiple components to share common search data.
 *
 * @author Chase McManning <mcmanning.1@osu.edu>
 */
export default function useSearch(provider: string): useSearchRetval;
//# sourceMappingURL=useSearch.d.ts.map
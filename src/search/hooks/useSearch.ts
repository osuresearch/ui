
import { useContext } from 'react';
import { ISearchContext } from '..';
import { getDynamicContext } from '../SearchContext';

/**
 * Primary hook for interfacing with a named search.
 *
 * Allows multiple components to share common search data
 */
export default function useSearch<TResult>(provider: string): ISearchContext<TResult> {
    const context = useContext(getDynamicContext<TResult>(provider));

    // There used to be work here, it's gone now. This just
    // makes it easier to provide the dynamic context without
    // letting other developers know about the inner workings
    // of retrieving a dynamic context (and so this can be
    // updated in the future without breaking apps, of course)

    return context;
}

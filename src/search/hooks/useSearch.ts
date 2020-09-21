
import { useContext } from 'react';
import { ISearchContext, getDynamicContext } from '../index';

export interface useSearchRetval extends ISearchContext { 
    // Nothing extra. Yet.
}

/**
 * Primary hook for interfacing with a named search.
 * 
 * Allows multiple components to share common search data.
 * 
 * @author Chase McManning <mcmanning.1@osu.edu>
 */
export default function useSearch(id: string): useSearchRetval {
    const context = useContext(getDynamicContext(id));
    
    // There used to be work here, it's gone now. This just 
    // makes it easier to provide the dynamic context without
    // letting other developers know about the inner workings
    // of retrieving a dynamic context (and so this can be
    // updated in the future without breaking apps, of course)

    return context;
}

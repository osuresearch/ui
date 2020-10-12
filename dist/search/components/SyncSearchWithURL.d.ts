import React from 'react';
declare type Props = {
    /** SearchProvider `id` to sync the URL parameters */
    provider: string;
    /**
     * Query key prefix for every query key. This allows multiple sync
     * components to coexist for different search providers as long
     * as each one uses a different prefix.
     *
     * Suggest you keep this to one or two characters.
     */
    prefix?: string;
};
/**
 * Allows a user to bookmark or share searches for an application.
 *
 * When the search data (terms, filters, sorting) changes, the current address
 * is updated via the `History.ReplaceState` API to contain a serialized copy
 * of the search data.
 *
 * If the user bookmarks (or shares) the URL, the same search data will
 * be loaded on next visit.
 *
 * This also means you need to safely handle access-based search filtering on the
 * backend. E.g. if an admin shares a link that contains an `adminOnlyData`
 * search filter, then the user they shared that with may also potentially send
 * that filter to the server as well.
 */
declare const SyncSearchWithURL: React.FC<Props>;
export default SyncSearchWithURL;
//# sourceMappingURL=SyncSearchWithURL.d.ts.map
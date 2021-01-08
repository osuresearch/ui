import React from 'react';
export interface Props {
    /** Resource from the backend to render for this result entry */
    resource: {
        id: string;
        attributes: {
            name: string;
        };
    };
    /**
     * Callable provided by `Search` to update the
     * component when this result is selected
     */
    onSelect(key: string, value: string): void;
}
/**
 * Default implementation for a single result from `Search`.
 *
 * If you want to customize the result renderer, you need to
 * create your own variation of this component.
 */
declare const SearchResult: React.FC<Props>;
export default SearchResult;
//# sourceMappingURL=index.d.ts.map
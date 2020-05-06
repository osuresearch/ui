import React from 'react';
export interface Props {
    /** Resource from the backend to render for this result entry */
    resource: {
        id: string;
        attributes: {
            name: string;
            username: string;
        };
    };
    /**
     * Callable provided by `Search` to update the
     * component when this result is selected
     */
    onSelect(key: string, value: string): void;
}
/**
 * Search result component for looking up people in the University.
 *
 * Includes their username alongside each result for better identifying
 * the correct result when multiple people with the same name are returned.
 */
declare const PersonSearchResult: React.FC<Props>;
export default PersonSearchResult;
//# sourceMappingURL=index.d.ts.map
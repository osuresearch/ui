
import React from 'react';

export interface Props {
    /** Resource from the backend to render for this result entry */
    resource: {
        id: string;
        attributes: {
            name: string;
        }
    }

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
 *
 * @deprecated Use the `Lookup` form component. Will be removed in `@oris/ui^5.0`
 */
const SearchResult: React.FC<Props> = ({
    resource,
    onSelect
}) => (
    <button className="dropdown-item" type="button"
        onClick={() => onSelect(resource.id, resource.attributes.name)}>
        {resource.attributes.name}
    </button>
);

export default SearchResult;

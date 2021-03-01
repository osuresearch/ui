
import React from 'react';

export interface Props {
    /** Resource from the backend to render for this result entry */
    resource: {
        id: string;
        attributes: {
            name: string;
            username: string;
        }
    }

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
 *
 * @deprecated Use the `Lookup` form component. Will be removed in `@ORIS/ui^5.0`
 */
const PersonSearchResult: React.FC<Props> = ({
    resource,
    onSelect
}) => (
    <button className="dropdown-item" type="button"
        onClick={() => onSelect(resource.id, resource.attributes.name)}>
        {resource.attributes.name}
        <small className="text-muted pull-right pl-2">
            ({resource.attributes.username})
        </small>
    </button>
);

export default PersonSearchResult;

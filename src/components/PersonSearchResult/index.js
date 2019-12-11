
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Search result component for looking up people in the University.
 * Includes their username alongside each result for better identifying
 * the correct result when multiple people with the same name are returned.
 */
const PersonSearchResult = (props) => {
    // Extract a key/value from the resource to display in the input field once selected
    const onClick = () => props.onSelect(props.resource.id, props.resource.attributes.name);

    return (
        <button className="dropdown-item" type="button" onClick={onClick}>
            {props.resource.attributes.name}
            <small className="text-muted pull-right pl-2">
                ({props.resource.attributes.username})
            </small>
        </button>
    );
};

PersonSearchResult.propTypes = {
    /**
     * JSON:API resource this search result displays
     */
    resource: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        attributes: PropTypes.shape({
            name: PropTypes.string.isRequired
        })
    }).isRequired,

    /**
     * Callable provided by `Search` to update the
     * component when this result is selected
     */
    onSelect: PropTypes.func.isRequired
};

export default PersonSearchResult;

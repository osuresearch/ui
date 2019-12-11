
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Default implementation for a single result from `Search`. If you want to customize the
 * result renderer, you need to create your own variation of this component.
 */
const SearchResult = (props) => {
    // Extract a key/value from the resource to display in the input field once selected
    const onClick = () => props.onSelect(props.resource.id, props.resource.attributes.name);

    return (
        <button className="dropdown-item" type="button" onClick={onClick}>
            {props.resource.attributes.name}
        </button>
    );
};

SearchResult.propTypes = {
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

export default SearchResult;

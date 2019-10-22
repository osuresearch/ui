
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Default implementation for a single result from `Search`. If you want to customize the
 * result renderer, you need to create your own variation of this component.
 */
class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        // Call parent onSelect with the selected key/value pair
        this.props.onSelect(
            this.props.resource.id,
            this.props.resource.attributes.name
        );
    }

    render() {
        const { resource } = this.props;

        return (
            <button className="dropdown-item" type="button" onClick={this.onClick}>
                {resource.attributes.name}
            </button>
        );
    }
}

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

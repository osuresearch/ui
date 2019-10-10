
import React from 'react';
import PropTypes from 'prop-types';
// TODO: Probably add react-router and turn the items into NavLinks.
// I don't really see us using this outside of the router - since
// tabs should also drive the URL to send the user back to the
// right tab on page reload.

/**
 * Child entry of a TabList. Renders as either a `<ul>` tab item or a dropdown item
 * depending on where this child needs to be (in the list or the overflow dropdown)
 */
class TabItem extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);

        this.ref = React.createRef();
    }

    componentDidUpdate() {
        if (this.ref.current && this.props.onBoundingRect) {
            const rect = this.ref.current.getBoundingClientRect();
            this.props.onBoundingRect(this.props.index, rect);
        }
    }

    componentDidMount() {
        if (this.ref.current && this.props.onBoundingRect) {
            const rect = this.ref.current.getBoundingClientRect();
            this.props.onBoundingRect(this.props.index, rect);
        }
    }

    /**
     * Override anchor target if we have an onClick handler
     */
    onClick(e) {
        if (this.props.onClick) {
            e.preventDefault();
            this.props.onClick();
        }
    }

    render() {
        const { active, href, asDropdownItem } = this.props;

        let anchorClassNames = 'nav-link';
        if (asDropdownItem) {
            anchorClassNames = 'dropdown-item';
        }

        if (active) {
            anchorClassNames += ' active';
        }

        if (asDropdownItem) {
            return (
                <a className={anchorClassNames} href={href} onClick={this.onClick}>{this.props.children}</a>
            );
        }

        return (
            <li className="nav-item" ref={this.ref}>
                <a className={anchorClassNames} href={href} onClick={this.onClick}>{this.props.children}</a>
            </li>
        );
    }
}

TabItem.propTypes = {
    active: PropTypes.bool,

    /**
     * Link that each tab will send the user. If not supplied, use `onClick`
     */
    href: PropTypes.string,

    /**
     * Click event handler for the tab. Overrides `href` if supplied
     */
    onClick: PropTypes.func,

    // Internal use properties required by TabList

    /**
     * Parent's client bounds for overflow detection
     * @ignore
     */
    containerRect: PropTypes.object,

    /**
     * Report the client bounding rect of this component after any updates
     * @ignore
     */
    onBoundingRect: PropTypes.func,

    /**
     * Render this item as a dropdown item instead of a list item
     * @ignore
     */
    asDropdownItem: PropTypes.bool,

    /**
     * Slot index in the parent, based on sibling order
     * @ignore
     */
    index: PropTypes.number
};

TabItem.defaultProps = {
    active: false,
    href: '#'
};

export default TabItem;

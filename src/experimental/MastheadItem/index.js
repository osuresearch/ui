
import React from 'react';
import PropTypes from 'prop-types';

import ExternalLink from '../../controls/ExternalLink';
import Icon from '../../generic/Icon';

import './index.scss';

/**
 * "At a glance" information presented within a Masthead
 */
class MastheadItem extends React.Component {
    constructor(props) {
        super(props);

        this.popper = React.createRef();
    }

    componentDidMount() {
        // Manual initialization of the jQuery plugin Bootstrap requires for popovers
        window.$(this.popper.current).popover({
            // ... etc
        });
    }

    render() {
        const { title, content, href, fill, extraContent } = this.props;

        let classNames = "masthead-item";

        if (fill) {
            classNames += " masthead-item-fill";
        }

        return (
            <div className={classNames}>
                <div className="masthead-item-title">{title}</div>

                {extraContent &&
                    <button
                        className="btn-link"
                        data-container="body"
                        data-toggle="popover"
                        data-placement="bottom"
                        data-content={extraContent}
                        ref={this.popper}
                    >
                        <Icon name="caret-down" /> {content}
                    </button>
                }

                {(!extraContent && href) &&
                    <ExternalLink href={href}>{content}</ExternalLink>
                }

                {(!extraContent && !href) && content}
            </div>
        );
    }
}

MastheadItem.propTypes = {
    /** Display title for the item */
    title: PropTypes.string.isRequired,

    /** Content within the list item */
    content: PropTypes.string.isRequired,

    /** Optional **external** link */
    href: PropTypes.string,

    /**
     * Should this item fill the remaining space.
     * You will typically want at least one item to fill.
     */
    fill: PropTypes.bool.isRequired,

    /**
     * Optional extra content to display if the indended content
     * for the item won't fit in the bar. `content` will become a
     * link to display the additional content when clicked.
     *
     * Cannot be combined with `href`.
     */
    extraContent: PropTypes.string,
};

MastheadItem.defaultProps = {
    fill: false
};

export default MastheadItem;

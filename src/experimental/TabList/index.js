
import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../component/Icon';

class TabList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            boundingClientRect: null,
            lowestOverflowIndex: 9999
        };

        this.onChildBoundingRect = this.onChildBoundingRect.bind(this);
        // this.onResize = this.debounce(this.onResize.bind(this), 100, true);
        this.onResize = this.onResize.bind(this);

        this.ref = React.createRef();

        this.childRects = [];
    }

    /**
     * Basic callback-based debounce function
     *
     * Author: http://davidwalsh.name/javascript-debounce-function
     */
    // debounce(func, wait, immediate) {
    //     let timeout;
    //     return function() {
    //         const context = this;
    //         const args = arguments;
    //         const later = function() {
    //             timeout = null;
    //             if (!immediate) func.apply(context, args);
    //         };
    //         const callNow = immediate && !timeout;
    //         clearTimeout(timeout);
    //         timeout = setTimeout(later, wait);
    //         if (callNow) func.apply(context, args);
    //     };
    // };

    componentDidMount() {
        // Watch for window resize events to reflow tab items
        window.addEventListener('resize', this.onResize);

        // Since all the children have mounted and we should have their client rects,
        // check for overflow of any of the children and trigger a re-render if so.
        this.checkForOverflow();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    checkForOverflow() {
        // Test if any children are rendered beyond our bounding rect
        const bounds = this.ref.current.getBoundingClientRect();

        let overflowIndex = -1;
        for (let i = 0; i < this.childRects.length; i++) {
            if (this.childRects[i] !== undefined && this.childRects[i].right > bounds.right) {
                overflowIndex = i;
                break;
            }
        }

        if (overflowIndex >= 0) {
            this.setState({ overflowIndex });
        }
    }

    onChildBoundingRect(index, rect) {
        this.childRects[index] = rect;
    }

    /**
     * On window resize, update our viewport rect and reset overflow index.
     *
     * As we re-render children, a new overflow index will be determined and
     * a second re-render will be triggered to collapse overflowed children
     * into a dropdown.
     */
    onResize() {
        this.checkForOverflow();
    }

    render() {
        const { vertical } = this.props;

        let classNames = 'nav';
        if (vertical) {
            classNames += ' flex-column';
        } else {
            classNames += ' nav-tabs';
        }

        // Custom render each child with a forced ref
        const children = React.Children.toArray(this.props.children);
        const overflowChildren = [];

        const renderChildren = () => children.map(
            (child, idx) => {
                const isOverflow = idx >= this.state.overflowIndex;
                const clone = React.cloneElement(child, {
                    index: idx,
                    asDropdownItem: isOverflow,
                    onBoundingRect: this.onChildBoundingRect
                });

                if (isOverflow) {
                    overflowChildren.push(clone);
                    return null;
                }

                return clone;
            }
        );

        return (
            <nav role="navigation" ref={this.ref}>
                <ul className={classNames}>
                    {!vertical && renderChildren()}
                    {vertical && this.props.children}

                    {overflowChildren.length > 0 &&
                        <li className="nav-item dropdown">
                            <button className="btn btn-link nav-link dropdown-toggle tablist-dropdown"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            ><Icon name="ellipsis-h">Show more</Icon></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                {overflowChildren}
                            </div>
                        </li>
                    }
                </ul>
            </nav>
        );
    }
}

TabList.propTypes = {
    /**
     * Lay the tabs out vertically instead of horizontal
     */
    vertical: PropTypes.bool,
};

TabList.defaultProps = {
    vertical: false
};

export default TabList;


import React, { useState, useRef, useLayoutEffect } from 'react';

import Icon from '../Icon';

export interface Props {
    
}

const TabList: React.FC<Props> = ({ children }) => {
    const [overflowIndex, setOverflowIndex] = useState(9999);
    const ref = useRef<HTMLElement>(null);

    const childRects: DOMRect[] = [];

    const checkForOverflow = () => {
        if (!ref.current) return;

        // Test if any children are rendered beyond our bounding rect
        const bounds = ref.current.getBoundingClientRect();

        let lowestOverflowIdx = -1;
        for (let i = 0; i < childRects.length; i++) {
            if (childRects[i] !== undefined && childRects[i].right > bounds.right) {
                lowestOverflowIdx = i;
                break;
            }
        }

        if (lowestOverflowIdx >= 0) {
            setOverflowIndex(lowestOverflowIdx);
        }    
    };

    /**
     * On window resize, update our viewport rect and reset overflow index.
     *
     * As we re-render children, a new overflow index will be determined and
     * a second re-render will be triggered to collapse overflow children
     * into a dropdown.
     * 
     * useLayoutEffect is used here to perform the first run *after*
     * all children have mounted.
     */
    useLayoutEffect(() => {
        window.addEventListener('resize', checkForOverflow);
        checkForOverflow();

        return () => {
            window.removeEventListener('resize', checkForOverflow);
        };
    }, []);

    const onChildBoundingRect = (index: number, rect: DOMRect) => {
        childRects[index] = rect;
    }

    // Custom render each child with a forced ref
    const childrenArr = React.Children.toArray(children);
    const overflowChildren: any[] = []; // TODO: Typed

    const renderChildren = () => childrenArr.map(
        (child, idx) => {
            const isOverflow = idx >= overflowIndex;
            if (React.isValidElement(child)) {
                // TODO: Test if it's a TabItem, ignore the rest.
                const clone = React.cloneElement(child, {
                    index: idx,
                    asDropdownItem: isOverflow,
                    onBoundingRect: onChildBoundingRect
                });

                if (isOverflow) {
                    overflowChildren.push(clone);
                    return null;
                }

                return clone;
            }
        }
    );

    return (
        <nav role="navigation" ref={ref}>
            <ul className="nav nav-tabs">
                {renderChildren()}

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

export default TabList;

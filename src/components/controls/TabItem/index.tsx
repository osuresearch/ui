
import React, { useRef, useLayoutEffect, MouseEvent } from 'react';

export interface Props {
    active?:  boolean;

    /**
     * Link that each tab will send the user. If not supplied, use `onClick`
     */
    href?: string;

    /**
     * Click event handler for the tab. Overrides `href` if supplied
     */
    onClick?(): void;

    // Internal use properties required by TabList

    /**
     * Parent's client bounds for overflow detection
     * @ignore
     */
    // containerRect: object;

    /**
     * Report the client bounding rect of this component after any updates
     * @ignore
     */
    onBoundingRect(index: number, rect: object): void;

    /**
     * Render this item as a dropdown item instead of a list item
     * @ignore
     */
    asDropdownItem: boolean;

    /**
     * Slot index in the parent, based on sibling order
     * @ignore
     */
    index: number;
}

/**
 * Child entry of a TabList. Renders as either a `<li>` tab item or a dropdown item
 * depending on where this child needs to be (in the list or the overflow dropdown)
 */
const TabItem: React.FC<Props> = ({
    children,
    active = false,
    href,
    onClick,
    onBoundingRect,
    asDropdownItem,
    index
}) => {
    const ref = useRef<HTMLLIElement>(null);

    const internalOnClick = (e: MouseEvent) => {
        if (onClick) {
            e.preventDefault();
            onClick();
        }
    };

    useLayoutEffect(() => {
        if (ref.current && onBoundingRect) {
            const rect = ref.current.getBoundingClientRect();
            onBoundingRect(index, rect);
        }
    }, [ref, onBoundingRect, index]);


    let anchorClassNames = 'nav-link';
    if (asDropdownItem) {
        anchorClassNames = 'dropdown-item';
    }

    if (active) {
        anchorClassNames += ' active';
    }

    if (asDropdownItem) {
        return (
            <a className={anchorClassNames} href={href} 
                onClick={internalOnClick}>{children}</a>
        );
    }

    return (
        <li className="nav-item" ref={ref}>
            <button className={anchorClassNames} onClick={onClick}>
                {children}
            </button>
        </li>
    );
}

export default TabItem;

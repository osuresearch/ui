import React from 'react';
export interface Props {
    active?: boolean;
    /**
     * Link that each tab will send the user. If not supplied, use `onClick`
     */
    href?: string;
    /**
     * Click event handler for the tab. Overrides `href` if supplied
     */
    onClick?(): void;
    /**
     * Parent's client bounds for overflow detection
     * @ignore
     */
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
declare const TabItem: React.FC<Props>;
export default TabItem;
//# sourceMappingURL=index.d.ts.map
import React from 'react';
import { TabProps } from './Tab';
interface IAccordionComposition {
    Tab: React.FC<TabProps>;
}
declare type Props = {
    /** Unique identifier of the element. */
    id?: string;
    /** Active index or indexes of the element. Use an array of numbers for multiple indexes. the "multiple" prop must be set to true in order to specify multiple indexes. */
    activeIndex?: any;
    /** Style class of the element. */
    className?: string;
    /** Inline style of the element. */
    style?: object;
    /** When enabled, multiple tabs can be activated at the same time. */
    multiple?: boolean;
    /** Icon of a collapsed tab. */
    expandIcon?: string;
    /** Icon of an expanded tab. */
    collapseIcon?: string;
    /** Callback to invoke when a tab gets expanded. */
    onTabOpen?(e: {
        originalEvent: Event;
        index: number;
    }): void;
    /** Callback to invoke when an active tab is collapsed by clicking on the header. */
    onTabClose?(e: {
        originalEvent: Event;
        index: number;
    }): void;
    /** Callback to invoke when state of the accordion changes. */
    onTabChange?(e: {
        originalEvent: Event;
        index: number;
    }): void;
};
declare const Accordion: React.FC<Props> & IAccordionComposition;
export default Accordion;
//# sourceMappingURL=index.d.ts.map
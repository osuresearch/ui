
// NOT A REAL COMPONENT
// THIS FILE IS PURELY FOR DOCUMENTATION PURPOSES
import React from 'react';

// Typically we would just extend the AccordionProps interface, but PrimeReact did not include prop documentation in their interfaces
// Documentation from https://www.primefaces.org/primereact/showcase/#/accordion
type Props = {
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
    onTabOpen?(e: { originalEvent: Event, index: number }): void;

    /** Callback to invoke when an active tab is collapsed by clicking on the header. */
    onTabClose?(e: { originalEvent: Event, index: number }): void;

    /** Callback to invoke when state of the accordion changes. */
    onTabChange?(e: { originalEvent: Event, index: number }): void;
}

/** 
 * Accordion groups a collection of contents in tabs.
 * 
 * Accordion is part of the PrimeReact package, which is included in ORIS/UI. 
 * 
 * [Review the full documentation at the PrimeReact demo website](https://www.primefaces.org/primereact/showcase/#/accordion).
 */
class Accordion extends React.Component<Props, any> {
    static defaultProps = {
        multiple: false,
        expandIcon: 'pi pi-chevron-right',
        collapseIcon: 'pi pi-chevron-down'
    }

    static componentPathLine = `import { Accordion, AccordionTab } from 'primereact/accordion'`;

    render() {
        return null;
    }
}

export default Accordion;
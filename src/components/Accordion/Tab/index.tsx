import React from 'react';
import { AccordionTab } from 'primereact/accordion';

// Typically we would just extend the AccordionTabProps interface, but PrimeReact did not include prop documentation in their interfaces
// Documentation from https://www.primefaces.org/primereact/showcase/#/accordion
export type TabProps = {
    /** Orientation of tab headers. */
    header?: string;

    /** Whether the tab is disabled. */
    disabled?: boolean;

    /** Inline style of the tab header. */
    headerStyle?: object;

    /** Style class of the tab header. */
    headerClassName?: string;

    /** Template of the tab header. */
    headerTemplate?: any;

    /** Inline style of the tab content. */
    contentStyle?: object;

    /** Style class of the tab content. */
    contentClassName?: string;
}

export const Tab: React.FC<TabProps> = (props) => {
    return (
        <AccordionTab {...props}>
            {props.children}
        </AccordionTab>
    )
}
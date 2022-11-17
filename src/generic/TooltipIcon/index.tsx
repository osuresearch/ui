import React, { useEffect, useRef } from 'react';
import { Tooltip } from 'primereact/tooltip';

type Props = {
    /** Unique ID for this tooltip */
    id: string

    /** Tooltip content */
    children: React.ReactNode

    /** Additional class names to apply to the tooltip container */
    className?: string

    /**
     * Text to display before the tooltip icon.
     *
     * This text will also be encapsulated within the hover and keyboard
     * focus events for better accessibility.
     */
    label?: string
}

/**
 * Additional information collapsed into a tooltip for an icon.
 *
 * Information panel will be visible on hover or keyboard focus.
 */
const TooltipIcon: React.FC<Props> = ({ id, children, className = '', label = '' }) => (
    <>

        {/* Note that the PrimeReact version we use doesn't support event="both"
            so we add two separate tooltip implementations with the same content
            to respond to both events. Will be fixed on a future PrimeReact update. */}
        <Tooltip
            target={'#' + id}
            aria-hidden={true}
            className={className}
            event='focus'
            autoHide={true}
        >
            {children}
        </Tooltip>

        <Tooltip
            target={'#' + id}
            aria-hidden={true}
            className={className}
            event='hover'
            autoHide={false}
        >
            {children}
        </Tooltip>
        <span tabIndex={0} id={id}>
            {label}
            <span className="fa-stack tooltip-icon"
                aria-hidden={true}
                data-pr-position="right"
            >
                <i className="fa fa-circle-thin fa-stack-2x"></i>
                <i className="fa fa-info fa-stack-1x"></i>
            </span>

            <span className="sr-only">
                {children}
            </span>

        </span>
    </>
);

export default TooltipIcon;

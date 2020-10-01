import React, { useContext } from 'react';
import { Context } from '..';
import { Chips } from 'primereact/chips';
import TooltipOptions from 'primereact/components/tooltip/TooltipOptions';

export type InputProps = {
    /** Will inherit from parent Chips component */
    id?: string;

    /** Will inherit from parent Chips component */
    name?: string;

    /** Advisory information to display on input. */
    placeholder?: string;

    /** Values of the component */
    value?: string[];

    /** Maximum number of entries allowed. */
    max?: number;

    /** Read only */
    readOnly?: boolean;

    /** Additional classes */
    className?: string;

    /** Content of the tooltip. */
    tooltip?: any;

    /** Configuration of the tooltip, refer to the tooltip documentation for more information. */
    tooltipOptions?: TooltipOptions;

    /** Establishes relationships between the component and label(s) where its value should be one or more element IDs. */
    ariaLabelledBy?: string;

    /** Separator char to add an item when pressed in addition to the enter key. Currently only possible value is "," */
    separator?: ',';

    /** Whether to allow duplicate values or not. */
    allowDuplicate?: boolean;

    /** Template function to return the content of a chip. */
    itemTemplate?(item: any): JSX.Element | undefined;

    /** Callback to invoke when a chip is added. */
    onAdd?(e: { originalEvent: Event, value: any }): void;

    /** Callback to invoke when a chip is removed. */
    onRemove?(e: { originalEvent: Event, value: any }): void;

    /** Callback to invoke when a chip is added or removed. */
    onChange?(e: { originalEvent: Event, value: any, target: { name: string, id: string, value: any } }): void;

    /** Callback to invoke when the component gets focus. */
    onFocus?(event: Event): void;

    /** Callback to invoke when the component loses focus. */
    onBlur?(event: Event): void;
}

export default function Input(props: InputProps) {
    const { bind } = useContext(Context);

    const value = bind.value || props.value;

    const readOnly = bind.readOnly || props.readOnly;

    const classNames = `input-group ${props.className ? props.className : ''} ${bind.error && 'is-invalid'} ${bind.success && 'is-valid'}`;

    return (
        <Chips
            {...props}
            id={bind.id || props.id}
            name={bind.name || props.name}
            className={classNames}
            value={value}
        />
    )
}
import React, { useContext } from 'react';
import { Context } from '..';
import { AutoComplete } from 'primereact/autocomplete';
import TooltipOptions from 'primereact/components/tooltip/TooltipOptions';

export type InputProps = {
    /** Will inherit from parent */
    id?: string;

    /**	Value of the component. */
    value?: string | string[];

    /** Will inherit from parent */
    name?: string;

    /** Type of the input element. */
    type?: string;

    /** An array of suggestions to display. */
    suggestions?: any[];

    /** Field of a suggested object to resolve and display. */
    field?: string;

    /** Maximum height of the suggestions panel. */
    scrollHeight?: string;

    /** Displays a button next to the input field when enabled. */
    dropdown?: boolean;

    /** Specifies the behavior dropdown button. Default "blank" mode sends an empty string and "current" mode sends the input value. */
    dropdownMode?: string;

    /** Specifies if multiple values can be selected. */
    multiple?: boolean;

    /** Minimum number of characters to initiate a search. */
    minLength?: number;

    /** Delay between keystrokes to wait before sending a query. */
    delay?: number;

    /** Additional classes to pass to the wrapping component */
    className?: string;

    /** Additional classes to pass to the input field in the component */
    inputClassName?: string;

    /** Style class of the overlay panel element. */
    panelClassName?: string;

    /** When present, it specifies that the component should be disabled. */
    disabled?: boolean;

    /** Will inherit from parent */
    readOnly?: boolean;

    /** Maximum number of character allows in the input field. */
    maxlength?: number;

    /** Size of the input field. */
    size?: number;

    /** DOM element instance where the overlay panel should be mounted. */
    appendTo?: any;

    /** Content of the tooltip. */
    tooltip?: any;

    /** Configuration of the tooltip, refer to the tooltip documentation for more information. */
    tooltipOptions?: TooltipOptions;

    /** Callback to invoke to search for suggestions. */
    completeMethod?(e: { originalEvent: Event, query: string }): void;

    /** Template of a list item. */
    itemTemplate?: ((data: any) => any | any);

    /** Template of a selected item. */
    selectedItemTemplate?: ((data: any) => any | any);

    /** Callback to invoke when autocomplete value changes. */
    onChange?(e: { originalEvent: Event, value: any, target: { name: string, id: string, value: any } }): void;

    /** Callback to invoke when autocomplete gets focus. */
    onFocus?(event: Event): void;

    /** Callback to invoke when autocomplete loses focus. */
    onBlur?(event: Event): void;

    /** Callback to invoke when a suggestion is selected. */
    onSelect?(e: { originalEvent: Event, value: any }): void;

    /** Callback to invoke when a selected value is removed. */
    onUnselect?(e: { originalEvent: Event, value: any }): void;

    /** Callback to invoke to when dropdown button is clicked. */
    onDropdownClick?(e: { originalEvent: Event, query: string }): void;

    /** Callback to invoke on click. */
    onClick?(event: Event): void;

    /** Callback to invoke on double click. */
    onDblClick?(event: Event): void;

    /** Callback to invoke to when a mouse button is pressed. */
    onMouseDown?(event: Event): void;

    /** Callback to invoke to when a key is released. */
    onKeyUp?(event: Event): void;

    /** Callback to invoke to when a key is pressed. */
    onKeyPress?(event: Event): void;

    /** Callback to invoke on right-click. */
    onContextMenu?(event: Event): void;

    /** Callback to invoke when input is cleared by the user. */
    onClear?(event: Event): void;
}

export default function Input(props: InputProps) {
    const { bind } = useContext(Context);

    const value = bind.value || props.value;

    const readOnly = bind.readOnly || props.readOnly;

    const classNames = `input-group ${props.className ? props.className : ''} ${bind.error && 'is-invalid'} ${bind.success && 'is-valid'}`;

    return (
        <AutoComplete
            {...props}
            inputId={bind.id || props.id}
            name={bind.name || props.name}
            className={classNames}
            value={value}
            readonly={readOnly}
        />
    )
}
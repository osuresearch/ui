import React, { useContext } from 'react';
import { Context } from '..';
import { AutoComplete } from 'primereact/autocomplete';
import TooltipOptions from 'primereact/components/tooltip/TooltipOptions';

export type InputProps = {
    id?: string;
    value?: any;
    name?: string;
    type?: string;
    suggestions?: any[];
    field?: string;
    scrollHeight?: string;
    dropdown?: boolean;
    dropdownMode?: string;
    multiple?: boolean;
    minLength?: number;
    delay?: number;
    style?: object;
    className?: string;
    inputId?: string;
    inputStyle?: object;
    inputClassName?: string;
    panelClassName?: string;
    panelStyle?: object;
    placeholder?: string;
    readonly?: boolean;
    disabled?: boolean;
    maxlength?: number;
    size?: number;
    appendTo?: any;
    tabindex?: number;
    autoFocus?: boolean;
    tooltip?: any;
    tooltipOptions?: TooltipOptions;
    ariaLabelledBy?: string;
    completeMethod?(e: { originalEvent: Event, query: string }): void;
    itemTemplate?: ((data: any) => any | any);
    selectedItemTemplate?: ((data: any) => any | any);
    onChange?(e: { originalEvent: Event, value: any, target: { name: string, id: string, value: any } }): void;
    onFocus?(event: Event): void;
    onBlur?(event: Event): void;
    onSelect?(e: { originalEvent: Event, value: any }): void;
    onUnselect?(e: { originalEvent: Event, value: any }): void;
    onDropdownClick?(e: { originalEvent: Event, query: string }): void;
    onClick?(event: Event): void;
    onDblClick?(event: Event): void;
    onMouseDown?(event: Event): void;
    onKeyUp?(event: Event): void;
    onKeyPress?(event: Event): void;
    onContextMenu?(event: Event): void;
    onClear?(event: Event): void;

    readOnly?: boolean;
}

export default function Input(props: InputProps) {
    const { bind } = useContext(Context);

    const value = bind.value || props.value;

    const readOnly = bind.readOnly || props.readOnly;

    const classNames = `input-group ${props.className ? props.className : ''} ${bind.error && 'is-invalid'} ${bind.success && 'is-valid'}`;

    return (
        <AutoComplete
            {...props}
            id={bind.id || props.id}
            name={bind.name || props.name}
            className={classNames}
            value={value}
        />
    )
}
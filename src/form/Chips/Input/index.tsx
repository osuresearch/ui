import React, { useContext } from 'react';
import { Context } from '..';
import { Chips } from 'primereact/chips';
import TooltipOptions from 'primereact/components/tooltip/TooltipOptions';

interface AddParams {
    originalEvent: React.SyntheticEvent;
    value: any;
}

interface RemoveParams extends AddParams { }

interface ChangeTargetOptions {
    name: string;
    id: string;
    value: any[];
}

interface ChangeParams {
    originalEvent: React.SyntheticEvent;
    value: any[];
    stopPropagation(): void;
    preventDefault(): void;
    target: ChangeTargetOptions;
}

export type InputProps = {
    /** Will inherit from parent Chips component */
    id?: string;

    inputRef?: React.Ref<HTMLInputElement>;

    /** Will inherit from parent Chips component */
    name?: string;

    /** Advisory information to display on input. */
    placeholder?: string;

    /** Value of the component. */
    value?: any[];

    /** Maximum number of entries allowed. */
    max?: number;

    /** When present, it specifies that the element should be disabled. */
    disabled?: boolean;

    /** Inline style of the element. */
    style?: object;

    /** Style class of the element. */
    className?: string;

    /** Content of the tooltip. */
    tooltip?: string;

    /** Configuration of the tooltip, refer to the tooltip documentation for more information. */
    tooltipOptions?: TooltipOptions;

    /** Establishes relationships between the component and label(s) where its value should be one or more element IDs. */
    ariaLabelledBy?: string;

    /** Separator char to add an item when pressed in addition to the enter key. Currently only possible value is "," */
    separator?: ',';

    /** Whether to allow duplicate values or not. */
    allowDuplicate?: boolean;

    /** Template function to return the content of a chip. */
    itemTemplate?(item: any): React.ReactNode;

    /** Callback to invoke when a chip is added. */
    onAdd?(e: AddParams): void;

    /**	Callback to invoke when a chip is removed. */
    onRemove?(e: RemoveParams): void;

    /** Callback to invoke when a chip is added or removed. */
    onChange?(e: ChangeParams): void;

    /** Callback to invoke when the component gets focus. */
    onFocus?(event: React.FormEvent<HTMLInputElement>): void;

    /** Callback to invoke when the component loses focus. */
    onBlur?(event: React.FormEvent<HTMLInputElement>): void;
}

export default function Input(props: InputProps) {
    const { bind } = useContext(Context);

    const value = bind.value || props.value;

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
import React, { useContext } from 'react';
import { Context } from '..';
import { MultiSelect } from 'primereact/multiselect';
import TooltipOptions from 'primereact/components/tooltip/TooltipOptions';

export type InputProps = {
    /** Will inherit from parent MultiSelect */
    id?: string;

    /** Will inherit from parent MultiSelect */
    name?: string;

    /** Value of the component. */
    value?: any;

    /** An array of selectitems to display as the available options. */
    options?: any[];

    /** Name of the label field of an option when an arbitrary objects instead of SelectItems are used as options. */
    optionLabel?: string;

    optionValue?: string;

    /** Additional classes to append to the container */
    className?: string;

    /** Style class of the overlay panel element. */
    panelClassName?: string;

    /**	Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value. */
    scrollHeight?: string;

    /** Label to display when there are no selections. */
    placeholder?: string;

    /** Whether to display selected items in the label section or always display the placeholder as the default label. */
    fixedPlaceholder?: boolean;

    /** When present, it specifies that the component should be disabled. */
    disabled?: boolean;

    /** When specified, displays an input field to filter the items on keyup. */
    filter?: boolean;

    /** When filtering is enabled, filterBy decides which field or fields (comma separated) to search against. */
    filterBy?: string;

    /** Defines how the items are filtered, valid values are "contains", (default) "startsWith", "endsWith", "equals" and "notEquals". */
    filterMatchMode?: 'contains' | 'startsWith' | 'endsWith' | 'equals' | 'notEquals';

    /** Placeholder text to show when filter input is empty. */
    filterPlaceholder?: string;

    /** Locale to use in filtering. The default locale is the host environment's current locale. */
    filterLocale?: string;

    /** Template to display when filtering does not return any results. */
    emptyFilterMessage?: any;

    /** Clears the filter value when hiding the dropdown. */
    resetFilterOnHide?: boolean;

    /** A property to uniquely match the value in options for better performance. */
    dataKey?: string;

    /** Will inherit from parent MultiSelect */
    readOnly?: boolean;

    /** Will inherit from parent MultiSelect */
    required?: boolean;

    /** DOM element instance where the dialog should be mounted. */
    appendTo?: HTMLElement;

    /** Content of the tooltip. */
    tooltip?: any;

    /** Configuration of the tooltip, refer to the tooltip documentation for more information. */
    tooltipOptions?: TooltipOptions;

    /** Decides how many selected item labels to show at most. */
    maxSelectedLabels?: number;

    /** Label to display after exceeding max selected labels. */
    selectedItemsLabel?: string;

    /** Function that gets the option and returns the content for it. */
    itemTemplate?(item: any): JSX.Element | undefined;

    /** Function that gets an item in the value and returns the content for it. */
    selectedItemTemplate?(value: any): JSX.Element | undefined;

    /** Callback to invoke when value changes. */
    onChange?(e: { originalEvent: Event, value: any, target: { name: string, id: string, value: any } }): void;

    /** Callback to invoke when the element receives focus. */
    onFocus?(event: Event): void;

    /** Callback to invoke when the element loses focus. */
    onBlur?(event: Event): void;
}

export default function Input(props: InputProps) {
    const { bind } = useContext(Context);

    const value = bind.value || props.value;

    const readOnly = bind.readOnly || props.readOnly;

    const classNames = `input-group ${props.className ? props.className : ''} ${bind.error && 'is-invalid'} ${bind.success && 'is-valid'}`;

    return (
        <MultiSelect
            {...props}
            inputId={bind.id || props.id}
            name={bind.name || props.name}
            className={classNames}
            value={value}
        />
    )
}
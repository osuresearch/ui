import React, { useContext } from 'react';
import { Context } from '..';
import { Dropdown } from 'primereact/dropdown';
import TooltipOptions from 'primereact/components/tooltip/TooltipOptions';

type OptionGroupTemplateType = React.ReactNode | ((option: any, index: number) => React.ReactNode);

type ValueTemplateType = React.ReactNode | ((option: any, props: InputProps) => React.ReactNode);

type ItemTemplateType = React.ReactNode | ((option: any) => React.ReactNode);

type EmptyFilterMessageType = React.ReactNode | ((props: InputProps) => React.ReactNode);

interface ChangeTargetOptions {
    name: string;
    id: string;
    value: any;
}

interface ChangeParams {
    originalEvent: React.SyntheticEvent;
    value: any;
    stopPropagation(): void;
    preventDefault(): void;
    target: ChangeTargetOptions;
}

export type InputProps = {
    /** Unique identifier of the element. */
    id?: string;

    inputRef?: React.Ref<HTMLSelectElement>;

    /** Will inherit from parent Dropdown */
    name?: string;

    /** Value of the component. */
    value?: any;

    /** An array of selectitems to display as the available options. */
    options?: any[];

    /** Name of the label field of an option when arbitrary objects are used as options instead of SelectItems. */
    optionLabel?: string;

    /** Name of the value field of an option when arbitrary objects are used as options instead of SelectItems. */
    optionValue?: string;

    /** Property name or getter function to use as the disabled flag of an option, defaults to false when not defined. */
    optionDisabled?: string;

    /** Property name or getter function to use as the label of an option group. */
    optionGroupLabel?: string;

    /** Property name or getter function that refers to the children options of option group. */
    optionGroupChildren?: string;

    /** Template of an option group item. */
    optionGroupTemplate?: OptionGroupTemplateType;

    /** The template of selected item. */
    valueTemplate?: ValueTemplateType;

    /** The template of items. */
    itemTemplate?: ItemTemplateType;

    /** Inline style of the element. */
    style?: object;

    /** Style class of the element. */
    className?: string;

    /** Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value. */
    scrollHeight?: string;

    /** When specified, displays an input field to filter the items on keyup. */
    filter?: boolean;

    /** When filtering is enabled, filterBy decides which field or fields (comma separated) to search against. */
    filterBy?: string;

    /** Defines how the items are filtered, valid values are "contains" (default), "startsWith", "endsWith", "equals" and "notEquals". */
    filterMatchMode?: 'contains' | 'startsWith' | 'endsWith' | 'equals' | 'notEquals';

    /** Placeholder text to show when filter input is empty. */
    filterPlaceholder?: string;

    /** Locale to use in filtering. The default locale is the host environment's current locale. */
    filterLocale?: string;

    /** Template to display when filtering does not return any results. */
    emptyFilterMessage?: EmptyFilterMessageType;

    /** When present, custom value instead of predefined options can be entered using the editable input field. */
    editable?: boolean;

    /** Default text to display when no option is selected. */
    placeholder?: string;

    /** When present, it specifies that an input field must be filled out before submitting the form. */
    required?: boolean;

    /** When present, it specifies that the component should be disabled. */
    disabled?: boolean;

    /** DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The `self` value is used to render a component where it is located. */
    appendTo?: HTMLElement | 'self';

    /** Index of the element in tabbing order. */
    tabIndex?: number;

    /** When present, it specifies that the component should automatically get focus on load. */
    autoFocus?: boolean;

    /** When the panel is opened, it specifies that the filter input should focus automatically. */
    filterInputAutoFocus?: boolean;

    /** Clears the filter value when hiding the dropdown. */
    resetFilterOnHide?: boolean;

    /** When enabled, a clear icon is displayed to clear the filtered value. */
    showFilterClear?: boolean;

    lazy?: boolean;

    /** Style class of the overlay panel element. */
    panelClassName?: string;

    /** Inline style of the overlay panel element. */
    panelStyle?: object;

    /** A property to uniquely match the value in options for better performance. */
    dataKey?: string;

    /** Identifier of the focusable input. */
    inputId?: string;

    /** When enabled, a clear icon is displayed to clear the value. */
    showClear?: boolean;

    /** Maximum number of characters to be typed on an editable input. */
    maxLength?: number;

    /** Content of the tooltip. */
    tooltip?: string;

    /** Configuration of the tooltip, refer to the tooltip documentation for more information. */
    tooltipOptions?: TooltipOptions;

    /** Used to define a string that labels the component. */
    ariaLabel?: string;

    /** Contains the element IDs of labels. */
    ariaLabelledBy?: string;

    /** The properties of [CSSTransition](http://reactcommunity.org/react-transition-group/css-transition) can be customized, except for "nodeRef" and "in" properties. */
    transitionOptions?: object;

    /** When enabled, overlay panel will be visible with input focus. */
    showOnFocus?: boolean;

    /** Callback to invoke on value change */
    onChange?(e: ChangeParams): void;

    /** Callback to invoke when the element receives focus. */
    onFocus?(event: React.FormEvent<HTMLInputElement>): void;

    /** Callback to invoke when the element loses focus. */
    onBlur?(event: React.FormEvent<HTMLInputElement>): void;

    /** Callback to invoke to when a mouse button is pressed. */
    onMouseDown?(event: React.MouseEvent<HTMLElement>): void;

    /** Callback to invoke on right-click. */
    onContextMenu?(event: React.MouseEvent<HTMLElement>): void;

    /** Callback to invoke when overlay panel becomes visible. */
    onShow?(): void;

    /** Callback to invoke when overlay panel becomes hidden. */
    onHide?(): void;
}

export default function Input(props: InputProps) {
    const { bind } = useContext(Context);

    const value = bind.value || props.value;

    const classNames = `form-control ${props.className ? props.className : ''} ${bind.error && 'is-invalid'} ${bind.success && 'is-valid'}`;

    return (
        <Dropdown
            {...props}
            inputId={bind.id || props.id}
            name={bind.name || props.name}
            className={classNames}
            value={value}
        />
    )
}
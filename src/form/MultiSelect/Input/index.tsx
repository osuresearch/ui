import React, { useContext } from 'react';
import { Context } from '..';
import { MultiSelect } from 'primereact/multiselect';
import TooltipOptions from 'primereact/components/tooltip/TooltipOptions';

type OptionGroupTemplateType = React.ReactNode | ((option: any, index: number) => React.ReactNode);

type ItemTemplateType = React.ReactNode | ((option: any) => React.ReactNode);

type SelectedItemTemplateType = React.ReactNode | ((value: any) => React.ReactNode);

type EmptyFilterMessageType = React.ReactNode | ((props: InputProps) => React.ReactNode);

interface HeaderCheckboxChangeParams {
    originalEvent: React.FormEvent<HTMLInputElement>;
    checked: boolean;
}

interface PanelHeaderTemplateParams {
    className: string;
    checkboxElement: HTMLElement;
    checked: boolean;
    onChange(e: HeaderCheckboxChangeParams): void;
    filterElement: JSX.Element;
    closeElement: JSX.Element;
    closeElementClassName: string;
    closeIconClassName: string;
    onCloseClick(event: React.MouseEvent<HTMLElement>): void;
    element: JSX.Element;
    props: InputProps;
}

type PanelHeaderTemplateType = React.ReactNode | ((e: PanelHeaderTemplateParams) => React.ReactNode);

type PanelFooterTemplateType = React.ReactNode | ((props: InputProps, hide: () => void) => React.ReactNode);

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
    /** Will inherit from parent MultiSelect */
    id?: string;

    inputRef?: React.Ref<HTMLSelectElement>;

    /** Will inherit from parent MultiSelect */
    name?: string;

    /** Value of the component. */
    value?: any;

    /** An array of selectitems to display as the available options. */
    options?: any[];

    /** Name of the label field of an option when an arbitrary objects instead of SelectItems are used as options. */
    optionLabel?: string;

    /** Property name or getter function to use as the value of an option, defaults to the option itself when not defined. */
    optionValue?: string;

    /** Property name or getter function to use as the disabled flag of an option, defaults to false when not defined. */
    optionDisabled?: boolean;

    /** Property name or getter function to use as the label of an option group. */
    optionGroupLabel?: string;

    /** Property name or getter function that refers to the children options of option group. */
    optionGroupChildren?: string;

    /** Template of an option group item. */
    optionGroupTemplate?: OptionGroupTemplateType;

    /** Used mode to display the selected item. Valid values are 'comma' and 'chip'. */
    display?: 'comma' | 'chip';

    /** Inline style of the element. */
    style?: object;

    /** Style class of the element. */
    className?: string;

    /** Style class of the overlay panel element. */
    panelClassName?: string;

    /** Inline style of the overlay panel element. */
    panelStyle?: object;

    /** Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value. */
    scrollHeight?: string;

    /** Label to display when there are no selections. */
    placeholder?: string;

    /** Whether to display selected items in the label section or always display the placeholder as the default label. */
    fixedPlaceholder?: boolean;

    /** When present, it specifies that the component should be disabled. */
    disabled?: boolean;

    /** When enabled, a clear icon is displayed to clear the value. */
    showClear?: boolean;

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

    /** Template to display when filtering does not return any results */
    emptyFilterMessage?: EmptyFilterMessageType;

    /** Clears the filter value when hiding the dropdown */
    resetFilterOnHide?: boolean;

    /** Index of the element in tabbing order. */
    tabIndex?: number;

    /** A property to uniquely match the value in options for better performance. */
    dataKey?: string;

    /** Identifier of the focusable input. */
    inputId?: string;

    /** When present, it specifies that an input field must be filled out before submitting the form. */
    required?: boolean;

    /** DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The `self` value is used to render a component where it is located. */
    appendTo?: HTMLElement | 'self';

    /** Content of the tooltip. */
    tooltip?: string;

    /** Configuration of the tooltip, refer to the tooltip documentation for more information. */
    tooltipOptions?: TooltipOptions;

    /** Decides how many selected item labels to show at most. */
    maxSelectedLabels?: number;

    /** Number of maximum options that can be selected. */
    selectionLimit?: number;

    /** Label to display after exceeding max selected labels. */
    selectedItemsLabel?: string;

    /** Establishes relationships between the component and label(s) where its value should be one or more element IDs. */
    ariaLabelledBy?: string;

    /** Function that gets the option and returns the content for it. */
    itemTemplate?: ItemTemplateType;

    /** Function that gets an item in the value and returns the content for it. */
    selectedItemTemplate?: SelectedItemTemplateType;

    /** Template of the panel header. */
    panelHeaderTemplate?: PanelHeaderTemplateType;

    /** Template of the panel footer. */
    panelFooterTemplate?: PanelFooterTemplateType;

    /** The properties of [CSSTransition](http://reactcommunity.org/react-transition-group/css-transition/) can be customized, except for "nodeRef" and "in" properties. */
    transitionOptions?: object;

    /** Callback to invoke when value changes. */
    onChange?(e: ChangeParams): void;

    /** Callback to invoke when the element receives focus. */
    onFocus?(event: React.FormEvent<HTMLInputElement>): void;

    /** Callback to invoke when the element loses focus. */
    onBlur?(event: React.FormEvent<HTMLInputElement>): void;

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
        <MultiSelect
            {...props}
            inputId={bind.id || props.id}
            name={bind.name || props.name}
            className={classNames}
            value={value}
        />
    )
}
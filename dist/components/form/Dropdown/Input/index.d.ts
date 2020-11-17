/// <reference types="react" />
import TooltipOptions from 'primereact/components/tooltip/TooltipOptions';
export declare type InputProps = {
    /** Will inherit from parent Dropdown */
    id?: string;
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
    /** Style class of the element. */
    className?: string;
    autoWidth?: boolean;
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
    emptyFilterMessage?: any;
    /** When present, custom value instead of predefined options can be entered using the editable input field. */
    editable?: boolean;
    /** Default text to display when no option is selected. */
    placeholder?: string;
    /** Will inherit from parent Dropdown */
    required?: boolean;
    /** Will inherit from parent Dropdown */
    readOnly?: boolean;
    /** When present, it specifies that the component should be disabled. */
    disabled?: boolean;
    /** DOM element instance where the dialog should be mounted. */
    appendTo?: any;
    /** When the panel is opened, it specifies that the filter input should focus automatically. */
    filterInputAutoFocus?: boolean;
    /** Clears the filter value when hiding the dropdown. */
    resetFilterOnHide?: boolean;
    lazy?: boolean;
    /** Style class of the overlay panel element. */
    panelClassName?: string;
    /** A property to uniquely match the value in options for better performance. */
    dataKey?: string;
    /** When enabled, a clear icon is displayed to clear the value. */
    showClear?: boolean;
    /** Maximum number of characters to be typed on an editable input. */
    maxLength?: number;
    /** Content of the tooltip. */
    tooltip?: any;
    /** Configuration of the tooltip, refer to the tooltip documentation for more information. */
    tooltipOptions?: TooltipOptions;
    /** The template of selected item. */
    valueTemplate?: ((option: any, props: object) => any | any);
    /** The template of items. */
    itemTemplate?: ((option: any) => any | any);
    /** Callback to invoke on value change */
    onChange?(e: {
        originalEvent: Event;
        value: any;
        target: {
            name: string;
            id: string;
            value: any;
        };
    }): void;
    /**	Callback to invoke when the element receives focus. */
    onFocus?(e: Event): void;
    /** Callback to invoke when the element loses focus. */
    onBlur?(e: Event): void;
    /** Callback to invoke to when a mouse button is pressed. */
    onMouseDown?(event: Event): void;
    /** Callback to invoke on right-click. */
    onContextMenu?(event: Event): void;
};
export default function Input(props: InputProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map

// NOT A REAL COMPONENT
// THIS FILE IS PURELY FOR DOCUMENTATION PURPOSES
import React from 'react';

type Props = {
    /** Unique identifier of the element. */
    id?: string;

    /** An array of objects to display. */
    value?: any[];

    /** Header content of the table. */
    header?: any;

    /** Footer content of the table. */
    footer?: any;

    /** Inline style of the component. */
    style?: object;

    /** Style class of the component. */
    className?: string;

    /** Inline style of the table element. */
    tableStyle?: object;

    /** Style class of the table element. */
    tableClassName?: string;

    /** When specified as true, enables the pagination. */
    paginator?: boolean;

    /** Position of the paginator, options are "top","bottom" or "both". */
    paginatorPosition?: 'top' | 'bottom' | 'both';

    /** Whether to show it even there is only one page. */
    alwaysShowPaginator?: boolean;

    /** Template of the paginator. */
    paginatorTemplate?: string;

    /** Content for the left side of the paginator. */
    paginatorLeft?: any;

    /** Content for the right side of the paginator. */
    paginatorRight?: any;

    /** Number of page links to display. */
    pageLinkSize?: number;

    /** Array of integer values to display inside rows per page dropdown. */
    rowsPerPageOptions?: number[];

    /** Template of the current page report element. Available placeholders are {currentPage}, {totalPages}, {rows}, {first}, {last} and {totalRecords} */
    currentPageReportTemplate?: string;

    /** Index of the first row to be displayed. */
    first?: number;

    /** Number of rows to display per page. */
    rows?: number;

    /** Number of total records, defaults to length of value when not defined. */
    totalRecords?: number;

    /** Defines if data is loaded and interacted with in lazy manner. */
    lazy?: boolean;

    /** Name of the field to sort data by default. */
    sortField?: string;

    /** Order to sort the data by default. */
    sortOrder?: number;

    /** An array of SortMeta objects to sort the data by default in multiple sort mode. */
    multiSortMeta?: any[];

    /** Defines whether sorting works on single column or on multiple columns. */
    sortMode?: string;

    /** Default sort order of an unsorted column. */
    defaultSortOrder?: number;

    /** When enabled, columns can have an un-sorted state. */
    removableSort?: boolean;

    /** Text to display when there is no data. */
    emptyMessage?: any;

    /** Specifies the selection mode, valid values are "single" and "multiple". */
    selectionMode?: string;

    /** Selected row in single mode or an array of values in multiple mode. */
    selection?: any;

    /** Selected row in single mode or an array of values in multiple mode. */
    contextMenuSelection?: any;

    /** Algorithm to define if a row is selected, valid values are "equals" that compares by reference and "deepEquals" that compares all fields. */
    compareSelectionBy?: string;

    /** A property to uniquely identify a record in data. */
    dataKey?: string;

    /**
     * Defines whether metaKey is required or not for the selection.
     * When true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically. 
     */
    metaKeySelection?: boolean;

    /** ColumnGroup component for header. */
    headerColumnGroup?: any;

    /** ColumnGroup component for footer. */
    footerColumnGroup?: any;

    /** ColumnGroup component for header of frozen columns. */
    frozenHeaderColumnGroup?: any;

    /** ColumnGroup component for footer of frozen columns. */
    frozenFooterColumnGroup?: any;

    /** A collection of rows or a map object row data keys that are expanded. */
    expandedRows?: any[];

    /** When enabled, columns can be resized using drag and drop. */
    resizableColumns?: boolean;

    /** Defines whether the overall table width should change on column resize, valid values are "fit" and "expand". */
    columnResizeMode?: 'fit' | 'expand';

    /** When enabled, columns can be reordered using drag and drop. */
    reorderableColumns?: boolean;

    /** An array of FilterMetadata objects to provide external filters. */
    filters?: object;

    /** Value of the global filter to use in filtering. */
    globalFilter?: any;

    /** Locale to use in filtering. The default locale is the host environment's current locale. */
    filterLocale?: string;

    /** When specified, enables horizontal and/or vertical scrolling. */
    scrollable?: boolean;

    /** Height of the scroll viewport. */
    scrollHeight?: string;

    /** Whether the data should be loaded on demand during scroll. */
    virtualScroll?: boolean;

    /** Delay in virtual scroll before doing a call to lazy load. */
    virtualScrollDelay?: number;

    /** Height of a row to use in calculations of virtual scrolling. */
    virtualRowHeight?: number;

    /** Width of the frozen part in scrollable DataTable. */
    frozenWidth?: string;

    /** Items of the frozen part in scrollable DataTable. */
    frozenValue?: any[];

    /** Character to use as the csv separator. */
    csvSeparator?: string;

    /** Name of the exported file. */
    exportFilename?: string;

    /** Defines the row grouping mode, valid values are "subheader" and "rowgroup". */
    rowGroupMode?: string;

    /** Whether the cell widths scale according to their content or not. */
    autoLayout?: boolean;

    /** Displays a loader to indicate data load is in progress. */
    loading?: boolean;

    /** The icon to show while indicating data load is in progress. */
    loadingIcon?: string;

    /** Index of the element in tabbing order. */
    tabIndex?: string;

    /** Unique identifier of a stateful table to use in state storage. */
    stateKey?: string;

    /** Defines where a stateful table keeps its state, valid values are "session" for sessionStorage, "local" for localStorage and "custom". */
    stateStorage?: 'session' | 'local' | 'custom';

    groupField?: string;

    /** Defines editing mode, options are "cell" and "row". */
    editMode?: string;

    /** Makes row groups toggleable, default is false. */
    expandableRowGroups?: boolean;

    /** When enabled, background of the rows change on hover. */
    rowHover?: boolean;

    /** Function that returns a boolean by passing the row data to decide if the radio or checkbox should be displayed per row. */
    showSelectionElement?(e: { data: any }): boolean;

    showReorderElement?(e: { data: any }): boolean;

    /** 
     * Callback to invoke when selection changes. 
     * 
     * `e.originalEvent`: Browser event
     * 
     * `e.value`: Selection object
     */
    onSelectionChange?(e: { originalEvent: Event, value: any }): void;

    /** 
     * Callback to invoke when a row selected with right click. 
     * 
     * `e.originalEvent`: Browser event
     * 
     * `e.value`: Selection object
     */
    onContextMenuSelectionChange?(e: { originalEvent: Event, value: any }): void;

    /** Function that receives the row data as the parameter and returns the expanded row content. */
    rowExpansionTemplate?(data: any): JSX.Element | undefined;

    /** Callback to invoke when a row is toggled or collapsed. */
    onRowToggle?(e: { data: any[] }): void;

    /** Function that takes the row data and returns an object in "{'styleclass' : condition}" format to define a classname for a particular row. */
    rowClassName?(rowData: any): object;

    /** Function to provide the content of row group header. */
    rowGroupHeaderTemplate?(data: any, index: number): React.ReactNode | undefined;

    /** Function to provide the content of row group footer. */
    rowGroupFooterTemplate?(data: any, index: number): React.ReactNode | undefined;

    /** Callback to invoke when a column is resized. */
    onColumnResizeEnd?(e: { element: HTMLElement, delta: number }): void;

    /** Callback to invoke on sort. */
    onSort?(e: { sortField: string, sortOrder: number, multiSortMeta: any }): void;

    /** Callback to invoke on pagination. */
    onPage?(e: { first: number, rows: number }): void;

    /** Callback to invoke on filtering. */
    onFilter?(e: { filters: any }): void;

    /** Callback to invoke during virtual scrolling. */
    onVirtualScroll?(e: { first: number, rows: number }): void;

    /** Callback to invoke when a row is clicked. */
    onRowClick?(e: { originalEvent: Event, data: any, index: number }): void;

    /** Callback to invoke when a row is double clicked. */
    onRowDoubleClick?(e: { originalEvent: Event, data: any, index: number }): void;

    /** Callback to invoke when a row is selected. */
    onRowSelect?(e: { originalEvent: Event, data: any, type: string }): void;

    /** Callback to invoke when a row is unselected. */
    onRowUnselect?(e: { originalEvent: Event, data: any, type: string }): void;

    /** Callback to invoke when a row is expanded. */
    onRowExpand?(e: { originalEvent: Event, data: any }): void;

    /** Callback to invoke when a row is collapsed. */
    onRowCollapse?(e: { originalEvent: Event, data: any }): void;

    /** Callback to invoke when a context menu is clicked. */
    onContextMenu?(e: { originalEvent: Event, data: any }): void;

    /** Callback to invoke when a column is reordered. */
    onColReorder?(e: { originalEvent: Event, dragIndex: number, dropIndex: number, columns: any }): void;

    /** Callback to invoke when a column is reordered. */
    onRowReorder?(e: { originalEvent: Event, value: any, dragIndex: number, dropIndex: number }): void;

    /** Callback to invoke after filtering and sorting to pass the rendered value. */
    onValueChange?(value: any[]): void;

    /** Callback to invoke to validate the editing row when the save icon is clicked on row editing mode. */
    rowEditorValidator?(rowData: any): boolean;

    /** Callback to invoke when the editing icon is clicked on row editing mode. */
    onRowEditInit?(e: { originalEvent: Event, data: any, index: number }): void;

    /** Callback to invoke when the save icon is clicked on row editing mode. */
    onRowEditSave?(e: { originalEvent: Event, data: any, index: number }): void;

    /** Callback to invoke when the cancel icon is clicked on row editing mode. */
    onRowEditCancel?(e: { originalEvent: Event, data: any, index: number }): void;

    /** 
     * A function to implement custom export. Need to return string value.
     * 
     * `event.data`: Field data.
     * `event.rows`: Column field. 
     */
    exportFunction?(e: { data: any, field: string }): any;

    /**
     * A function to implement custom saveState with stateStorage="custom".
     * `state`: the object to be stored.  
     */
    customSaveState?(state: any): void;

    /**
     * A function to implement custom restoreState with stateStorage="custom". Need to return state object.
     */
    customRestoreState?(): any;

    /** Callback to invoke table state is saved. */
    onStateSave?(state: any): void;

    /** Callback to invoke table state is restored. */
    onStateRestore?(state: any): void;
}

/** 
 * DataTable displays data in tabular format. It supports filtering, sorting, selection, editing, CSV exports, lazy-loading, and much more.
 * 
 * DataTable is part of the PrimeReact package, which is included in ORIS/UI.
 * 
 * Its features are too extensive to document here, so be sure to [review the documentation at the PrimeReact demo website](https://www.primefaces.org/primereact/showcase/#/datatable).
 */
class DataTable extends React.Component<Props, any> {
    /**
     * Resets sort, filter, paginator and columnorder state.
     * 
     * @public
     */
    reset() { };

    /**
     * Exports the data to CSV format.
     * 
     * @public
     */
    exportCSV() { };

    /**
     * Filters the data.
     * 
     * @param value the filter value 
     * @param field the filter field
     * @param mode filter match mode
     * 
     * @public
     */
    filter<T>(value: T, field: string, mode: string) { };

    /**
     * Resets column order when reorderableColumns is enabled.
     * 
     * @public
     */
    resetColumnOrder() { };

    /**
     * Closes the current editing cell when incell editing is enabled.
     * 
     * @public
     */
    closeEditingCell() { };

    static defaultProps = {
        paginator: false,
        paginatorPosition: 'bottom',
        alwaysShowPaginator: true,
        paginatorTemplate: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
        pageLinkSize: 5,
        currentPageReportTemplate: '({currentPage} of {totalPages})',
        first: 0,
        lazy: false,
        sortMode: 'single',
        defaultSortOrder: 1,
        removableSort: false,
        emptyMessage: 'No records found',
        compareSelectionBy: 'deepEquals',
        metaKeySelection: true,
        resizableColumns: false,
        columnResizeMode: 'fit',
        reorderableColumns: false,
        filterLocale: undefined,
        scrollable: false,
        virtualScroll: false,
        virtualScrollDelay: 250,
        virtualRowHeight: 28,
        csvSeparator: ',',
        exportFilename: 'download',
        autoLayout: false,
        loading: false,
        loadingIcon: 'pi pi-spinner',
        stateStorage: 'session',
        editMode: 'cell',
        expandableRowGroups: false,
        rowHover: false
    }

    static componentPathLine = `import { DataTable } from 'primereact/datatable'`;

    render() {
        return null;
    }
}

export default DataTable;
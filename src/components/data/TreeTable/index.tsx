
// NOT A REAL COMPONENT
// THIS FILE IS PURELY FOR DOCUMENTATION PURPOSES
import React from 'react';
import TreeNode from 'primereact/components/treenode/TreeNode';

type Props = {
    /** Unique identifier of the element. */
    id?: string;

    /** An array of treenodes to display. */
    value?: TreeNode[];

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

    /** An array of keys to represent the state of the tree expansion state in controlled mode. */
    expandedKeys?: any;

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
    currentPageReportTemplate?: '{currentPage}' | '{totalPages}' | '{rows}' | '{first}' | '{last}' | '{totalRecords}';

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

    /** Defines the selection mode, valid values "single", "multiple", and "checkbox". */
    selectionMode?: 'single' | 'multiple' | 'checkbox';

    /** A single or an array of keys to control the selection state. */
    selectionKeys?: any;

    /** A single key to control the selection with the context menu. */
    contextMenuSelectionKey?: any;

    /** Defines whether metaKey is required or not for the selection. When true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically. */
    metaKeySelection?: boolean;

    /** Whether checkbox selections propagate to ancestor nodes. */
    propagateSelectionUp?: boolean;

    /** Whether checkbox selections propagate to descendant nodes. */
    propagateSelectionDown?: boolean;

    /** Whether the cell widths scale according to their content or not. */
    autoLayout?: boolean;

    /** Function that takes the row data and returns an object in "{'styleclass' : condition}" format to define a classname for a particular now. */
    rowClassName?(rowData: any): object;

    /** Displays a loader to indicate data load is in progress. */
    loading?: boolean;

    /** The icon to show while indicating data load is in progress. */
    loadingIcon?: string;

    /** Index of the element in tabbing order. */
    tabIndex?: string;

    /** When specified, enables horizontal and/or vertical scrolling. */
    scrollable?: boolean;

    /** Height of the scroll viewport. */
    scrollHeight?: string;

    /** When enabled, columns can be reordered using drag and drop. */
    reorderableColumns?: boolean;

    /** ColumnGroup component for header. */
    headerColumnGroup?: any;

    /** ColumnGroup component for footer. */
    footerColumnGroup?: any;

    /** ColumnGroup component for header of frozen columns. */
    frozenHeaderColumnGroup?: any;

    /** ColumnGroup component for footer of frozen columns. */
    frozenFooterColumnGroup?: any;

    /** Width of the frozen part in scrollable DataTable. */
    frozenWidth?: string;

    /** When enabled, columns can be resized using drag and drop. */
    resizableColumns?: boolean;

    /** Defines whether the overall table width should change on column resize, valid values are "fit" and "expand". */
    columnResizeMode?: string;

    /** Text to display when there is no data. */
    emptyMessage?: string;

    /** An array of FilterMetadata objects to provide external filters. */
    filters?: object;

    /** Value of the global filter to use in filtering. */
    globalFilter?: any;

    /** Mode for filtering valid values are lenient and strict. Default is lenient. */
    filterMode?: 'lenient' | 'strict';

    filterLocale?: string;

    /** Callback to invoke on filtering. */
    onFilter?(filters: any[]): void;

    /** Callback to invoke when a node is expanded. */
    onExpand?(e: { originalEvent: Event, node: TreeNode }): void;

    /** Callback to invoke when a node is collapsed. */
    onCollapse?(e: { originalEvent: Event, node: TreeNode }): void;

    /** Callback to invoke when a node is toggled. */
    onToggle?(e: { originalEvent: Event, value: any }): void;

    /** Callback to invoke on pagination. */
    onPage?(e: { first: number, rows: number }): void;

    /** Callback to invoke on sort. */
    onSort?(e: { sortField: string, sortOrder: number, multiSortMeta: any }): void;

    /** Callback to invoke when a node is selected. */
    onSelect?(e: { originalEvent: Event, node: TreeNode }): void;

    /** Callback to invoke when a node is unselected. */
    onUnselect?(e: { originalEvent: Event, node: TreeNode }): void;

    /** Callback to invoke when a row is clicked. */
    onRowClick?(e: { originalEvent: Event, node: TreeNode }): void;

    /** Callback to invoke when selection changes. */
    onSelectionChange?(e: { originalEvent: Event, value: any }): void;

    /** Callback to invoke when selection changes with a context menu. */
    onContextMenuSelectionChange?(e: { originalEvent: Event, value: any }): void;

    /** Callback to invoke when a column is resized. */
    onColumnResizeEnd?(e: { element: HTMLElement, delta: number }): void;

    /** Callback to invoke when a column is reordered. */
    onColReorder?(e: { dragIndex: number, dropIndex: number, columns: any }): void;

    /** Callback to invoke when a context menu is clicked. */
    onContextMenu?(e: { originalEvent: Event, node: any }): void;
}

/** 
 * TreeTable is used to display hierarchical data in tabular format. It supports filtering, sorting, selection, reordering, and much more.
 * 
 * TreeTable is part of the PrimeReact package, which is included in ORIS/UI. 
 * 
 * Its features are too extensive to document here, so be sure to [review the documentation at the PrimeReact demo website](https://www.primefaces.org/primereact/showcase/#/treetable).
 */
class TreeTable extends React.Component<Props, any> {
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
        metaKeySelection: true,
        propagateSelectionUp: true,
        propagateSelectionDown: true,
        autoLayout: false,
        loading: false,
        loadingIcon: 'pi pi-spinner',
        scrollable: false,
        reorderableColumns: false,
        filterMode: 'lenient',
        resizableColumns: false,
        columnResizeMode: 'fit',
        emptyMessage: 'No records found'
    }

    static componentPathLine = `import { TreeTable } from 'primereact/treetable'`;

    render() {
        return null;
    }
}

export default TreeTable;

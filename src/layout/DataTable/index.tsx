import React from 'react';
import { DataTable as PRDataTable, DataTableProps } from 'primereact/datatable';

export type Props = DataTableProps;

/** 
 * DataTable displays data in tabular format. It supports filtering, sorting, selection, editing, CSV exports, lazy-loading, and much more.
 * 
 * DataTable is part of the PrimeReact package, which is included in ORIS/UI.
 * 
 * Its features are too extensive to document here, so be sure to [review the documentation at the PrimeReact demo website](https://www.primefaces.org/primereact/showcase/#/datatable).
 */
export const DataTable = (props: Props) => 
    <PRDataTable {...props} />


### Basic Implementation
```jsx
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const products = require('./demo/products-small').default;

<DataTable value={products}>
    <Column field="code" header="Code" sortable />
    <Column field="name" header="Name" sortable />
    <Column field="category" header="Category" sortable />
    <Column field="quantity" header="Quantity" sortable />
</DataTable>
```

### Advanced Implementation
```jsx
import React, { useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { MultiSelect, Button, Text, Icon, Badge, Dropdown, DateTime } from '@oris/ui';

const dt = useRef(null);
const customers = require('./demo/customers').default;
const representatives = require('./demo/representatives').default;
const [globalFilter, setGlobalFilter] = useState('');
const [selectedCustomers, setSelectedCustomers] = useState();
const [selectedRepresentatives, setSelectedRepresentatives] = useState();
const [dateFilter, setDateFilter] = useState();
const [selectedStatus, setSelectedStatus] = useState();

const statuses = [
    'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
];

const countryBodyTemplate = (rowData) => {
    let { name, code } = rowData.country;

    return (
        <React.Fragment>
            <span style={{verticalAlign: 'middle', marginLeft: '.5em'}}>{name}</span>
        </React.Fragment>
    );
}

const representativeBodyTemplate = (rowData) => {
    return (
        <React.Fragment>
            <span style={{verticalAlign: 'middle', marginLeft: '.5em'}}>{rowData.representative.name}</span>
        </React.Fragment>
    );
}

const dateBodyTemplate = (rowData) => {
    return (
        <React.Fragment>
            <span>{rowData.date}</span>
        </React.Fragment>
    );
}

const representativeItemTemplate = (option) => {
    const src = "showcase/demo/images/avatar/" + option.image;

    return (
        <div className="p-multiselect-representative-option">
            <img alt={option.name} src={src} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" style={{verticalAlign: 'middle'}} />
            <span style={{verticalAlign: 'middle', marginLeft: '.5em'}}>{option.name}</span>
        </div>
    );
}

const onRepresentativeFilterChange = (event) => {
    dt.current.filter(event.value, 'representative.name', 'in');
    setSelectedRepresentatives(event.value);
}

const representativeFilter =
        <MultiSelect id="representative">
            <MultiSelect.Input 
                className="p-column-filter"
                value={selectedRepresentatives}
                options={representatives}
                onChange={onRepresentativeFilterChange}
                itemTemplate={representativeItemTemplate}
                placeholder="All"
                optionLabel="name"
                optionValue="name"
            />
        </MultiSelect>


const formatDate = (date) => {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
        month = '0' + month;
    }

    if (day < 10) {
        day = '0' + day;
    }

    return date.getFullYear() + '-' + month + '-' + day;
}

const filterDate = (value, filter) => {
    if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
        return true;
    }

    if (value === undefined || value === null) {
        return false;
    }

    return value === formatDate(filter);
}

const onDateFilterChange = (event) => {
    if (event.value !== null)
        dt.current.filter(formatDate(event.value), 'date', 'equals');
    else
        dt.current.filter(null, 'date', 'equals');

    setDateFilter(event.value);
}

const dateFilterElement = 
    <DateTime id='date-filter-element'>
        <DateTime.Input 
            value={dateFilter}
            onChange={onDateFilterChange}
            dateFormat='yyyy-mm-dd'
            placeholderText='Registration Date'
        />
    </DateTime>
        

const statusTemplate = (status) => {
    let theme = '';

    switch (status) {
        case 'unqualified':
            theme = 'danger';
            break;
        case 'proposal':
            theme = 'warning';
            break;
        case 'qualified':
            theme = 'success';
            break;
        case 'new':
            theme = 'info';
            break;
        case 'renewal':
            theme = 'primary';
            break;
        default:
            theme = 'secondary';
            break;
    }
    return (
        <React.Fragment>
            <Badge theme={theme}>{status}</Badge>
        </React.Fragment>
    );
}

const onStatusFilterChange = (event) => {
    dt.current.filter(event.value, 'status', 'equals');
    setSelectedStatus(event.value);
}

const statusFilter = 
    <Dropdown id='status-filter'>
        <Dropdown.Input 
            value={selectedStatus} options={statuses} onChange={onStatusFilterChange}
                    itemTemplate={statusTemplate} showClear placeholder="Select a Status" className="p-column-filter"
        />
    </Dropdown>

const activityBodyTemplate = (rowData) => {
    return (
        <div className='progress'>
            <div 
                className="progress-bar bg-info" 
                role="progressbar" 
                style={{ width: `${rowData.activity}%` }}
                aria-valuenow={rowData.activity}
                aria-valuemin="0" 
                aria-valuemax="100"
            ></div>            
        </div>
    );
}

const actionBodyTemplate = () => {
    return (
        <Button theme='secondary'>
            <Icon name='cog' label='Settings' />
        </Button>
    );
}

const header = 
            <div className="table-header row">
                <div className='col'>
                    <h3>List of Customers</h3>
                </div>

                <div className='col align-right'>
                        <Text id='global-search'>
                        <span className='input-group'>
                            <span className='input-group-prefix'>
                                <Icon name='search' />
                            </span>
                            <Text.Input 
                                value={globalFilter}
                                onChange={(e) => setGlobalFilter(e.target.value)}
                                placeholder="Global Search"
                            />
                            </span>
                        </Text>
                </div>
            </div>;


<DataTable 
    ref={dt} 
    value={customers}
    header={header} 
    className="p-datatable-customers" 
    dataKey="id" 
    rowHover 
    globalFilter={globalFilter}
    selection={selectedCustomers} 
    onSelectionChange={e => setSelectedCustomers(e.value)}
    paginator 
    rows={10} 
    emptyMessage="No customers found" 
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" 
    rowsPerPageOptions={[10, 25, 50]}
    sortMode='multiple'
>
    <Column 
        selectionMode="multiple" 
        style={{ width: '3em' }} 
    />
    <Column 
        field="name" 
        header="Name" 
        sortable 
        filter 
        filterPlaceholder="Search by name" 
    />
    <Column 
        sortField="country.name" 
        filterField="country.name"
        header="Country" 
        body={countryBodyTemplate} 
        sortable 
        filter 
        filterMatchMode="contains" 
        filterPlaceholder="Search by country" 
    />
    <Column 
        sortField="representative.name" 
        filterField="representative.name" 
        header="Representative"
        body={representativeBodyTemplate} 
        sortable 
        filter 
        filterElement={representativeFilter} 
    />
    <Column 
        field="date" 
        header="Date" 
        body={dateBodyTemplate} 
        sortable 
        filter 
        filterMatchMode="custom" 
        filterFunction={filterDate} 
        filterElement={dateFilterElement} 
    />
    <Column 
        field="status" 
        header="Status" 
        body={(row) => statusTemplate(row.status)} 
        sortable 
        filter 
        filterElement={statusFilter} 
    />
    <Column 
        field="activity" 
        header="Activity" 
        body={activityBodyTemplate} 
        sortable 
        filter 
        filterMatchMode="gte" 
        filterPlaceholder="Minimum" 
    />
    <Column 
        body={actionBodyTemplate} 
        headerStyle={{ width: '8em', textAlign: 'center' }} 
        bodyStyle={{ textAlign: 'center', overflow: 'visible' }} 
    />
</DataTable>
```
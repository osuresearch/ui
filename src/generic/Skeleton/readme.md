
### Getting Started

Skeleton displays a rectangle in its simplest form.

```jsx static
<Skeleton />
```

The other option is the circle by setting `shape` property as "circle".

```jsx static
<Skeleton shape="circle" />
```

Because Skeletons are used as loading placeholders, they should always be contained within a `<LazyLoaded>`.

```html
<LazyLoaded
    loading={true}
    placeholder={<Skeleton />}
>
    Content to display once loading is complete.
</LazyLoaded>
```

#### Size

In order to customize the size, use `width` and `height` properties for rectangles and `size` for Circle and Square shapes.

```jsx static
<Skeleton width="100%" height="2rem" />
<Skeleton shape="circle" size="50px" />
```

#### Border Radius

The default border radius of a rectangle is zero (0). It can be overridden using the `borderRadius` property.

```jsx static
<Skeleton borderRadius="16px" />
```

#### Animation

Animation can be turned of by setting `animation` to "none".

```jsx static
<Skeleton animation="none" />
```

```js noeditor
import { Icon } from '@osuresearch/ui';

<div className="alert alert-secondary">
    <Icon name="universal-access" circled={true} />
    <p><strong>Accessibility</strong></p>
    <p>
        The component will not be animated if the user has requested that the system minimize the amount of non-essential motion it uses.
    </p>
</div>
```

### Examples
```jsx
import { Skeleton } from 'primereact/skeleton';

<div>
    <div className="row">
        <div className="col-6">
            <h5>Rectangle</h5>
            <Skeleton className="mb-2" />
            <Skeleton width="10rem" className="mb-2" />
            <Skeleton width="5rem" className="mb-2" />
            <Skeleton height="2rem" className="mb-2" />
            <Skeleton width="10rem" height="4rem" className="mb-4" />
        </div>

        <div className="col-6">
            <h5>Rounded</h5>
            <Skeleton className="mb-2" borderRadius="16px" />
            <Skeleton width="10rem" className="mb-2" borderRadius="16px" />
            <Skeleton width="5rem" borderRadius="16px" className="mb-2" />
            <Skeleton height="2rem" className="mb-2" borderRadius="16px" />
            <Skeleton width="10rem" height="4rem" borderRadius="16px" />
        </div>
    </div>

    <div className="row">
        <div className="col-6">
            <h5>Square</h5>
            <div className="d-inline-flex align-items-end">
            <Skeleton size="2rem" className="mr-2" />
            <Skeleton size="3rem" className="mr-2" />
            <Skeleton size="4rem" className="mr-2" />
            <Skeleton size="5rem" />
            </div>
        </div>

        <div className="col-6">
            <h5>Circle</h5>
            <div className="d-inline-flex align-items-end">
                <Skeleton shape="circle" size="2rem" className="mr-2" />
                <Skeleton shape="circle" size="3rem" className="mr-2" />
                <Skeleton shape="circle" size="4rem" className="mr-2" />
                <Skeleton shape="circle" size="5rem" />
            </div>
        </div>
    </div>
</div>
```

```jsx
import { Skeleton } from 'primereact/skeleton';

<div className="row">
    <div className="col-6">
        <h5>Card</h5>

        <div className="card">
            <div className="card-body">
                <div className="d-flex mb-3">
                    <Skeleton shape="circle" size="4rem" className="mr-2" />
                    <div>
                        <Skeleton width="10rem" className="mb-2" />
                        <Skeleton width="5rem" className="mb-2" />
                        <Skeleton height=".5rem" />
                    </div>
                </div>
                <Skeleton width="100%" height="150px" />
                <div className="d-flex justify-content-between mt-3">
                    <Skeleton width="4rem" height="2rem" />
                    <Skeleton width="4rem" height="2rem" />
                </div>
            </div>
        </div>
    </div>

    <div className="col-6">
        <h5>List</h5>
        <ul className="list-unstyled">
            <li className="mb-3">
                <div className="d-flex align-items-center">
                    <Skeleton shape="circle" size="4rem" className="mr-2" />
                    <div style={{ flex: '1' }}>
                        <Skeleton width="100%" className="mb-2" />
                        <Skeleton width="75%" />
                    </div>
                </div>
            </li>
            <li className="mb-3">
                <div className="d-flex align-items-center">
                    <Skeleton shape="circle" size="4rem" className="mr-2" />
                    <div style={{ flex: '1' }}>
                        <Skeleton width="100%" className="mb-2" />
                        <Skeleton width="75%" />
                    </div>
                </div>
            </li>
            <li className="mb-3">
                <div className="d-flex align-items-center">
                    <Skeleton shape="circle" size="4rem" className="mr-2" />
                    <div style={{ flex: '1' }}>
                        <Skeleton width="100%" className="mb-2" />
                        <Skeleton width="75%" />
                    </div>
                </div>
            </li>
            <li className="mb-3">
                <div className="d-flex align-items-center">
                    <Skeleton shape="circle" size="4rem" className="mr-2" />
                    <div style={{ flex: '1' }}>
                        <Skeleton width="100%" className="mb-2" />
                        <Skeleton width="75%" />
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
```

#### DataTable
```jsx
import { useState } from 'react';
import { Skeleton } from 'primereact/skeleton';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from '@osuresearch/ui';

const [loading, setLoading] = useState(true);

const products = require('../../data/DataTable/demo/products-small').default;

const loadingBody = () => <Skeleton />;

<>
{loading &&
    <DataTable
        value={new Array(5)}
        className="p-datatable-striped"
        style={{ marginBottom: '1rem' }}
    >
        <Column header="Code" body={loadingBody} />
        <Column header="Name" body={loadingBody} />
        <Column header="Category" body={loadingBody} />
        <Column header="Quantity" body={loadingBody} />
    </DataTable>
}

{!loading &&
    <DataTable
        value={products}
        className="p-datatable-striped"
        style={{ marginBottom: '1rem' }}
    >
        <Column field="code" header="Code" />
        <Column field="name" header="Name" />
        <Column field="category" header="Category" />
        <Column field="quantity" header="Quantity" />
    </DataTable>
}

<Button onClick={() => setLoading(!loading)}>Toggle Loading</Button>
</>
```
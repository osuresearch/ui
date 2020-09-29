
### Examples

For native select dropdowns, use [`<Select>`](/ui/#/Form%20Components?id=section-select) from Form Components

Dropdown Button

```js
<div className="btn-group">
    <div className="dropdown">
        <button id="example-dropdown" className="btn btn-outline-secondary dropdown-toggle"
            type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
        </button>
        <div className="dropdown-menu" aria-labelledby="example-dropdown">
            <h6 className="dropdown-header">Dropdown header</h6>
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item disabled" href="#">Disabled action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Separated link</a>
        </div>
    </div>
</div>
```

### Best Practices

* Only use dropdowns to hide infrequently used features. Users should not require a feature daily that is hidden behind a dropdown.
* Avoid using split dropdown buttons. It can be confusing to the end user that there are two distinct buttons with different actions.

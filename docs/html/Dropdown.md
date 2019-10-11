
### Examples

```js
<div className="form-group">
    <label htmlFor="select-example">Selection example</label>
    <select className="form-control custom-select"
        id="select-example" name="select-example">
        <option disabled>Pick a color profile</option>
        <option value="RGB">RGB</option>
        <option value="CMYK">CMYK</option>
        <option value="HSL">HSL</option>
    </select>
    <small className="text-muted">
    Some additional help text here
    </small>
</div>
```

```js
<div className="form-group is-required">
    <label htmlFor="error-example">Erroneous selection</label>
    <select className="form-control custom-select is-invalid"
        id="error-example" name="error-example">
        <option disabled>Pick a color profile</option>
        <option value="RGB">RGB</option>
        <option value="CMYK">CMYK</option>
        <option value="HSL">HSL</option>
    </select>
    <div className="invalid-feedback">You must select a color profile</div>
    <small className="text-muted">
    Some additional help text here
    </small>
</div>
```

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
* Use the `.custom-select` class on selects to ensure that they are visually identical across different OS/Browsers


### Examples

```js
<div class="form-group">
    <label for="select-example">Selection example</label>
    <select class="form-control custom-select"
        id="select-example" name="select-example">
        <option disabled selected>Pick a color profile</option>
        <option value="RGB">RGB</option>
        <option value="CMYK">CMYK</option>
        <option value="HSL">HSL</option>
    </select>
    <small class="text-muted">
    Some additional help text here
    </small>
</div>
```

```js
<div class="form-group is-required">
    <label for="error-example">Erroneous selection</label>
    <select class="form-control custom-select is-invalid"
        id="error-example" name="error-example">
        <option disabled selected>Pick a color profile</option>
        <option value="RGB">RGB</option>
        <option value="CMYK">CMYK</option>
        <option value="HSL">HSL</option>
    </select>
    <div class="invalid-feedback">You must select a color profile</div>
    <small class="text-muted">
    Some additional help text here
    </small>
</div>
```

```js
<div class="btn-group">
    <div class="dropdown">
        <button id="example-dropdown" class="btn btn-outline-secondary dropdown-toggle"
            type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="example-dropdown">
            <h6 class="dropdown-header">Dropdown header</h6>
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item disabled" href="#">Disabled action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
        </div>
    </div>
</div>
```

### Best Practices

* Only use dropdowns to hide infrequently used features. Users should not require a feature daily that is hidden behind a dropdown.
* Avoid using split dropdown buttons. It can be confusing to the end user that there are two distinct buttons with different actions.
* Use the `.custom-select` class on selects to ensure that they are visually identical across different OS/Browsers

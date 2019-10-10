
### Examples

```js
<fieldset className="form-group is-required">
    <legend>
        Collection of radio buttons
    </legend>
    <div className="form-check">
        <div className="custom-control custom-radio">
            <input type="radio" name="color"
                className="custom-control-input" id="rgb" />
            <label className="custom-control-label" for="rgb">RGB</label>
        </div>
        <div className="custom-control custom-radio">
            <input type="radio" name="color"
                className="custom-control-input" id="cmyk" />
            <label className="custom-control-label" for="cmyk">CMYK</label>
        </div>
        <div className="custom-control custom-radio">
            <input type="radio" name="color"
                className="custom-control-input" id="hsl" disabled />
            <label className="custom-control-label" for="hsl">HSL</label>
        </div>
    </div>
    <small className="form-text">
        Add <code>.is-required</code> to the containing <code>.form-group</code>
        to create "soft required" forms
    </small>
</fieldset>
```

```js
<fieldset className="form-group is-required">
    <legend>
        Radioset with an error
    </legend>
    <div className="form-check is-invalid">
        <div className="custom-control custom-radio">
            <input type="radio" name="color"
                className="custom-control-input" id="yes2" />
            <label className="custom-control-label" for="yes2">Yes</label>
        </div>
        <div className="custom-control custom-radio">
            <input type="radio" name="color"
                className="custom-control-input" id="no2" />
            <label className="custom-control-label" for="no2">No</label>
        </div>
    </div>
    <div className="invalid-feedback">
        You must select an option
    </div>
    <small className="form-text">
        A short list of options (e.g. yes/no)
        may be horizontally aligned with <strong>2em</strong> padding between options
    </small>
</fieldset>
```

```js
<fieldset className="form-group">
    <legend>
        A common yes/no radioset pattern
    </legend>
    <div className="form-check form-check-inline">
        <div className="custom-control custom-radio">
            <input type="radio" name="color"
                className="custom-control-input" id="yes3" />
            <label className="custom-control-label" for="yes3">Yes</label>
        </div>
        <div className="custom-control custom-radio">
            <input type="radio" name="color"
                className="custom-control-input" id="no3" />
            <label className="custom-control-label" for="no3">No</label>
        </div>
    </div>
    <small className="form-text">
        A short list of options (e.g. yes/no)
        may be horizontally aligned with <strong>2em</strong> padding between options
    </small>
</fieldset>
```

### Accessibility Guidelines

A radioset must be wrapped in a `<fieldset>` and include a `<legend>` element as the first child for screen readers. The legend is your primary fieldset description.

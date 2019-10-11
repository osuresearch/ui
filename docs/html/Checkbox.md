
### Examples

```js
<div className="custom-control custom-checkbox">
    <input type="checkbox"
        className="custom-control-input"
        id="terms-and-services"
    />
    <label className="custom-control-label" htmlFor="terms-and-services">
        I agree to the terms and services
    </label>
</div>
```

Wrap a set of checkboxes with a `fieldset` and add a `legend` header.

```js
<fieldset className="form-group">
    <legend>
        Collection of checkboxes in a <code>fieldset.form-group</code>
    </legend>
    <div className="form-check">
        <div className="custom-control custom-checkbox">
            <input type="checkbox" name="rgb"
                className="custom-control-input" id="rgb" />
            <label className="custom-control-label" htmlFor="rgb">RGB</label>
        </div>
        <div className="custom-control custom-checkbox">
            <input type="checkbox" name="rgb"
                className="custom-control-input" id="cmyk" />
            <label className="custom-control-label" htmlFor="cmyk">CMYK</label>
        </div>
        <div className="custom-control custom-checkbox">
            <input type="checkbox" name="rgb"
                className="custom-control-input" id="hsl" disabled={true} />
            <label className="custom-control-label" htmlFor="hsl">HSL</label>
        </div>
    </div>
    <small className="form-text">
        Use a <strong>1em</strong> padding between elements
        in the same <code>fieldset</code>
    </small>
</fieldset>
```

```js
<fieldset className="form-group is-required">
    <legend>
        A required checkbox set with an error
    </legend>
    <div className="form-check is-invalid">
        <div className="custom-control custom-checkbox">
            <input type="checkbox" name="chips"
                className="custom-control-input" id="chips" />
            <label className="custom-control-label" htmlFor="chips">Chips!</label>
        </div>
        <div className="custom-control custom-checkbox">
            <input type="checkbox" name="icecream"
                className="custom-control-input" id="icecream" />
            <label className="custom-control-label" htmlFor="icecream">Ice Cream!</label>
        </div>
    </div>
    <div className="invalid-feedback">
        You must select an option
    </div>
</fieldset>
```

```js
<fieldset className="form-group">
    <legend>
        A couple inline checkboxes, to save some space on a long form
    </legend>
    <div className="form-check form-check-inline">
        <div className="custom-control custom-checkbox">
            <input type="checkbox" name="chips"
                className="custom-control-input" id="chips2" />
            <label className="custom-control-label" htmlFor="chips2">Chips!</label>
        </div>
        <div className="custom-control custom-checkbox">
            <input type="checkbox" name="icecream"
                className="custom-control-input" id="icecream2" />
            <label className="custom-control-label" htmlFor="icecream2">Ice Cream!</label>
        </div>
    </div>
    <small className="form-text">
        Add <code>.form-check-inline</code> to the container div
    </small>
</fieldset>
```

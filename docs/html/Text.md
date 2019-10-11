
### Examples

```js
<div className="form-group">
    <label htmlFor="input-sample">
        Input
    </label>
    <input type="text" className="form-control" id="input-sample" />
    <small className="form-text">
        Help text must be at
        <strong>0.8em</strong> and <code>.text-muted</code>
    </small>
</div>
```

```js
<div className="form-group is-required">
    <label htmlFor="input-invalid-sample">
        Input with a serverside-generated error message. Bootstrap 4 is now
        opinionated about how to handle clientside errors.
        See the <a href="https://getbootstrap.com/docs/4.0/components/forms/#validation" target="_blank">official validation documentation</a>.
    </label>
    <input type="text" className="form-control is-invalid" id="input-invalid-sample" />

    <div className="invalid-feedback">
        You must fill out this field
    </div>

    <small className="form-text">
        We recommend adding some clientside validation (but not relying on it) for
        ensuring that basic validation rules are met (like field lengths, a field
        matching a Regex, etc)
    </small>
</div>
```

```js
<div className="form-group">
    <label htmlFor="input-valid-sample">
        An input updated with a "this is valid!" message. Useful
        if you want some basic validation feedback while the user
        is filling out the form.
    </label>
    <input type="text" className="form-control is-valid"
        id="input-valid-sample" defaultValue="some value" />

    <small className="form-text">
        This is some additional help text
    </small>
</div>
```

```js
<div className="form-group">
    <label htmlFor="number-sample">
       Numeric Input
    </label>
    <div className="row">
        <div className="col-2">
            <input type="number" className="form-control"
                id="number-sample" min="1" max="99" />
        </div>
    </div>
</div>
```

```js
<div className="form-group is-required">
    <label className="form-control-label" htmlFor="textarea-sample">
        Basic textarea
    </label>
    <textarea className="form-control"
        id="textarea-sample" rows="3"
        placeholder="You may include a placeholder, but it must not contain important information."></textarea>

    <small className="form-text">
        Textareas may expand vertically but <strong>not</strong> horizontally
        outside their defined container.
    </small>
</div>
```

```js
<fieldset className="form-group">
    <label htmlFor="textarea-with-na">
        Textarea with Not Applicable option - a common pattern used in our apps
    </label>
    <textarea className="form-control" id="textarea-with-na" rows="3"></textarea>

    <div className="form-check">
        <div className="custom-control custom-checkbox">
            <input type="checkbox" name="na" className="custom-control-input" id="na-check" />
            <label className="custom-control-label" htmlFor="na-check">Not Applicable</label>
        </div>
    </div>
    <small className="form-text">
        Use a <strong>1em</strong> padding between elements
        in the same <code>div</code>
    </small>
</fieldset>
```

### Full Form Example

```js
<form>
    <div className="row">
        <div className="form-group col-6 is-required">
            <label htmlFor="inputEmail4">Email</label>
            <input type="email" className="form-control" id="inputEmail4"
                placeholder="buckeye.1@osu.edu"
                autoComplete="osu-email"
                required={true} />
            <small className="form-text">
                Must be a valid OSU email address
            </small>
        </div>
        <div className="form-group col-6 is-required">
            <label htmlFor="inputPassword4">Password</label>
            <input type="password" className="form-control"
                id="inputPassword4" placeholder="Password"
                required={true} autoComplete="current-password" />
            <small className="form-text">
                Must not be a commonly used password or password previously exposed through a third party data breach
            </small>
        </div>
    </div>
    <div className="form-group">
        <label htmlFor="inputAddress">Address</label>
        <input type="text" className="form-control" id="inputAddress"
            placeholder="1234 Main St" />
    </div>
    <div className="form-group">
        <label htmlFor="inputAddress2">Address 2</label>
        <input type="text" className="form-control" id="inputAddress2"
            placeholder="Apartment, studio, or floor" />
    </div>
    <div className="row">
        <div className="form-group col-6">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="form-group col-4">
            <label htmlFor="inputState">State</label>
            <select id="inputState" className="form-control custom-select">
                <option disabled>Choose</option>
                <option value="MI">Michigan</option>
                <option value="OH">Ohio</option>
            </select>
        </div>
        <div className="form-group col-2">
            <label htmlFor="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip" />
        </div>
    </div>
    <div className="form-group">
        <div className="form-check is-required">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" name="agree"
                    className="custom-control-input" id="agree" />
                <label className="custom-control-label" htmlFor="agree">
                    I agree to the terms and services
                </label>
            </div>
        </div>
    </div>
    <button type="submit" className="btn btn-success">Register</button>
</form>
```

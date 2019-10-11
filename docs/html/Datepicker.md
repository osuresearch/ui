
To use the datepicker component in your application, you need the following additional vendor script from assets:

```html
<script src="/assets/js/vendor/bootstrap-datepicker-1.6.1.min.js"></script>
```

It is also recommended to utilize [Moment.js](https://momentjs.com/docs/) for handling dates within Javascript. It is also natively supported by Bootstrap Datepicker. We also have a copy of this within the assets directory:

```html
<script src="/assets/js/vendor/moment-2.14.1.min.js"></script>
```

### Examples

```js
<div className="form-group">
    <label htmlFor="date-sample">
        Date selection using
        <a href="https://bootstrap-datepicker.readthedocs.io">
            bootstrap-datepicker
        </a> for a cross browser polyfill
    </label>
    <div className="input-group">
        <span className="input-group-prefix">
            <i className="fa fa-calendar" aria-hidden="true"></i>
        </span>
        <input type="text" className="form-control"
            id="date-sample" data-provide="datepicker" />
    </div>
    <small className="text-muted">
        Can be lazy loaded with <code>data-provide="datepicker"</code> on the input
    </small>
</div>
```

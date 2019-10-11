
To use the richtext component in your application, you need the following additional vendor script from assets before:

```html
<script src="/assets/js/vendor/ckeditor-4.6.2/ckeditor.js"></script>
```

### Examples

>CKEDITOR no worko with React. TBD. Might just use https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html

```js
<div className="form-group is-required">
    <label for="richtext-editor">
        Rich text editor driven by CKEditor. Replaces a default
        <code>textarea</code> DOM element with the CKEditor plugin.
    </label>
    <div id="richtext-editor" className="form-control">
        <div>Hello, I am some <strong>rich</strong> text</div>
    </div>
    <small className="form-text">
        Additional help for the form control
    </small>
</div>

window.CKEDITOR.replace('richtext-editor');
```

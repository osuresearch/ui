
#### Example:

```js noeditor
<div className="alert alert-light">
    <div className='invalid-feedback' style={{display: 'block'}}>
        This field cannot be blank
    </div>
</div>
```

The error message can be passed into the `error` prop in the parent component

```jsx static
<X error={errorCondition && 'Error message'}>
    <X.Label>Label for the component</X.Label>
    <X.Input />
    <X.Error /> // Error message will display here
</X>
```

Or as part of the `bind` prop

```jsx static
const myComponent = ({ bindWithErrorMessage }) => {
    <X bind={bindWithErrorMessage}>
        <X.Label />
        <X.Input />
        <X.Error /> // Error message will display here
    </X>
}
```

```js noeditor
<div className="alert alert-dark">
    <p><strong>Note:</strong> <code>X</code> represents the parent component (i.e. <code>Checkbox</code>, <code>Text</code>, <code>FieldSet</code>, etc.)</p>
</div>
```
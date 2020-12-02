
#### Example:

```js noeditor
<div className="alert alert-light">
    <div className='valid-feedback' style={{display: 'block'}}>
        This is valid!
    </div>
</div>
```

The success message can be passed into the `success` prop in the parent component

```jsx static
<X success={successCondition && 'Success message'}>
    <X.Label>Label for the component</X.Label>
    <X.Input />
    <X.Success /> // Success message will display here
</X>
```

Or as part of the `bind` prop

```jsx static
const myComponent = ({ bindWithSuccessMessage }) => {
    <X bind={bindWithSuccessMessage}>
        <X.Label />
        <X.Input />
        <X.Success /> // Success message will display here
    </X>
}
```

```js noeditor
<div className="alert alert-dark">
    <p><strong>Note:</strong> <code>X</code> represents the parent component (i.e. <code>Checkbox</code>, <code>Text</code>, <code>FieldSet</code>, etc.)</p>
</div>
```
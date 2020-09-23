TODO - Additional examples

### Examples
```jsx
<Number id="age" required>
    <Number.Label>Provide your age</Number.Label>
    <Number.Input />
    <Number.Error />
</Number>
```

#### Change Events

```jsx
const onChange = (newIntValue, oldIntValue) => {
    alert(`Number changed from ${oldIntValue} to ${newIntValue}`);
}

<Number id="change-value" onChange={onChange}>
    <Number.Label>Change this value</Number.Label>
    <Number.Input />
</Number>
```

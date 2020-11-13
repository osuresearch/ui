### Examples
```jsx
<Number id="age" required>
    <Number.Label>Provide your age</Number.Label>
    <Number.Input />
    <Number.Error />
</Number>
```

```jsx
<Number id='one-and-ten'>
    <Number.Label>Pick a number between one (1) and ten (10)</Number.Label>
    <Number.Input 
        min={1}
        max={10}
    />
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

### Subcomponents
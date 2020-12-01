### Examples

#### Basic Implementation
```jsx
<Number id="age" required>
    <Number.Label>Provide your age</Number.Label>
    <Number.Input />
    <Number.Error />
</Number>
```

#### Basic Implementation with React Hook Form
```jsx
import { useForm } from 'react-hook-form';

const { register, errors, watch } = useForm({ mode: "onBlur" });

<>
<Number 
    id="rhf-age" 
    error={errors["rhf-age"] && "Please provide your age"}
    required
>
    <Number.Label>Provide your age</Number.Label>
    <Number.Input ref={register({ required: true })} />
    <Number.Error />
</Number>

<hr/>
Value: {watch("rhf-age")}
</>
```

#### Minimum and Maximum Numbers
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
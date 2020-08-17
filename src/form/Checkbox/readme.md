
### Examples

#### Basic Implementation

```jsx
<Checkbox id="receive-newsletter">
    <Checkbox.Input />

    <Checkbox.Label>
        Yes! I would like to receive your newsletter
    </Checkbox.Label>

    <Checkbox.Help>
        We will not spam your inbox
    </Checkbox.Help>
</Checkbox>
```

#### Disabled field
```jsx
<Checkbox id="checkbox-disabled">
    <Checkbox.Input disabled />
    <Checkbox.Label>
        This checkbox field is disabled
    </Checkbox.Label>
</Checkbox>
```

#### Validation
```jsx
<Checkbox id="terms-and-services" invalid>
    <Checkbox.Input required />

    <Checkbox.Label>
        I agree to the terms and services
    </Checkbox.Label>

    <Checkbox.InvalidFeedback>
        You must accept the terms and services
    </Checkbox.InvalidFeedback>

    <Checkbox.ValidFeedback>
        Thank you for accepting the terms and services
    </Checkbox.ValidFeedback>
</Checkbox>
```
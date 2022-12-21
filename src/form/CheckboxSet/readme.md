### Examples

#### Basic Implementation

```jsx
import { Checkbox } from '@osuresearch/ui';

<CheckboxSet name="colors" id="colors">
    <CheckboxSet.Legend>
        Collection of checkboxes in a <code>CheckboxSet</code>
    </CheckboxSet.Legend>

    <Checkbox id="rgb">
        <Checkbox.Input />
        <Checkbox.Label>RGB</Checkbox.Label>
    </Checkbox>

    <Checkbox id="cmyk">
        <Checkbox.Input />
        <Checkbox.Label>CMYK</Checkbox.Label>
    </Checkbox>

    <Checkbox id="hsl">
        <Checkbox.Input disabled />
        <Checkbox.Label>HSL</Checkbox.Label>
    </Checkbox>

    <CheckboxSet.Help>
        Use a <strong>1em</strong> padding between elements in the same <code>CheckboxSet</code>
    </CheckboxSet.Help>
</CheckboxSet>
```


#### Basic Implementation with React Hook Form
```jsx
import { useForm } from 'react-hook-form';
import { Checkbox } from '@osuresearch/ui';

const { register, watch } = useForm({ mode: 'onBlur' });

const selections = watch("rhf-colors");

<>
<CheckboxSet name="rhf-colors" id="rhf-colors">
    <CheckboxSet.Legend>
        Collection of checkboxes in a <code>CheckboxSet</code>
    </CheckboxSet.Legend>

    <Checkbox id="rhf-rgb">
        <Checkbox.Input
            value="rgb"
            {...register('rhf-colors')}
        />
        <Checkbox.Label>RGB</Checkbox.Label>
    </Checkbox>

    <Checkbox id="rhf-cmyk">
        <Checkbox.Input
            value="cmyk"
            {...register('rhf-colors')}
        />
        <Checkbox.Label>CMYK</Checkbox.Label>
    </Checkbox>

    <Checkbox id="rhf-hsl">
        <Checkbox.Input
            value="hsl"
            {...register('rhf-colors')}
            disabled
        />
        <Checkbox.Label>HSL</Checkbox.Label>
    </Checkbox>

    <CheckboxSet.Help>
        Use a <strong>1em</strong> padding between elements in the same <code>CheckboxSet</code>
    </CheckboxSet.Help>
</CheckboxSet>

<hr/>

Selected:
<ul>
    {selections && selections.map(selection => <li>{selection}</li>)}
</ul>
</>
```

#### Validation
```jsx
import { useState } from 'react';
import { Form, Checkbox, Button } from '@osuresearch/ui';

const [error, setError] = useState('');

<Form>
    <CheckboxSet name="favorite-food-set" id="favorite-food-set" error={error} required>
        <CheckboxSet.Legend>CheckboxSet with an error</CheckboxSet.Legend>

        <Checkbox id="favorite-food-pizza">
            <Checkbox.Input />
            <Checkbox.Label>Pizza</Checkbox.Label>
        </Checkbox>

        <Checkbox id="favorite-food-sushi">
            <Checkbox.Input />
            <Checkbox.Label>Sushi</Checkbox.Label>
        </Checkbox>

        <CheckboxSet.Help>
            A short list of options (e.g. yes/no)
            may be horizontally aligned with <strong>2em</strong> padding between options
        </CheckboxSet.Help>

        <CheckboxSet.Error />
    </CheckboxSet>

    <Button theme="primary" onClick={() => setError('You must select an option')}>Trigger Error</Button>
</Form>
```

#### Validation with React Hook Form (v7)

```jsx
import { useForm } from 'react-hook-form';
import { Form, Checkbox, Button } from '@osuresearch/ui';

const { register, formState: { errors }, watch, handleSubmit } = useForm({ mode: 'onBlur' });

const onSubmit = data => console.log(data);

const name = "favorite-food-set-rhf";

<Form onSubmit={handleSubmit(onSubmit)}>
    <CheckboxSet
        name={name}
        id={name}
        error={errors[name] && "You must select an option"}
        required
    >
        <CheckboxSet.Legend>CheckboxSet with an error</CheckboxSet.Legend>

        <Checkbox id="favorite-food-rhf-pizza">
            <Checkbox.Input
                value="Pizza"
                {...register(name, {
                    required: true
                })}
            />
            <Checkbox.Label>Pizza</Checkbox.Label>
        </Checkbox>

        <Checkbox id="favorite-food-rhf-sushi">
            <Checkbox.Input
                value="Sushi"
                {...register(name, {
                    required: true
                })}
            />
            <Checkbox.Label>Sushi</Checkbox.Label>
        </Checkbox>

        <CheckboxSet.Help>
            A short list of options (e.g. yes/no)
            may be horizontally aligned with <strong>2em</strong> padding between options
        </CheckboxSet.Help>

        <CheckboxSet.Error />
    </CheckboxSet>

    <Button theme="primary" type="submit">Submit</Button>

    <hr/>
    Value:
    {watch(name)}
</Form>
```


### Subcomponents
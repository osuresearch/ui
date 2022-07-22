```js noeditor
import { Icon } from '@ORIS/ui';

<div className="alert alert-primary">
    <Icon name="universal-access" circled={true} />
    <p><strong>Accessibility</strong></p>
    <p>
        <code>&#10094;Radio&#10095;</code> buttons must be wrapped in a <code>&#10094;RadioSet&#10095;</code> and include a <code>&#10094;RadioSet.Legend&#10095;</code> element as the first child for screen readers. The legend is your primary fieldset description.
    </p>
</div>
```

### Examples

#### Basic Implementation

```jsx
import { Radio } from '@ORIS/ui';

<RadioSet name="colors" id="colors-1" required>
    <RadioSet.Legend>
        Collection of radio buttons
    </RadioSet.Legend>

    <Radio id="rgb-123">
        <Radio.Input value="rgb" />
        <Radio.Label>RGB</Radio.Label>
    </Radio>

    <Radio id="cmyk-123">
        <Radio.Input value="cmyk" />
        <Radio.Label>CMYK</Radio.Label>
    </Radio>

    <Radio id="hsl-123">
        <Radio.Input value="hsl" />
        <Radio.Label>HSL</Radio.Label>
    </Radio>

    <RadioSet.Help>
        Add <code>required</code> to the containing <code>RadioSet</code> to create required forms
    </RadioSet.Help>
</RadioSet>
```

#### RadioSet with React Hook Form (v7)
```jsx
import { useForm } from 'react-hook-form';
import { Radio } from '@ORIS/ui';

const { register, watch } = useForm({ mode: 'onBlur' });

<>
<RadioSet name="rhf-radio-colors" id="rhf-radio-colors" required>
    <RadioSet.Legend>
        Collection of radio buttons
    </RadioSet.Legend>

    <Radio id="rhf-radio-rgb">
        <Radio.Input 
            value="rgb" 
            {...register('rhf-radio-colors', { 
                required: true 
            })}
        />
        <Radio.Label>RGB</Radio.Label>
    </Radio>

    <Radio id="rhf-radio-cmyk">
        <Radio.Input 
            value="cmyk" 
            {...register('rhf-radio-colors', { 
                required: true 
            })}
        />
        <Radio.Label>CMYK</Radio.Label>
    </Radio>

    <Radio id="rhf-radio-hsl">
        <Radio.Input 
            value="hsl"
            {...register('rhf-radio-colors', { 
                required: true 
            })}
        />
        <Radio.Label>HSL</Radio.Label>
    </Radio>

    <RadioSet.Help>
        Add <code>required</code> to the containing <code>RadioSet</code> to create required forms
    </RadioSet.Help>
</RadioSet>

<hr/>
Selected:
{watch('rhf-radio-colors')}
</>
```

#### Validation
```jsx
import { useState } from 'react';
import { Form, Radio, Button } from '@ORIS/ui';

const [error, setError] = useState('');

<Form>
    <RadioSet name="yes-no-123" id="yes-no-123" error={error} required>
        <RadioSet.Legend>RadioSet with an error</RadioSet.Legend>

        <Radio id="yes-123">
            <Radio.Input />
            <Radio.Label>Yes</Radio.Label>
        </Radio>

        <Radio id="no-123">
            <Radio.Input />
            <Radio.Label>No</Radio.Label>
        </Radio>

        <RadioSet.Help>
            A short list of options (e.g. yes/no)
            may be horizontally aligned with <strong>2em</strong> padding between options
        </RadioSet.Help>

        <RadioSet.Error />
    </RadioSet>

    <Button theme="primary" onClick={() => setError('You must select an option')}>Trigger Error</Button>
</Form>
```

#### Validation with React Hook Form (v7)

```jsx
import { useForm } from 'react-hook-form';
import { Form, Radio, Button } from '@ORIS/ui';

const { register, formState: { errors }, watch, handleSubmit } = useForm({ mode: 'onBlur' });

const onSubmit = data => console.log(data);

<Form onSubmit={handleSubmit(onSubmit)}>
    <RadioSet 
        name="yes-no-456" 
        id="yes-no-456" 
        error={errors['yes-no-456'] && "You must select an option"} 
        required
    >
        <RadioSet.Legend>RadioSet with an error</RadioSet.Legend>

        <Radio id="yes-456">
            <Radio.Input 
                value="yes"
                {...register('yes-no-456', { 
                    required: true
                })}
            />
            <Radio.Label>Yes</Radio.Label>
        </Radio>

        <Radio id="no-456">
            <Radio.Input 
                value="no" 
                {...register('yes-no-456', { 
                    required: true
                })}
            />
            <Radio.Label>No</Radio.Label>
        </Radio>

        <RadioSet.Help>
            A short list of options (e.g. yes/no)
            may be horizontally aligned with <strong>2em</strong> padding between options
        </RadioSet.Help>

        <RadioSet.Error />
    </RadioSet>

    <Button theme="primary" type="submit">Submit</Button>

    <hr/>
    Value:
    {watch('yes-no-456')}
</Form>
```


### Subcomponents
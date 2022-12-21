
### Example
This example uses [React Hook Form version 7](https://www.react-hook-form.com) for form handling and validation.

```jsx noeditor
import { Icon } from '@osuresearch/ui';

<div className="alert alert-primary">
    <Icon name='thumbs-o-up' circled />

    <p>
        React Hook Form is <em>highly</em> recommended for managing forms in OR React applications
    </p>
</div>
```

```js noeditor
import { Icon } from '@osuresearch/ui';

<div className="alert alert-secondary">
    <Icon name="universal-access" circled={true} />
    <p><strong>Accessibility</strong></p>
    <p>
        It is best to validate form fields on blur. This provides screen reader users contextual error feedback while they are completing the form.
    </p>
    <p>
        To accomplish this in React Hook Form, set the <code>mode</code> argument to <code>onBlur</code> when calling the <code>useForm</code> function (see implementation below)
    </p>
</div>
```

```jsx
import { useForm, Controller } from 'react-hook-form';
import {
    Form,
    Text,
    Select,
    Checkbox,
    CheckboxSet,
    DateTime,
    Radio,
    RadioSet,
    Time,
    Lookup,
    Button
} from '@osuresearch/ui';
import JsonApi from '@osuresearch/ui/search/drivers/JsonApi';

const { register, handleSubmit, control, formState: { errors } } = useForm({ mode: 'onBlur' });

const onSubmit = data => console.log('submit', data);

<Form onSubmit={handleSubmit(onSubmit)} noValidate>
    <div className="row">
        <div className="col">
            <Lookup
                id="search-for-person"
                driver={JsonApi('https://orapps.osu.edu/api/v1/person')}
                error={errors['search-for-person'] && "Select a person"}
                required
            >
                <Lookup.Label>
                    Search for a person
                </Lookup.Label>

                <Controller
                    name="search-for-person"
                    control={control}
                    rules={{ required: true }}
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                        fieldState: { invalid, isTouched, isDirty, error },
                        formState,
                    }) =>
                        <Lookup.Input
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                        ref={ref}
                        resultRenderer={
                            (hit) => <span>
                                {hit.attributes.name}&nbsp;
                                <small className="text-muted">
                                    ({hit.attributes.username})
                                </small>
                            </span>
                        } />
                    }
                />

                <Lookup.Error />
            </Lookup>
        </div>
        <div className="col">
            <Text
                id="email"
                required
                error={errors.email && errors.email.message}
            >
                <Text.Label>Email</Text.Label>
                <Text.Email
                    placeholder="me.9876@osu.edu"
                    {...register('email', {
                        required:'Input a valid email address'
                    })}
                />
                <Text.Error />
            </Text>
        </div>

        <div className="col">
            <DateTime
                id="birthdate"
                required
                error={errors.birthdate && errors.birthdate.message}
            >
                <DateTime.Label>
                    Date of Birth
                </DateTime.Label>

                <Controller
                    name="birthdate"
                    control={control}
                    rules={{ required: 'Input your birthdate' }}
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                        fieldState: { invalid, isTouched, isDirty, error },
                        formState,
                    }) => (
                        <DateTime.Input
                            onBlur={onBlur}
                            onChange={onChange}
                            value={value}
                            ref={ref}
                        />
                    )}
                />
                <DateTime.Error />
            </DateTime>
        </div>
    </div>

        <Text
            id="address"
            required
            error={errors.address && errors.address.message}
        >
            <Text.Label>Address</Text.Label>
            <Text.Input
                placeholder="1234 Main St"
                defaultValue="5678 Water St"
                {...register('address', {
                    required: 'Input your street address'
                })}
            />
            <Text.Error />
        </Text>

        <Text id="address2">
            <Text.Label>Address 2</Text.Label>
            <Text.Input
                placeholder="Apartment, studio, or floor"
                {...register('address2')}
            />
        </Text>

    <div className="row">
        <div className="col-md-6">
            <Text
                id="city"
                required
                error={errors.city && errors.city.message}
            >
                <Text.Label>City</Text.Label>
                <Text.Input
                    {...register('city', {
                        required: 'Input your city'
                    })}
                />
                <Text.Error />
            </Text>
        </div>
        <div className="col-md-4">
            <Select
                id="state"
                required
                error={errors.state && errors.state.message}
            >
                <Select.Label>State</Select.Label>
                <Select.Control
                    {...register('state', {
                        required: 'Select your state'
                    })}
                >
                    <Select.Option value=''>Choose...</Select.Option>
                    <Select.Option value='CA'>California</Select.Option>
                    <Select.Option value='OH'>Ohio</Select.Option>
                    <Select.Option value='AZ'>Arizona</Select.Option>
                    <Select.Option value='NY'>New York</Select.Option>
                </Select.Control>
                <Select.Error />
            </Select>
        </div>
        <div className="col-md-2">
            <Text
                id="zip"
                required
                error={errors.zip && errors.zip.message}
            >
                <Text.Label>ZIP</Text.Label>
                <Text.Input
                    {...register('zip', {
                        required: 'Input your ZIP code'
                    })}
                />
                <Text.Error />
            </Text>
        </div>
    </div>

        <RadioSet
            id="favorite-food"
            error={errors['favorite-food'] && 'Choose your favorite food'}
            required
        >
            <RadioSet.Legend>
                Favorite Food
            </RadioSet.Legend>
            <RadioSet.Inline>
                <Radio id="pizza">
                    <Radio.Input
                        value="pizza"
                        {...register('favorite-food', {
                            required: true
                        })}
                    />
                    <Radio.Label>Pizza</Radio.Label>
                </Radio>
                <Radio id="mac-n-cheese">
                    <Radio.Input
                        value="mac-n-cheese"
                        {...register('favorite-food', {
                            required: true
                        })}
                    />
                    <Radio.Label>Mac 'N Cheese</Radio.Label>
                </Radio>
                <Radio id="sushi">
                    <Radio.Input
                        value="sushi"
                        {...register('favorite-food', {
                            required: true
                        })}
                    />
                    <Radio.Label>Sushi</Radio.Label>
                </Radio>
            </RadioSet.Inline>
            <RadioSet.Error />
        </RadioSet>

        <CheckboxSet id="opt-in">
            <CheckboxSet.Legend>
                I want to receive
            </CheckboxSet.Legend>
            <Checkbox id="newsletter">
                <Checkbox.Input
                    value="newsletter"
                    {...register('opt-in')}
                />
                <Checkbox.Label>
                    The weekly newsletter
                </Checkbox.Label>
            </Checkbox>
            <Checkbox id="company-offers">
                <Checkbox.Input
                    value="company-offers"
                    {...register('opt-in')}
                />
                <Checkbox.Label>
                    Offers from the company
                </Checkbox.Label>
            </Checkbox>
            <Checkbox id="assoc-company-offers">
                <Checkbox.Input
                    value="assoc-company-offers"
                    {...register('opt-in')}
                />
                <Checkbox.Label>
                    Offers from associated companies
                </Checkbox.Label>
            </Checkbox>
            <CheckboxSet.Help>
                Choose all that apply
            </CheckboxSet.Help>
            <CheckboxSet.Error />
        </CheckboxSet>

        <Time
            id="pick-up"
            error={errors['pick-up'] && 'Enter the time you will pick up your drycleaning'}
            required
        >
            <Time.Label>
                Time to Pick Up Drycleaning
            </Time.Label>
            <Controller
                name="pick-up"
                control={control}
                rules={{ required: true }}
                render={({
                    field: { onChange, onBlur, value, name, ref },
                    fieldState: { invalid, isTouched, isDirty, error },
                    formState,
                }) => (
                    <Time.Input
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                        ref={ref}
                    />
                )}
            />
            <Time.Error />
        </Time>

        <Checkbox
            id="check"
            required
            error={errors.check && errors.check.message}
        >
            <Checkbox.Input
                {...register('check', {
                    required: 'Check this box'
                })}
            />
            <Checkbox.Label>Check me out</Checkbox.Label>
            <Checkbox.Error />
        </Checkbox>

    <Button type="submit" theme="primary">Sign in</Button>
</Form>
```
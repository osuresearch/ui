
### Example
This example uses [React Hook Form](https://www.react-hook-form.com) for validation.

```jsx noeditor
import { Icon } from '@ORIS/ui';

<div className="alert alert-primary">
    <Icon name='thumbs-o-up' circled />

    <p>
        React Hook Form is <em>highly</em> recommended for managing forms in OR React applications
    </p>
</div>
```

```js noeditor
import { Icon } from '@ORIS/ui';

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
    DateTime,
    FieldSet,
    Radio,
    Time,
    Lookup,
    Button
} from '@ORIS/ui';
import JsonApi from '@ORIS/ui/search/drivers/JsonApi';

const { register, errors, handleSubmit, control } = useForm({ mode: 'onBlur' });

const onSubmit = data => console.log('submit', data);

<Form onSubmit={handleSubmit(onSubmit)} noValidate>
    <div className='row'>
        <div className='col'>
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
                    render={props =>
                        <Lookup.Input {...props} resultRenderer={
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
        <div className='col'>
            <Text
                id="email"
                required
                error={errors.email && errors.email.message}
            >
                <Text.Label>Email</Text.Label>
                <Text.Email
                    placeholder='me.9876@osu.edu'
                    ref={register({
                        required: 'Input a valid email address'
                    })}
                />
                <Text.Error />
            </Text>
        </div>

        <div className='col'>
            <DateTime
                id="birthdate"
                required
                error={errors.birthdate && errors.birthdate.message}
            >
                <DateTime.Label>
                    Date of Birth
                </DateTime.Label>

                <Controller
                    name='birthdate'
                    control={control}
                    rules={{ required: 'Input your birthdate' }}
                    render={props => <DateTime.Input {...props} />}
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
                placeholder='1234 Main St'
                ref={register({
                    required: 'Input your street address'
                })}
                defaultValue='5678 Water St'
            />
            <Text.Error />
        </Text>



        <Text id="address2">
            <Text.Label>Address 2</Text.Label>
            <Text.Input
                placeholder='Apartment, studio, or floor'
                ref={register}
            />
        </Text>


    <div className='row'>
        <div className='col-md-6'>
            <Text
                id="city"
                required
                error={errors.city && errors.city.message}
            >
                <Text.Label>City</Text.Label>
                <Text.Input ref={register({
                    required: 'Input your city'
                })} />
                <Text.Error />
            </Text>
        </div>
        <div className='col-md-4'>
            <Select
                id="state"
                required
                error={errors.state && errors.state.message}
            >
                <Select.Label>State</Select.Label>
                <Select.Control ref={register({ required: 'Select your state' })}>
                    <Select.Option value=''>Choose...</Select.Option>
                    <Select.Option value='CA'>California</Select.Option>
                    <Select.Option value='OH'>Ohio</Select.Option>
                    <Select.Option value='AZ'>Arizona</Select.Option>
                    <Select.Option value='NY'>New York</Select.Option>
                </Select.Control>
                <Select.Error />
            </Select>
        </div>
        <div className='col-md-2'>
            <Text
                id="zip"
                required
                error={errors.zip && errors.zip.message}
            >
                <Text.Label>ZIP</Text.Label>
                <Text.Input ref={register({ required: 'Input your ZIP Code' })} />
                <Text.Error />
            </Text>
        </div>
    </div>

        <FieldSet
            id='favorite-food'
            error={errors["favorite-food"] && 'Choose your favorite food'}
            required
        >
            <FieldSet.Legend>
                Favorite Food
            </FieldSet.Legend>
            <FieldSet.Inline>
                <Radio id='pizza'>
                    <Radio.Input ref={register({ required: true })} />
                    <Radio.Label>Pizza</Radio.Label>
                </Radio>
                <Radio id='mac-n-cheese'>
                    <Radio.Input ref={register({ required: true })} />
                    <Radio.Label>Mac 'N Cheese</Radio.Label>
                </Radio>
                <Radio
                    id='sushi'
                >
                    <Radio.Input
                        ref={register({ required: true })}
                    />
                    <Radio.Label>Sushi</Radio.Label>
                </Radio>
            </FieldSet.Inline>
            <FieldSet.Error />
        </FieldSet>

        <FieldSet id='opt-in'>
            <FieldSet.Legend>
                I want to receive
            </FieldSet.Legend>
            <Checkbox id='newsletter'>
                <Checkbox.Input ref={register} />
                <Checkbox.Label>
                    The weekly newsletter
                </Checkbox.Label>
            </Checkbox>
            <Checkbox id='company-offers'>
                <Checkbox.Input ref={register} />
                <Checkbox.Label>
                    Offers from the company
                </Checkbox.Label>
            </Checkbox>
            <Checkbox id='assoc-company-offers'>
                <Checkbox.Input ref={register} />
                <Checkbox.Label>
                    Offers from associated companies
                </Checkbox.Label>
            </Checkbox>
            <FieldSet.Help>
                Choose all that apply
            </FieldSet.Help>
            <FieldSet.Error />
        </FieldSet>

        <Time
            id="pick-up"
            error={errors["pick-up"] && 'Enter the time you will pick up your drycleaning'}
            required
        >
            <Time.Label>
                Time to Pick Up Drycleaning
            </Time.Label>
            <Controller
                name='pick-up'
                control={control}
                rules={{ required: true }}
                render={props => <Time.Input {...props} />}
            />
            <Time.Error />
        </Time>

        <Checkbox
            id="check"
            required
            error={errors.check && errors.check.message}
        >
            <Checkbox.Input ref={register({ required: 'Check this box' })} />
            <Checkbox.Label>Check me out</Checkbox.Label>
            <Checkbox.Error />
        </Checkbox>

    <Button type='submit' theme='primary'>Sign in</Button>
</Form>
```
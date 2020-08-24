
### Example

```jsx
import { Text, Select, Checkbox, Button } from '@oris/ui';

<Form>
    <Form.Row>
        <Form.Group className='col-md-6'>
            <Text id="input-email" required>
                <Text.Label>Email</Text.Label>
                <Text.Email placeholder='me.9876@osu.edu' />
                <Text.Error />
            </Text>
        </Form.Group>
    </Form.Row>

    <Form.Group>
        <Text id="input-address" required>
            <Text.Label>Address</Text.Label>
            <Text.Input placeholder='1234 Main St' />
            <Text.Error />
        </Text>
    </Form.Group>

    <Form.Group>
        <Text id="input-address-2">
            <Text.Label>Address 2</Text.Label>
            <Text.Input placeholder='Apartment, studio, or floor' />
        </Text>
    </Form.Group>

    <Form.Row>
        <Form.Group className='col-md-6'>
            <Text id="input-city" required>
                <Text.Label>City</Text.Label>
                <Text.Input />
                <Text.Error />
            </Text>
        </Form.Group>

        <Form.Group className='col-md-4'>
            <Select id="input-state" required>
                <Select.Label>State</Select.Label>
                <Select.Control>
                    <Select.Option selected>Choose...</Select.Option>
                    <Select.Option>...</Select.Option>
                </Select.Control>
                <Select.Error />
            </Select>
        </Form.Group>

        <Form.Group className='col-md-2'>
            <Text id="input-zip" required>
                <Text.Label>ZIP</Text.Label>
                <Text.Input />
                <Text.Error />
            </Text>
        </Form.Group>
    </Form.Row>

    <Form.Group>
        <Checkbox id="grid-check">
            <Checkbox.Input />
            <Checkbox.Label>Check me out</Checkbox.Label>
        </Checkbox>
    </Form.Group>

    <Button type='submit' theme='primary'>Sign in</Button>
</Form>
```
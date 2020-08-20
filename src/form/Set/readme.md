### Examples

#### Basic Implementation

```jsx
import { Form, Checkbox, Text } from '@oris/ui';

<Form>
    <Form.Group>
        <Set>
            <Set.Legend>
                Collection of checkboxes in a <code>Set</code>
            </Set.Legend>

            <Set.Group name="colors">
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
            </Set.Group>

            <Text id="text-in-my-set">
                <Text.Label>You put a text in my set</Text.Label>
                <Text.Input />
            </Text>

            <Set.Help>
                Use a <strong>1em</strong> padding between elements in the same <code>Set</code>
            </Set.Help>
        </Set>
    </Form.Group>
</Form>
```

<!-- #### Validation
Tip: Try changing invalid to valid in the example below.

```jsx
import { Checkbox } from '@oris/ui/form';

<Set required invalid>
    <Set.Legend>
        A required checkbox set with an error
    </Set.Legend>

    <Set.Fields>
        <Checkbox id="chips" name="chips">
            <Checkbox.Input />
            <Checkbox.Label>Chips!</Checkbox.Label>
        </Checkbox>

        <Checkbox id="icecream" name="icecream">
            <Checkbox.Input />
            <Checkbox.Label>Ice Cream!</Checkbox.Label>
        </Checkbox>
    </Set.Fields>

    <Set.InvalidFeedback>
        You must select an option
    </Set.InvalidFeedback>

    <Set.ValidFeedback>
        You did it!
    </Set.ValidFeedback>
</Set>
``` -->

<!-- #### Inline Checkboxes
```jsx
import { Checkbox } from '@oris/ui/form';

<Set>
    <Set.Legend>
        A couple inline checkboxes, to save some space on a long form
    </Set.Legend>

    <Set.Fields inline>
        <Checkbox id="chips2" name="chips2">
            <Checkbox.Input />
            <Checkbox.Label>Chips!</Checkbox.Label>
        </Checkbox>

        <Checkbox id="icecream2" name="icecream2">
            <Checkbox.Input />
            <Checkbox.Label>Ice Cream!</Checkbox.Label>
        </Checkbox>
    </Set.Fields>

    <Set.Help>
        Add <code>inline</code> to the <code>Set.Fields</code> component
    </Set.Help>
</Set>
``` -->
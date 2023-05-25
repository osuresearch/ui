import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React, { useState } from 'react';
import { useListData } from 'react-stately';

import { Item } from '../Item';
import { Button } from '../Button';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { CheckboxSetField, CheckboxSetFieldProps } from './CheckboxSetField';

export default RUIComponentMeta<CheckboxSetFieldProps>(
  'Forms',
  CheckboxSetField
).withStyleSystemProps();

export const Overview = RUIComponentStory<CheckboxSetFieldProps>(
  (args) => (
    <CheckboxSetField {...args}>
      <Item key="dx11" description="Each item may have its own description">
        DirectX 11
      </Item>
      <Item key="metal">Metal</Item>
      <Item key="vulkan">Vulkan</Item>
    </CheckboxSetField>
  ),
  {
    name: 'apis',
    label: 'Supported APIs',
    description: 'This is description content for the entire set'
  }
);

export const UncontrolledValue = RUIComponentStory(Overview, {
  name: 'apis',
  label: 'Supported APIs',
  defaultValue: ['dx11', 'metal']
});

export const ControlledValue = RUIComponentStory<CheckboxSetFieldProps>((args) => {
  const [value, setValue] = useState<string[] | undefined>(['dx11', 'metal']);

  return (
    <>
      <CheckboxSetField {...args} value={value} onChange={setValue} label="Supported APIs">
        <Item key="dx11">DirectX 11</Item>
        <Item key="metal">Metal</Item>
        <Item key="vulkan">Vulkan</Item>
      </CheckboxSetField>
      <Text as="div">Selected: {value?.join(', ')}</Text>
      <Button onPress={() => setValue(undefined)}>Reset</Button>
    </>
  );
});

export const Required = RUIComponentStory(Overview, {
  name: 'apis',
  label: 'Supported APIs',
  isRequired: true,
  necessityIndicator: true
}).withDescription(`
  If form submission must be blocked until the field is filled out, combine both
  \`isRequired\` and \`necessityIndicator\`.

  If the field is only validated on the server or should be indicated as required
  but validation happens at a later time, just use \`necessityIndicator\`.
`);

export const ReadOnly = RUIComponentStory(Overview, {
  name: 'apis',
  label: 'Supported APIs',
  defaultValue: ['dx11', 'metal'],
  isReadOnly: true
});

export const Disabled = RUIComponentStory(Overview, {
  name: 'apis',
  label: 'Supported APIs',
  defaultValue: ['dx11', 'metal'],
  isDisabled: true
});

export const DisabledItem = RUIComponentStory(Overview, {
  name: 'apis',
  label: 'Supported APIs',
  disabledKeys: ['metal']
});

export const Error = RUIComponentStory(Overview, {
  name: 'apis',
  label: 'Supported APIs',
  validationState: 'invalid',
  errorMessage: 'Select at least one API.'
});

export const WithReactStatelyLists = RUIComponentStory<CheckboxSetFieldProps>((args) => {

  const [value, setValue] = useState<string[] | undefined>(['item_0', 'item_3']);
  const list = useListData({
    getKey: (item) => item.name,
    initialItems: [...Array(5)].map((_, i) => ({ name: `item_${i}`, label: `Item ${i}` })),
  })

  return (
    <Stack>
      <CheckboxSetField
        {...args}
        label="Supported APIs"
        items={list.items}
        value={value}
        onChange={setValue}
        placeholder="There are no items available"
      >
        {(item) => <Item key={item.name}>
          {item.label} <Button onPress={() => {
            list.remove(item.name);
            setValue((keys) => keys?.filter((key) => key !== item.name));
          }}>Remove</Button>
        </Item>}
      </CheckboxSetField>
      <Button onPress={() => list.append({
        name: 'item_' + Date.now(),
        label: 'Item ' + Date.now(),
      })}>Add item</Button>
      <Text>Selected: {value?.join(', ')}</Text>
    </Stack>
  );
}).withDescription(`
  This component supports React Stately's [useListData hook](https://react-spectrum.adobe.com/react-stately/useListData.html#example)
  to construct a list from a collection.

  This allows for dynamic modification of checkbox options while maintaining the current state.
`);

import React, { useState } from 'react';
import { useListData } from 'react-stately';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Item } from '../Item';
import { Text } from '../Text';
import {
  CheckboxGroupField,
  CheckboxGroupFieldProps,
  CheckboxGroupItem
} from './CheckboxGroupField';

export default RUIComponentMeta<CheckboxGroupFieldProps>(
  'Forms',
  CheckboxGroupField
).withStyleSystemProps();

export const Overview = RUIComponentStory<CheckboxGroupFieldProps>(
  (args) => (
    <CheckboxGroupField {...args} label="Supported APIs">
      <Item textValue="dx11" description="Each checkbox item may have its own description">
        DirectX 11
      </Item>
      <Item textValue="metal">Metal</Item>
      <Item textValue="vulkan">Vulkan</Item>
    </CheckboxGroupField>
  ),
  {
    description: 'This is description content for the entire set'
  }
);

export const DefaultValue = RUIComponentStory<CheckboxGroupFieldProps>(Overview, {
  defaultValue: ['dx11', 'metal']
});

export const Required = RUIComponentStory<CheckboxGroupFieldProps>(Overview, {
  isRequired: true,
  necessityIndicator: true
}).withDescription(`
  If form submission must be blocked until the field is filled out, combine both
  \`isRequired\` and \`necessityIndicator\`.

  If the field is only validated on the server or should be indicated as required
  but validation happens at a later time, just use \`necessityIndicator\`.
`);

export const ReadOnly = RUIComponentStory<CheckboxGroupFieldProps>(Overview, {
  defaultValue: ['dx11', 'metal'],
  isReadOnly: true
});

export const Disabled = RUIComponentStory<CheckboxGroupFieldProps>(Overview, {
  defaultValue: ['dx11', 'metal'],
  isDisabled: true
});

export const DisabledItem = RUIComponentStory<CheckboxGroupFieldProps>(Overview, {
  disabledKeys: ['metal']
});

export const Error = RUIComponentStory<CheckboxGroupFieldProps>(Overview, {
  validationState: 'invalid',
  errorMessage: 'Select at least one API.'
});

export const ControlledValue = RUIComponentStory<CheckboxGroupFieldProps>((args) => {
  const [value, setValue] = useState(['dx11', 'metal']);

  return (
    <>
      <CheckboxGroupField {...args} value={value} onChange={setValue} label="Supported APIs">
        <Item textValue="dx11">DirectX 11</Item>
        <Item textValue="metal">Metal</Item>
        <Item textValue="vulkan">Vulkan</Item>
      </CheckboxGroupField>
      <Text>Selected: {value.join(', ')}</Text>
    </>
  );
});

export const WithReactStatelyLists = RUIComponentStory<CheckboxGroupFieldProps>((args) => {
  const list = useListData({
    initialItems: [
      { name: 'dx11', label: 'DirectX 11' },
      { name: 'dx12', label: 'DirectX 12' },
      { name: 'ogles', label: 'OpenGL ES' },
      { name: 'ogl3', label: 'OpenGL 3.0' },
      { name: 'metal', label: 'Metal' },
      { name: 'vulkan', label: 'Vulkan' }
    ],
    initialSelectedKeys: ['dx12', 'metal', 'vulkan']
  });

  return (
    <>
      <CheckboxGroupField
        {...args}
        label="Supported APIs"
        items={list.items}
        selectedKeys={list.selectedKeys}
        onSelectionChange={list.setSelectedKeys}
      >
        {(item) => <Item key={item.name}>{item.label}</Item>}
      </CheckboxGroupField>
      <code>
        <pre>{JSON.stringify(list.selectedKeys, undefined, 2)}</pre>
      </code>
      <Text>Selected: {[...(list.selectedKeys as Set<any>).values()].join(', ')}</Text>
    </>
  );
}).withDescription(`
  This component supports React Stately's [useListData hook](https://react-spectrum.adobe.com/react-stately/useListData.html#example)
  to construct a list from a collection.

  This allows for dynamic modification of checkbox options while maintaining the current state.
`);

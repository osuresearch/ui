import React, { useState } from 'react';
import { useListData } from 'react-stately';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Item } from '../Item';
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
    label: 'Supported APIs',
    description: 'This is description content for the entire set'
  }
);

export const UncontrolledValue = RUIComponentStory(Overview, {
  label: 'Supported APIs',
  defaultValue: ['dx11', 'metal']
});

export const ControlledValue = RUIComponentStory<CheckboxSetFieldProps>((args) => {
  const [value, setValue] = useState(['dx11', 'metal']);

  return (
    <>
      <CheckboxSetField {...args} value={value} onChange={setValue} label="Supported APIs">
        <Item key="dx11">DirectX 11</Item>
        <Item key="metal">Metal</Item>
        <Item key="vulkan">Vulkan</Item>
      </CheckboxSetField>
      <Text>Selected: {value.join(', ')}</Text>
    </>
  );
});

export const Required = RUIComponentStory(Overview, {
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
  label: 'Supported APIs',
  defaultValue: ['dx11', 'metal'],
  isReadOnly: true
});

export const Disabled = RUIComponentStory(Overview, {
  label: 'Supported APIs',
  defaultValue: ['dx11', 'metal'],
  isDisabled: true
});

export const DisabledItem = RUIComponentStory(Overview, {
  label: 'Supported APIs',
  disabledKeys: ['metal']
});

export const Error = RUIComponentStory(Overview, {
  label: 'Supported APIs',
  validationState: 'invalid',
  errorMessage: 'Select at least one API.'
});

export const WithReactStatelyLists = RUIComponentStory<CheckboxSetFieldProps>((args) => {
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
      <CheckboxSetField
        {...args}
        label="Supported APIs"
        items={list.items}
        selectedKeys={list.selectedKeys}
        onSelectionChange={list.setSelectedKeys}
      >
        {(item) => <Item key={item.name}>{item.label}</Item>}
      </CheckboxSetField>
      <code>
        <pre>{JSON.stringify(list.selectedKeys, undefined, 2)}</pre>
      </code>
      <Text>Selected: {[...(list.selectedKeys as Set<any>).values()].join(', ')}</Text>
    </>
  );
}).withDescription(`
  >TODO: Not implemented. Need to match \`selectedKeys\` and \`onSelectionChange\`
  props back to the checkbox state of \`string[]\`.

  This component supports React Stately's [useListData hook](https://react-spectrum.adobe.com/react-stately/useListData.html#example)
  to construct a list from a collection.

  This allows for dynamic modification of checkbox options while maintaining the current state.
`);

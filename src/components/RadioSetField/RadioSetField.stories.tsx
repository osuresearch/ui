import React, { useState } from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { RadioSetField, RadioSetFieldProps } from './RadioSetField';

import { Item } from '../Item';
import { Text } from '../Text';

export default RUIComponentMeta<RadioSetFieldProps>('Forms', RadioSetField).withStyleSystemProps();

export const Overview = RUIComponentStory<RadioSetFieldProps>((args) => (
    <RadioSetField {...args}>
      <Item key="dx12" description="Each item may have its own description">
        DirectX 12
      </Item>
      <Item key="metal">Metal</Item>
      <Item key="vulkan">Vulkan</Item>
    </RadioSetField>
), {
  label: 'Supported API',
  description: 'This is description content for the entire set',
});

export const UncontrolledValue = RUIComponentStory(Overview, {
  label: 'Supported API',
  defaultValue: 'vulkan',
});

export const ControlledValue = RUIComponentStory<RadioSetFieldProps>((args) => {
  const [value, setValue] = useState('metal');

  return (
    <>
      <RadioSetField {...args} value={value} onChange={setValue} label="Supported API">
        <Item key="dx11">DirectX 11</Item>
        <Item key="metal">Metal</Item>
        <Item key="vulkan">Vulkan</Item>
      </RadioSetField>
      <Text>Selected: {value}</Text>
    </>
  );
});

export const Required = RUIComponentStory(Overview, {
  label: 'Supported API',
  isRequired: true,
  necessityIndicator: true
}).withDescription(`
  If form submission must be blocked until the field is filled out, combine both
  \`isRequired\` and \`necessityIndicator\`.

  If the field is only validated on the server or should be indicated as required
  but validation happens at a later time, just use \`necessityIndicator\`.
`);

export const ReadOnly = RUIComponentStory(Overview, {
  label: 'Supported API',
  defaultValue: 'metal',
  isReadOnly: true
});

export const Disabled = RUIComponentStory(Overview, {
  label: 'Supported API',
  defaultValue: 'metal',
  isDisabled: true
});

export const DisabledItem = RUIComponentStory(Overview, {
  label: 'Supported API',
  disabledKeys: ['metal']
});

export const Error = RUIComponentStory(Overview, {
  label: 'Supported API',
  validationState: 'invalid',
  errorMessage: 'Select at least one API.'
});

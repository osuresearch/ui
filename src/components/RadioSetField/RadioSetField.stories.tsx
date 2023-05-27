import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React, { useState } from 'react';

import { Item } from '../Item';
import { Text } from '../Text';
import { RadioSetField, RadioSetFieldProps } from './RadioSetField';
import { Button } from '../Button';

export default RUIComponentMeta<RadioSetFieldProps>('Forms', RadioSetField).withStyleSystemProps();

export const Overview = RUIComponentStory<RadioSetFieldProps>(
  (args) => (
    <RadioSetField {...args}>
      <Item key="dx12" description="Each item may have its own description">
        DirectX 12
      </Item>
      <Item key="metal">Metal</Item>
      <Item key="vulkan">Vulkan</Item>
    </RadioSetField>
  ),
  {
    name: 'api',
    label: 'Supported API',
    description: 'This is description content for the entire set'
  }
);

export const UncontrolledValue = RUIComponentStory(Overview, {
  name: 'api',
  label: 'Supported API',
  defaultValue: 'vulkan'
});

export const ControlledValue = RUIComponentStory<RadioSetFieldProps>((args) => {
  const [value, setValue] = useState<string | undefined>('metal');

  return (
    <>
      <RadioSetField {...args} value={value} onChange={setValue}>
        <Item key="dx11">DirectX 11</Item>
        <Item key="metal">Metal</Item>
        <Item key="vulkan">Vulkan</Item>
      </RadioSetField>

      <Text as="div">Selected: {value}</Text>
      <Button onPress={() => setValue(undefined)}>Reset</Button>
    </>
  );
}, {
  name: 'api',
  label: 'Supported API',
});

export const Required = RUIComponentStory(Overview, {
  name: 'api',
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
  name: 'api',
  label: 'Supported API',
  defaultValue: 'metal',
  isReadOnly: true
});

export const Disabled = RUIComponentStory(Overview, {
  name: 'api',
  label: 'Supported API',
  defaultValue: 'metal',
  isDisabled: true
});

export const DisabledItem = RUIComponentStory(Overview, {
  name: 'api',
  label: 'Supported API',
  disabledKeys: ['metal']
});

export const Error = RUIComponentStory(Overview, {
  name: 'api',
  label: 'Supported API',
  validationState: 'invalid',
  errorMessage: 'Select at least one API.'
});

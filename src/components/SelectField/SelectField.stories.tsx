import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React, { useState } from 'react';

import { Avatar } from '../Avatar';
import { Group } from '../Group';
import { Item } from '../Item';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { SelectField, SelectFieldProps } from './SelectField';

export default {
  title: 'Forms / SelectField',
  ...RUIComponentMeta(SelectField).withStyleSystemProps()
};

export const Overview = RUIComponentStory<SelectFieldProps>(
  (args) => (
    <SelectField {...args}>
      <Item key="dx11">DirectX 11</Item>
      <Item key="dx12">DirectX 12</Item>
      <Item key="ogles">OpenGL ES</Item>
      <Item key="ogl3">OpenGL 3.0</Item>
      <Item key="metal">Metal</Item>
      <Item key="vulkan">Vulkan</Item>
    </SelectField>
  ),
  {
    label: '3D graphics and computing API',
    description: 'This is description content for the field'
  }
);

export const UncontrolledValue = RUIComponentStory(Overview, {
  label: '3D graphics and computing API',
  defaultValue: 'vulkan'
}).withDescription(`
  Use \`defaultValue\` to specify the \`React.Key\` to
  select when the component is first mounted.
`);

export const ControlledValue = RUIComponentStory<SelectFieldProps>(
  (args) => {
    const [value, setValue] = useState<React.Key | undefined>(undefined);

    return (
      <>
        <SelectField value={value} onChange={setValue} {...args}>
          <Item key="dx12">DirectX 12</Item>
          <Item key="ogl3">OpenGL 3.0</Item>
          <Item key="metal">Metal</Item>
          <Item key="vulkan">Vulkan</Item>
        </SelectField>
        <Text>{`Your selection is: ${value}`}</Text>
      </>
    );
  },
  {
    label: '3D graphics and computing API'
  }
).withDescription(`
  The \`value\` prop controls the \`React.Key\` of the current selection
  while the \`onChange\` prop can be used to set the key to the user's choice.
`);

export const Required = RUIComponentStory(Overview, {
  label: '3D graphics and computing API',
  necessityIndicator: true,
  isRequired: true
});

export const ReadOnly = RUIComponentStory(Overview, {
  label: '3D graphics and computing API',
  value: 'vulkan',
  isReadOnly: true
}).withDescription(`
  Read only state is not supported natively by select, but our
  component supports an \`isReadOnly\` prop and custom render state
  for consistency with other form fields.
`);

export const Disabled = RUIComponentStory(Overview, {
  label: '3D graphics and computing API',
  value: 'vulkan',
  isDisabled: true
});

export const Error = RUIComponentStory(Overview, {
  label: '3D graphics and computing API',
  necessityIndicator: true,
  isRequired: true,
  validationState: 'invalid',
  errorMessage: 'Please specify an API to use.'
});

export const WithCustomItems = RUIComponentStory<SelectFieldProps>(
  (args) => {
    const people = [
      {
        name: 'Chase McManning',
        username: 'mcmanning.1'
      },
      {
        name: 'Neil Coplin',
        username: 'coplin.7'
      },
      {
        name: 'John Ray',
        username: 'ray.30'
      }
    ];

    return (
      <SelectField {...args} items={people}>
        {(person) => (
          <Item key={person.name} textValue={person.name}>
            <Group p="xs">
              <Avatar
                alt={person.name as string}
                name={person.name}
                opicUsername={person.username}
                size={40}
              />
              <Stack gap={0}>
                <Text>{person.name}</Text>
                <Text c="neutral-subtle" fs="sm">
                  {person.username}@osu.edu
                </Text>
              </Stack>
            </Group>
          </Item>
        )}
      </SelectField>
    );
  },
  {
    label: 'Reviewer'
  }
);

import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React, { useState } from 'react';

import { Avatar } from '../Avatar';
import { Group } from '../Group';
import { Item } from '../Item';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { ComboBoxField, ComboBoxFieldProps } from './ComboBoxField';
import { useAsyncList } from 'react-stately';

export default RUIComponentMeta<ComboBoxFieldProps>('Forms', ComboBoxField).withStyleSystemProps();

export const Overview = RUIComponentStory<ComboBoxFieldProps>(
  (args) => (
    <ComboBoxField {...args}>
      <Item key="dx11">DirectX 11</Item>
      <Item key="dx12">DirectX 12</Item>
      <Item key="ogles">OpenGL ES</Item>
      <Item key="ogl3">OpenGL 3.0</Item>
      <Item key="metal">Metal</Item>
      <Item key="vulkan">Vulkan</Item>
    </ComboBoxField>
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

export const ControlledValue = RUIComponentStory<ComboBoxFieldProps>(
  (args) => {
    const [value, setValue] = useState<string | undefined>(undefined);

    return (
      <>
        <ComboBoxField value={value} onChange={setValue} {...args}>
          <Item key="dx12">DirectX 12</Item>
          <Item key="ogl3">OpenGL 3.0</Item>
          <Item key="metal">Metal</Item>
          <Item key="vulkan">Vulkan</Item>
        </ComboBoxField>
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
});

export const Disabled = RUIComponentStory(Overview, {
  label: '3D graphics and computing API',
  value: 'vulkan',
  isDisabled: true
});

export const Error = RUIComponentStory(Overview, {
  label: '3D graphics and computing API',
  necessityIndicator: true,
  isRequired: true,
  errorMessage: 'Please specify an API to use.'
});

export const WithCustomItems = RUIComponentStory<ComboBoxFieldProps>(
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
      <ComboBoxField {...args} items={people}>
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
      </ComboBoxField>
    );
  },
  {
    label: 'Reviewer'
  }
).withDescription(`
  Use Item's \`textValue\` prop to populate the input when selected.

  If your field requires the user to select explicit values
  from the suggestion rather than arbitrary data entry,
  use a Lookup field instead.
`);


export const WithAsyncList = RUIComponentStory<ComboBoxFieldProps>(
  (args) => {
    type ItemType = { name: string }

    const list = useAsyncList<ItemType>({
      async load({ signal, filterText }) {
        const res = await fetch(
          `https://swapi.py4e.com/api/people/?search=${filterText}`,
          { signal }
        );
        const json = await res.json();

        return {
          items: json.results
        };
      }
    });

    return (
      <ComboBoxField {...args} items={list.items} inputValue={list.filterText} onInputChange={list.setFilterText}>
        {(item) => (
          <Item key={item.name} textValue={item.name}>{item.name}</Item>
        )}
      </ComboBoxField>
    );
  },
  {
    label: 'Character'
  }
).withDescription(`

  When using async lists, use \`inputValue\` and \`onInputChange\` to control the state of the search
  input rather than the resulting key that's omitted in \`onChange\`.
`);


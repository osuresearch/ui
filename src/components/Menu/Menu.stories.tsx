import { Selection } from '@react-types/shared';
import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React, { useState } from 'react';

import { Item } from '../Item';
import { Text } from '../Text';
import { Menu, MenuProps } from './Menu';

export default RUIComponentMeta<MenuProps>('Components', Menu);

export const Overview = RUIComponentStory<MenuProps>((args) => (
  <Menu {...args} label="Options" onAction={alert}>
    <Item key="copy">Copy</Item>
    <Item key="cut">Cut</Item>
    <Item key="paste">Paste</Item>
  </Menu>
));

export const Disabled = RUIComponentStory(Overview, {
  isDisabled: true,
});

export const WithDisabledItems = RUIComponentStory(Overview, {
  disabledKeys: ['cut']
});

export const DynamicItems = RUIComponentStory<MenuProps>((args) => {
  const items = [
    { id: 'new', name: 'New' },
    { id: 'open', name: 'Open' },
    { id: 'close', name: 'Close' },
    { id: 'save', name: 'Save' },
    { id: 'duplicate', name: 'Duplicate' },
    { id: 'rename', name: 'Rename' },
    { id: 'move', name: 'Move' }
  ];

  return (
    <Menu {...args} label="Options" items={items} onAction={alert}>
      {(item) => <Item key={item.id}>{item.name}</Item>}
    </Menu>
  );
});

export const SelectingItems = RUIComponentStory<MenuProps>((args) => {
  const [selection, setSelection] = useState<Selection>(new Set(['dx12', 'metal']));

  return (
    <>
      <Menu
        {...args}
        label="Transpile target(s)"
        selectionMode="multiple"
        selectedKeys={selection}
        onSelectionChange={setSelection}
      >
        <Item key="dx11">DirectX 11</Item>
        <Item key="dx12">DirectX 12</Item>
        <Item key="metal">Metal</Item>
        <Item key="gles">OpenGL ES</Item>
        <Item key="gl3">OpenGL 3.0</Item>
        <Item key="vulkan">Vulkan</Item>
      </Menu>
      <Text as="p">Selected: {[...(selection as Set<string>).values()].join(', ')}</Text>
    </>
  );
}).withDescription(`
  Using \`selectionMode="multiple"\` will make each list item selectable.

  Keyboard users can use \`Space\` to toggle items.
`);

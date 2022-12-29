import { Story } from '@storybook/react';
import React, { Key, useRef, useState } from 'react';
import { useCheckbox } from 'react-aria';
import { useToggleState } from 'react-stately';

import {
  Box,
  CheckboxSlotProps,
  UnstyledList as Component,
  Group,
  Item,
  RowSlotProps,
  Text,
  UnstyledListProps
} from '@osuresearch/ui';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<UnstyledListProps>('Utilities', Component).withBadge(
  'experimental'
);

export const Overview = RUIComponentStory<UnstyledListProps>((args) => (
  <Component {...args} aria-label="List with selection" selectionMode="multiple">
    <Item title="Take your next step toward becoming a Buckeye">
      Fisher first day of classes Brutus home to world-class faculty prepare our students to enter
      their careers as thought leaders flow of ideas Marion reflecting our world&apos;s medley of
      ideas, beliefs, backgrounds and cultures classsroom Lima we are all Buckeyes, but the myriad
      ways in which we differ make us stronger.
    </Item>
    <Item title="Empower people and their potential">
      Urban Arts Space homecoming week cutting edge of research and innovation passionate students
      &amp; innovative researchers highest-ranked public university in Ohio Fisher WOSU cutting edge
      of research and innovation bringing together ideas and disciplines to create bold, new
      connections nurturing an inclusive, equitable environment for all.
    </Item>
    <Item title="Highest-ranked public university in Ohio">
      Consectetur adipiscing elit we believe there is a power inside each and every one of us to
      create vibrant futures buckeye ipsum nurturing an inclusive, equitable environment for all
      biodiversity Moritz tbdbitl Columbus Ohio Union people are at the heart of our strengths our
      strengths are an authentic and distinctive combination of qualities reflective of who we are.
    </Item>
  </Component>
));

export const Long = RUIComponentStory<UnstyledListProps>((args) => (
  <Component {...args}>
    {Array.from(Array(20)).map((x, num) => (
      <Item key={num} title={`List item ${num + 1}`}>
        {`Content for list item ${num + 1}`}
      </Item>
    ))}
  </Component>
));

const Template = RUIComponentStory<UnstyledListProps>((args) => (
  <Component aria-label="Graphics API" {...args}>
    <Item key="dx11">DirectX 11</Item>
    <Item key="dx12">DirectX 12</Item>
    <Item key="ogl">OpenGL</Item>
    <Item key="ogles">OpenGL ES</Item>
    <Item key="metal">Metal</Item>
    <Item key="vk">Vulkan</Item>
  </Component>
));

export const SingleSelection = RUIComponentStory(Template, {
  selectionMode: 'single',
  selectionBehavior: 'replace',
  defaultSelectedKeys: ['vk']
});

export const MultipleSelection = RUIComponentStory(Template, {
  selectionMode: 'multiple',
  defaultSelectedKeys: ['dx11', 'dx12']
});

export const DisallowEmptySelection = RUIComponentStory(Template, {
  selectionMode: 'multiple',
  defaultSelectedKeys: ['vk'],
  disallowEmptySelection: true
});

export const DisabledRows = RUIComponentStory(Template, {
  selectionMode: 'single',
  selectionBehavior: 'replace',
  disabledKeys: ['ogl', 'dx11']
});

export const Controlled = RUIComponentStory<UnstyledListProps>((args) => {
  type Row = {
    id: string;
    name: string;
  };

  const rows: Row[] = [
    { id: 'dx11', name: 'DirectX 11' },
    { id: 'dx12', name: 'DirectX 12' },
    { id: 'ogl', name: 'OpenGL' },
    { id: 'ogles', name: 'OpenGL ES' },
    { id: 'metal', name: 'Metal' },
    { id: 'vk', name: 'Vulkan' }
  ];

  const [selectedKeys, setSelectedKeys] = useState<'all' | Set<Key>>(new Set(['dx11', 'dx12']));

  return (
    <>
      <Text>
        Selected keys: {selectedKeys !== 'all' && [...selectedKeys.values()].map((k) => <>{k}, </>)}
      </Text>
      <Component
        aria-label="Example controlled list"
        selectionMode="multiple"
        items={rows}
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        {...args}
      >
        {(item: Row) => <Item>{item.name}</Item>}
      </Component>
    </>
  );
}).withDescription(`
To control row selection use the \`selectedKeys\` prop paired
with the \`onSelectionChange\` callback. The \`key\` prop from
the selected rows will be passed into the callback when the
row is pressed.

For typing a hook that controls the state, use the following:

\`\`\`tsx
const [selectedKeys, setSelectedKeys] = useState<'all' | Set<Key>>(
  new Set([1, 2])
);
\`\`\`
`);

export const CheckboxSlot = RUIComponentStory<UnstyledListProps>((args) => {
  const SimpleCheckboxSlot = (props: CheckboxSlotProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const state = useToggleState(props.ariaCheckboxProps);

    const { inputProps } = useCheckbox(props.ariaCheckboxProps, state, ref);

    return <input {...inputProps} ref={ref} />;
  };

  return (
    <Component aria-label="Graphics API" {...args} checkboxSlot={SimpleCheckboxSlot}>
      <Item key="dx11">DirectX 11</Item>
      <Item key="dx12">DirectX 12</Item>
      <Item key="ogl">OpenGL</Item>
      <Item key="ogles">OpenGL ES</Item>
      <Item key="metal">Metal</Item>
      <Item key="vk">Vulkan</Item>
    </Component>
  );
});

const SimpleRowSlot = ({ item, checkboxProps, ...rowProps }: RowSlotProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const state = useToggleState(checkboxProps);

  const { inputProps } = useCheckbox(checkboxProps, state, ref);

  return (
    <Box p="sm" {...rowProps}>
      <Group align="center">
        <input {...inputProps} ref={ref} />
        <Text>{item.rendered}</Text>
      </Group>
    </Box>
  );
};

export const RowSlot = RUIComponentStory<UnstyledListProps>((args) => (
  <Component aria-label="Graphics API" {...args} rowSlot={SimpleRowSlot}>
    <Item key="dx11">DirectX 11</Item>
    <Item key="dx12">DirectX 12</Item>
    <Item key="ogl">OpenGL</Item>
    <Item key="ogles">OpenGL ES</Item>
    <Item key="metal">Metal</Item>
    <Item key="vk">Vulkan</Item>
  </Component>
)).withDescription(`

The following simple slot component is used for rendering each row:

\`\`\`tsx
const SimpleRowSlot = ({ item, checkboxProps, ...rowProps }: RowSlotProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const state = useToggleState(checkboxProps);

  const { inputProps } = useCheckbox(checkboxProps, state, ref);

  return (
    <Box p="sm" {...rowProps}>
      <Group align="center">
        <input {...inputProps} ref={ref} />
        <Text>{item.rendered}</Text>
      </Group>
    </Box>
  );
}
\`\`\`
`);

export const Polymorphic = RUIComponentStory<UnstyledListProps>((args) => (
  <Component as="ol" aria-label="Graphics API" {...args}>
    <Item key="dx11">DirectX 11</Item>
    <Item key="dx12">DirectX 12</Item>
    <Item key="ogl">OpenGL</Item>
    <Item key="ogles">OpenGL ES</Item>
    <Item key="metal">Metal</Item>
    <Item key="vk">Vulkan</Item>
  </Component>
)).withDescription(`
Use the \`as\` prop to polymorph the root element to an ordered list.
`);

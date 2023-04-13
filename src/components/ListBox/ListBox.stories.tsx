import { CollectionBase } from '@react-types/shared';
import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';
import { useListState } from 'react-stately';

import { ListBox as Component, ListBoxProps } from './ListBox';
import { Text } from '../Text';
import { Section } from '../Section';
import { Item } from '../Item';

export default RUIComponentMeta<ListBoxProps>('Internal', Component);

function UsageExample(props: CollectionBase<any> & ListBoxProps) {
  const listState = useListState(props);
  return <Component {...props} state={listState} />;
}

export const ListBox = RUIComponentStory<ListBoxProps>((args) => (
  <UsageExample {...args}>
    <Item key="item1">Item 1</Item>
    <Item key="item2">Item 2</Item>
    <Section title={<Text as="div" pt="xs" fw="semibold">Section 1</Text>}>
      <Item key="item1.1">Item 1.1</Item>
      <Item key="item1.2">Item 1.2</Item>
    </Section>
    <Section title={<Text as="div" pt="xs" fw="semibold">Section 2</Text>}>
      <Item key="item2.1">Item 2.1</Item>
      <Item key="item2.2">Item 2.2</Item>
    </Section>
  </UsageExample>
), {
  label: "Example"
});

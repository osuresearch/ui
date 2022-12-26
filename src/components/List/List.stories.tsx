import React from 'react';
import { Story, Meta } from '@storybook/react';

import { List, ListProps } from './List';
import { RUIComponentStory } from '~/.storybook/utils';

export default {
  title: 'Components/List',
  component: List,
  argTypes: {}
} as Meta<typeof List>;

const Template: Story<ListProps> = (args: ListProps) => (
  <List {...args}>
    <li>
      List item 1
      <List {...args}>
        <li>List item 1A</li>
        <li>List item 1B</li>
      </List>
    </li>
    <li>List item 2</li>
    <li>
      List item 3
      <List {...args}>
        <li>
          List item 3A
          <List {...args}>
            <li>List item 3Ai</li>
            <li>List item 3Aii</li>
          </List>
        </li>
        <li>List item 3B</li>
      </List>
    </li>
  </List>
);

export const UnorderedList = RUIComponentStory(Template);

export const OrderedList = RUIComponentStory(Template, {
  ordered: true
});

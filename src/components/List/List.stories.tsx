import React from 'react';
import { Story, Meta } from '@storybook/react';

import { List, ListProps } from './List';

export default {
  title: 'components/List',
  component: List,
  argTypes: {}
} as Meta<typeof List>;

const Template: Story<ListProps> = (args: ListProps) => (
  <List {...args}>
    <li>
      List item 1
      <ul>
        <li>List item 1A</li>
        <li>List item 1B</li>
      </ul>
    </li>
    <li>List item 2</li>
    <li>
      List item 3
      <ul>
        <li>
          List item 3A
          <ul>
            <li>List item 3Ai</li>
            <li>List item 3Aii</li>
          </ul>
        </li>
        <li>List item 3B</li>
      </ul>
    </li>
  </List>
);

export const Default = Template.bind({});
Default.args = {};

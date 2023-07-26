import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Item } from './Item';

const meta: Meta<typeof Item> = {
  title: 'Utility/Item',
  component: Item,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof Item>;

export const Example: Story = {
  render: (args) => <Item {...args} />,
  args: {}
};

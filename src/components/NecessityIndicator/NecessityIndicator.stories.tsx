import { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { NecessityIndicator } from './NecessityIndicator';

const meta: Meta<typeof NecessityIndicator> = {
  title: 'Internal/NecessityIndicator',
  component: NecessityIndicator,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof NecessityIndicator>;

export const Example: Story = {
  render: () => <NecessityIndicator />,
};

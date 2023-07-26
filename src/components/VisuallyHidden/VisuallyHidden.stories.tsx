import { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { VisuallyHidden } from './VisuallyHidden';

const meta = {
  title: 'Utility/VisuallyHidden',
  component: VisuallyHidden,
  argTypes: {},
} satisfies Meta<typeof VisuallyHidden>;

export default meta;
type Story = StoryObj<typeof VisuallyHidden>;

export const Example = {
  render: (args) => <VisuallyHidden {...args}>Hello screen readers!</VisuallyHidden>,
  args: {},
} satisfies Story;

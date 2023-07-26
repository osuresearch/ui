import { Meta, StoryObj } from '@storybook/react';

import { __TEMPLATE__ } from './__TEMPLATE__';

const meta = {
  title: '__GROUP__/__TEMPLATE__',
  component: __TEMPLATE__,
  argTypes: {},
} satisfies Meta<typeof __TEMPLATE__>;

export default meta;
type Story = StoryObj<typeof __TEMPLATE__>;

export const Example = {
  args: {},
} satisfies Story;

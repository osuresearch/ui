import { Meta, StoryObj } from '@storybook/react';

import { Page } from './Page';

const meta = {
  title: 'Layout/Page',
  component: Page,
  argTypes: {},
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof Page>;

export const Example = {
  args: {},
} satisfies Story;

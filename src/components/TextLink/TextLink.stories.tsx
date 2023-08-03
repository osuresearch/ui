import { Meta, StoryObj } from '@storybook/react';

import { TextLink } from './TextLink';

const meta = {
  title: 'Navigation/TextLink',
  component: TextLink,
  argTypes: {},
} satisfies Meta<typeof TextLink>;

export default meta;
type Story = StoryObj<typeof TextLink>;

export const Example = {
  args: {
    href: '#',
    children: 'Go to page 1',
  },
} satisfies Story;

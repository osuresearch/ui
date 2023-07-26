import { Meta, StoryObj } from '@storybook/react';

import { EmailLink } from './EmailLink';

const meta: Meta<typeof EmailLink> = {
  title: 'Navigation/EmailLink',
  component: EmailLink,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof EmailLink>;

export const Example: Story = {
  args: {
    href: 'mailto:research@osu.edu',
    children: 'Send us an email',
  },
};

import { Meta, StoryObj } from '@storybook/react';

import { CloseButton } from './CloseButton';

const meta = {
  title: 'Components/CloseButton',
  component: CloseButton,
  argTypes: {},
} satisfies Meta<typeof CloseButton>;

export default meta;
type Story = StoryObj<typeof CloseButton>;

export const Example = {
  args: {},
} satisfies Story;

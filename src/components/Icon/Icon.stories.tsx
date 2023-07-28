import { Meta, StoryObj } from '@storybook/react';

import { pink } from '../../theme/colors/pink';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Example: Story = {
  args: {
    name: 'heart',
    size: 64,
    sx: {
      color: pink[500],
    },
  },
};

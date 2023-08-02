import { Meta, StoryObj } from '@storybook/react';

import { FormFieldError } from './FormFieldError';

const meta = {
  title: 'Internal/FormFieldError',
  component: FormFieldError,
  argTypes: {},
} satisfies Meta<typeof FormFieldError>;

export default meta;
type Story = StoryObj<typeof FormFieldError>;

export const Example = {
  args: {
    children: 'Error message',
  },
} satisfies Story;

import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { FormField } from '../FormField';

const meta: Meta<typeof FormField> = {
  title: 'Internal/FormField',
  component: FormField,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof FormField>;

export const Example: Story = {
  render: (args) => <FormField {...args} />,
  args: {}
};

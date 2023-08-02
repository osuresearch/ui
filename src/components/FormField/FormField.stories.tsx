import { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { FormField } from '../FormField';

const meta: Meta<typeof FormField> = {
  title: 'Internal/FormField',
  component: FormField,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof FormField>;

export const Example: Story = {
  render: (args) => <FormField {...args} />,
  args: {
    id: 'demo',
    label: 'Field label',
    description: 'Field description',
    error: 'Field error',
    renderInput: (inputProps) => (
      <div>
        Element that receives input props <code>{JSON.stringify(inputProps)}</code>
      </div>
    ),
  },
};

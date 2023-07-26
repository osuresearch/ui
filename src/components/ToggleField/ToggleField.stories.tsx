import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ToggleField } from './ToggleField';

const meta: Meta<typeof ToggleField> = {
  title: 'Forms/ToggleField',
  component: ToggleField,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof ToggleField>;

export const Example: Story = {
  render: (args) => <ToggleField {...args} />,
  args: {
    name: 'notify',
    label: 'Notify me on changes',
    description: 'Description content'
  }
};

export const DefaultValue: Story = {
  args: {
    ...Example.args,
    defaultValue: true
  }
};

export const Required: Story = {
  args: {
    ...Example.args,
    required: true,
    necessityIndicator: true
  }
};

export const Disabled: Story = {
  args: {
    ...Example.args,
    disabled: true,
    defaultValue: true
  }
};

export const ReadOnly: Story = {
  args: {
    ...Example.args,
    readOnly: true,
    defaultValue: true
  }
};

export const Error: Story = {
  args: {
    ...Example.args,
    error: 'Your account is not configured for notifications'
  }
};

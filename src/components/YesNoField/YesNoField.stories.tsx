import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { YesNoField } from './YesNoField';

const meta: Meta<typeof YesNoField> = {
  title: 'Forms/YesNoField',
  component: YesNoField,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof YesNoField>;

export const Example: Story = {
  render: (args) => <YesNoField {...args} />,
  args: {
    name: 'misconduct',
    label: 'Have you conducted research misconduct in the last year?',
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
    error: 'You must select yes or no'
  }
};

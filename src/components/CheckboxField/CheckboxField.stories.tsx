import { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { CheckboxField } from './CheckboxField';

const meta: Meta<typeof CheckboxField> = {
  title: 'Forms/CheckboxField',
  component: CheckboxField,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof CheckboxField>;

export const Example: Story = {
  render: (args) => <CheckboxField {...args} />,
  args: {
    name: 'opt-in',
    label: 'Yes I want to receive hourly promotional email',
    description: 'Description content',
  },
};

export const DefaultValue: Story = {
  args: {
    ...Example.args,
    defaultValue: true,
  },
};

export const Required: Story = {
  args: {
    ...Example.args,
    required: true,
    necessityIndicator: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Example.args,
    disabled: true,
    defaultValue: true,
  },
};

export const ReadOnly: Story = {
  args: {
    ...Example.args,
    readOnly: true,
    defaultValue: true,
  },
};

export const Error: Story = {
  args: {
    ...Example.args,
    error: 'You must opt in for us to spam you',
  },
};

import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DateField } from './DateField';
import dayjs from 'dayjs';

const meta: Meta<typeof DateField> = {
  title: 'Forms/DateField',
  component: DateField,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof DateField>;

export const Example: Story = {
  render: (args) => <DateField {...args} />,
  args: {
    label: 'Date field',
    description: 'Description content'
  }
};

export const DefaultValue: Story = {
  args: {
    ...Example.args,
    defaultValue: dayjs().toISOString()
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
    defaultValue: dayjs().toISOString()
  }
};

export const ReadOnly: Story = {
  args: {
    ...Example.args,
    readOnly: true,
    defaultValue: dayjs().toISOString()
  }
};

export const Error: Story = {
  args: {
    ...Example.args,
    error: 'You need to fill out this field'
  }
};

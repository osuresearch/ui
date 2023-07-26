import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { NumberField } from './NumberField';

const meta: Meta<typeof NumberField> = {
  title: 'Forms/NumberField',
  component: NumberField,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof NumberField>;

export const Example: Story = {
  args: {
    label: 'Number field',
    description: 'Description content'
  }
};

export const WithMinMax: Story = {
  args: {
    ...Example.args,
    min: 0,
    max: 1,
    step: 0.05
  }
};

export const DefaultValue: Story = {
  args: {
    ...Example.args,
    defaultValue: 14
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
    defaultValue: 14
  }
};

export const ReadOnly: Story = {
  args: {
    ...Example.args,
    readOnly: true,
    defaultValue: 14
  }
};

export const Error: Story = {
  args: {
    ...Example.args,
    error: 'You need to fill out this field'
  }
};

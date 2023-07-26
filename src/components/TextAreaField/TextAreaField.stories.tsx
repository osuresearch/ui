import { Meta, StoryObj } from '@storybook/react';

import React, { useState } from 'react';

import { Stack, Typography } from '@mui/material';

import { TextAreaField } from './TextAreaField';

const meta: Meta<typeof TextAreaField> = {
  title: 'Forms/TextAreaField',
  component: TextAreaField,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof TextAreaField>;

export const Example: Story = {
  args: {
    label: 'Textarea field',
    description: 'Description content',
  },
};

export const DefaultValue: Story = {
  args: {
    ...Example.args,
    defaultValue: 'string value',
  },
};

export const ControlledValue: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | undefined>('String value');

    return (
      <Stack>
        <TextAreaField {...args} value={value} onChange={setValue} />
        <Typography>You entered: {value ?? <em>undefined</em>}</Typography>
      </Stack>
    );
  },
  args: {
    ...Example.args,
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
    defaultValue: 'string value',
  },
};

export const ReadOnly: Story = {
  args: {
    ...Example.args,
    readOnly: true,
    defaultValue: 'string value',
  },
};

export const Error: Story = {
  args: {
    ...Example.args,
    error: 'You need to fill out this field',
  },
};

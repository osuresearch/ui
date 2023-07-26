import { Meta, StoryObj } from '@storybook/react';

import React, { useState } from 'react';

import { Stack, Typography } from '@mui/material';

import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Forms/TextField',
  component: TextField,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Example: Story = {
  render: (args) => <TextField {...args} />,
  args: {
    label: 'Text field',
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
        <TextField {...args} value={value} onChange={setValue} />
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

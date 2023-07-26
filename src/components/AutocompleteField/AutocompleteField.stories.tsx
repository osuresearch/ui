import { Meta, StoryObj } from '@storybook/react';

import React, { useState } from 'react';

import { Stack, Typography } from '@mui/material';

import { AutocompleteField } from './AutocompleteField';

const meta: Meta<typeof AutocompleteField> = {
  title: 'Forms/AutocompleteField',
  component: AutocompleteField,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof AutocompleteField>;

export const Example: Story = {
  render: (args) => <AutocompleteField {...args} />,
  args: {
    label: 'Autocomplete field',
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
    const [value, setValue] = useState<string | undefined>('McManning, Chase');

    return (
      <Stack>
        <AutocompleteField {...args} value={value} onChange={setValue} />
        <Typography>You selected: {value ?? <em>undefined</em>}</Typography>
      </Stack>
    );
  },
  args: {
    label: 'Autocomplete field',
    description: 'Description content',
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

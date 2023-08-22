import { Meta, StoryObj } from '@storybook/react';

import React from 'react';

import { Link, Typography } from '@mui/material';

import { Item } from '../Item';
import { RadioSetField } from './RadioSetField';

const meta: Meta<typeof RadioSetField> = {
  title: 'Forms/RadioSetField',
  component: RadioSetField,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof RadioSetField>;

export const Example: Story = {
  render: (args) => (
    <RadioSetField {...args}>
      <Item key="dx11">DirectX 11</Item>
      <Item key="metal">Metal</Item>
      <Item key="vulkan">Vulkan</Item>
    </RadioSetField>
  ),
  args: {
    name: 'supported-api',
    label: 'Default APIs',
    description: 'Description content',
  },
};

export const ItemDescriptions: Story = {
  render: (args) => (
    <RadioSetField {...args}>
      <Item key="dx11" description="Developed by Microsoft and released in 2009">
        DirectX 11
      </Item>
      <Item key="metal" description="Developed by Apple and released in 2022">
        Metal
      </Item>
      <Item key="vulkan" description="Developed by the Kronos Group and released in 2016">
        Vulkan
      </Item>
    </RadioSetField>
  ),
  args: {
    ...Example.args,
  },
};

export const DefaultValue: Story = {
  ...Example,
  args: {
    ...Example.args,
    defaultValue: 'vulkan',
  },
};

export const Required: Story = {
  ...Example,
  args: {
    ...Example.args,
    required: true,
    necessityIndicator: true,
  },
};

export const Disabled: Story = {
  ...Example,
  args: {
    ...Example.args,
    disabled: true,
    defaultValue: 'vulkan',
  },
};

export const ReadOnly: Story = {
  ...Example,
  args: {
    ...Example.args,
    readOnly: true,
    defaultValue: 'vulkan',
  },
};

export const Error: Story = {
  ...Example,
  args: {
    ...Example.args,
    error: 'You need to specify a default API',
  },
};

export const ComplexContent: Story = {
  render: (args) => (
    <RadioSetField {...args}>
      <Item key="1">First choice</Item>
      <Item key="2">
        Second choice{' '}
        <strong>
          with <del>formatting</del>
        </strong>
      </Item>
      <Item key="3">
        Third choice with <strong>formatting</strong> and a list:
        <ul>
          <li>first item</li>
          <li>second item</li>
          <li>third item</li>
        </ul>
        Followed by a <Link href="#">link</Link>.
      </Item>
      <Item key="4">Fourth choice</Item>
    </RadioSetField>
  ),
  args: {
    name: 'complex',
    label: 'Complex options',
  },
};

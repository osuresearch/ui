import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SelectField } from './SelectField';
import { Item } from '../Item';

const meta: Meta<typeof SelectField> = {
  title: 'Forms/SelectField',
  component: SelectField,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof SelectField>;

export const Example: Story = {
  render: (args) => (
    <SelectField {...args}>
      <Item key="dx11">DirectX 11</Item>
      <Item key="metal">Metal</Item>
      <Item key="vulkan">Vulkan</Item>
    </SelectField>
  ),
  args: {
    name: 'supported-api',
    label: 'Default APIs',
    description: 'Description content'
  }
};

export const ItemDescriptions: Story = {
  render: (args) => (
    <SelectField {...args}>
      <Item key="dx11" description="Developed by Microsoft and released in 2009">
        DirectX 11
      </Item>
      <Item key="metal" description="Developed by Apple and released in 2022">
        Metal
      </Item>
      <Item key="vulkan" description="Developed by the Kronos Group and released in 2016">
        Vulkan
      </Item>
    </SelectField>
  ),
  args: {
    ...Example.args
  }
};

export const DefaultValue: Story = {
  ...Example,
  args: {
    ...Example.args,
    defaultValue: 'vulkan'
  }
};

export const Required: Story = {
  ...Example,
  args: {
    ...Example.args,
    required: true,
    necessityIndicator: true
  }
};

export const Disabled: Story = {
  ...Example,
  args: {
    ...Example.args,
    disabled: true,
    defaultValue: 'vulkan'
  }
};

export const ReadOnly: Story = {
  ...Example,
  args: {
    ...Example.args,
    readOnly: true,
    defaultValue: 'vulkan'
  }
};

export const Error: Story = {
  ...Example,
  args: {
    ...Example.args,
    error: 'You need to specify a default API'
  }
};

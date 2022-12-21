import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './index';

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {}
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const Small = Template.bind({});
Small.args = {
  small: true
};

export const Alternate = Template.bind({});
Alternate.args = {
  alternate: true
};

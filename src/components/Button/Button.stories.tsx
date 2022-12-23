import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './index';
import { RUIComponentMeta } from '~/.storybook/utils';

export default RUIComponentMeta<ButtonProps>('Components', Button)
  .withStyleSystemProps()
  .withBadge('stable');

const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args}>Click me!</Button>;

export const Overview = Template.bind({});
Overview.args = {};

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
  variant: 'outline'
};

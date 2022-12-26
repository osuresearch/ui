import { Button, ButtonProps, Icon } from '@osuresearch/ui';
import { Story } from '@storybook/react';
import React from 'react';

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

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  variant: 'outline',
  leftSlot: <Icon name="envelope" size={24} />
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  variant: 'default',
  small: true,
  rightSlot: <Icon name="caret" size={24} />
};

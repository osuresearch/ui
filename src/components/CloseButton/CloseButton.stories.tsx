import React from 'react';
import { Story, Meta } from '@storybook/react';

import { CloseButton, CloseButtonProps } from './CloseButton';

export default {
  title: 'components/CloseButton',
  component: CloseButton,
  argTypes: {}
} as Meta<typeof CloseButton>;

const Template: Story<CloseButtonProps> = (args: CloseButtonProps) => (
  <CloseButton {...args}>CloseButton - created through newComponent</CloseButton>
);

export const Default = Template.bind({});
Default.args = {};

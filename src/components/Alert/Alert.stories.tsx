import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Alert, AlertProps } from './index';

export default {
  title: 'atoms/Alert',
  component: Alert,
  argTypes: {}
} as Meta<typeof Alert>;

const Template: Story<AlertProps> = (args: AlertProps) => (
  <Alert {...args}>This is additional text about this message</Alert>
);

export const Default = Template.bind({});
Default.args = {
  c: 'info',
  title: 'This is an alert title'
};

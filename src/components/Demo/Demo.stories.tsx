import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Demo, DemoProps } from './Demo';

export default {
  title: 'components/Demo',
  component: Demo,
  argTypes: {}
} as Meta<typeof Demo>;

const Template: Story<DemoProps> = (args: DemoProps) => (
  <Demo {...args}>Demo - created through newComponent</Demo>
);

export const Default = Template.bind({});
Default.args = {};

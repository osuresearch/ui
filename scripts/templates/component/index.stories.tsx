import React from 'react';
import { Story, Meta } from '@storybook/react';

import { __TEMPLATE__, __TEMPLATE__Props } from './__TEMPLATE__';

export default {
  title: '__GROUP__/__TEMPLATE__',
  component: __TEMPLATE__,
  argTypes: {}
} as Meta<typeof __TEMPLATE__>;

const Template: Story<__TEMPLATE__Props> = (args: __TEMPLATE__Props) => (
  <__TEMPLATE__ {...args}>__TEMPLATE__ - created through newComponent</__TEMPLATE__>
);

export const Default = Template.bind({});
Default.args = {};

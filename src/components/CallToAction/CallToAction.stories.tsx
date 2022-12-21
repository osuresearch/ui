import React from 'react';
import { Story, Meta } from '@storybook/react';

import { CallToAction, CallToActionProps } from './CallToAction';

export default {
  title: 'components/CallToAction',
  component: CallToAction,
  argTypes: {}
} as Meta<typeof CallToAction>;

const Template: Story<CallToActionProps> = (args: CallToActionProps) => (
  <CallToAction {...args}>Call to Action</CallToAction>
);

export const Default = Template.bind({});
Default.args = {};

export const PolymorphicAnchor = () => (
  <CallToAction component="a" href="https://example.com">
    Go to Example
  </CallToAction>
);

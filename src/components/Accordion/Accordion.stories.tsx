import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Accordion, AccordionProps } from './Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {}
} as Meta<typeof Accordion>;

const Template: Story<AccordionProps> = (args: AccordionProps) => (
  <Accordion {...args}>Accordion - created through newComponent</Accordion>
);

export const Default = Template.bind({});
Default.args = {};

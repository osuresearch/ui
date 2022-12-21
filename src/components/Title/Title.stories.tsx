import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Title, TitleProps } from './index';

export default {
  title: 'atoms/Title',
  component: Title,
  argTypes: {}
} as Meta<typeof Title>;

const Template: Story<TitleProps> = (args: TitleProps) => (
  <Title {...args}>This is a title example</Title>
);

export const Default = Template.bind({});
Default.args = {
  order: 1
};

export const Examples: Story<TitleProps> = () => (
  <>
    <Title order={1}>This is an h1 example</Title>
    <Title order={2}>This is an h2 example</Title>
    <Title order={3}>This is an h3 example</Title>
  </>
);

export const Variants: Story<TitleProps> = () => (
  <>
    <Title order={1} variant="sans">
      This is an h1 sans example
    </Title>
    <Title order={1} variant="section">
      This is an h1 section example
    </Title>
    <Title order={2} variant="section">
      This is an h2 section example
    </Title>
    <Title order={3} variant="section">
      This is an h3 section example
    </Title>
  </>
);
Variants.parameters = {
  docs: {
    description: {
      story: 'Notes here about this variant'
    }
  }
};

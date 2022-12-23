import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Title, TitleProps } from '@osuresearch/ui';
import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<TitleProps>('Components', Title).withBadge('stable');

const Template: Story<TitleProps> = (args: TitleProps) => (
  <Title {...args}>This is a title example</Title>
);

export const Overview = Template.bind({});
Overview.args = {
  level: 1
};

export const Examples: Story<TitleProps> = () => (
  <>
    <Title level={1}>This is a Heading 1 example</Title>
    <Title level={2}>This is a Heading 2 example</Title>
    <Title level={3}>This is a Heading 3 example</Title>
  </>
);

export const Variants: Story<TitleProps> = () => (
  <>
    <Title level={1} variant="sans">
      This is a Heading 1 sans example
    </Title>
    <Title level={2} variant="section">
      This is an Heading 2 section example
    </Title>
    <Title level={3} variant="section">
      This is an Heading 3 section example
    </Title>
  </>
);

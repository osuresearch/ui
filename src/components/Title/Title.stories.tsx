import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Title, TitleProps } from '@osuresearch/ui';
import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<TitleProps>('Components', Title)
  .withBadge('atom')
  .withBadge('stable');

const Template: Story<TitleProps> = (args: TitleProps) => (
  <Title {...args}>This is a title example</Title>
);

export const Overview = RUIComponentStory(Template, {
  level: 1
});

export const Levels = RUIComponentStory((args) => (
  <>
    <Title level={1}>This is a Heading 1 example</Title>
    <Title level={2}>This is a Heading 2 example</Title>
    <Title level={3}>This is a Heading 3 example</Title>
    <Title level={4}>This is a Heading 4 example</Title>
  </>
));

export const SansVariant = RUIComponentStory((args) => (
  <Title level={1} variant="sans">
    This is a Heading 1 sans example
  </Title>
));

export const Polymorphic = RUIComponentStory((args) => (
  <Title component="div" level={1}>
    This is a div styled as Heading 1
  </Title>
));

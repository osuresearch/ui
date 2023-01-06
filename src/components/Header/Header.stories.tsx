import { Story } from '@storybook/react';
import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Header, HeaderProps } from './Header';

export default RUIComponentMeta<HeaderProps>('Components', Header);

const Template: Story<HeaderProps> = (args: HeaderProps) => (
  <Header {...args}>This is a heading example</Header>
);

export const Overview = RUIComponentStory(Template, {
  level: 1
});

export const Levels = RUIComponentStory((args) => (
  <>
    <Header level={1}>This is a Heading 1 example</Header>
    <Header level={2}>This is a Heading 2 example</Header>
    <Header level={3}>This is a Heading 3 example</Header>
    <Header level={4}>This is a Heading 4 example</Header>
  </>
)).withDescription('Header font sizes responsively adjust for smaller screens');

export const SansVariant = RUIComponentStory((args) => (
  <Header level={1} variant="sans">
    This is a Heading 1 sans example
  </Header>
));

export const Polymorphic = RUIComponentStory((args) => (
  <Header as="div" level={1}>
    This is a div styled as Heading 1
  </Header>
)).withDescription(`
  Use polymorphics when you need to display content as a header, but without
  using the semantic header elements that may cause problems for screen readers.
`);

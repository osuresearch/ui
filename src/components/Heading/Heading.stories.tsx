import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import { Story } from '@storybook/react';
import React from 'react';

import { Heading, HeadingProps } from './Heading';

export default RUIComponentMeta<HeadingProps>('Components', Heading);

const Template: Story<HeadingProps> = (args: HeadingProps) => (
  <Heading {...args}>This is a heading example</Heading>
);

export const Overview = RUIComponentStory(Template, {
  level: 1
});

export const Levels = RUIComponentStory(() => (
  <>
    <Heading level={1}>This is a Heading 1 example</Heading>
    <Heading level={2}>This is a Heading 2 example</Heading>
    <Heading level={3}>This is a Heading 3 example</Heading>
    <Heading level={4}>This is a Heading 4 example</Heading>
  </>
)).withDescription('Header font sizes responsively adjust for smaller screens');

export const SansVariant = RUIComponentStory(() => (
  <Heading level={1} variant="sans">
    This is a Heading 1 sans example
  </Heading>
));

export const Polymorphic = RUIComponentStory(() => (
  <Heading as="div" level={1}>
    This is a div styled as Heading 1
  </Heading>
)).withDescription(`
  Use polymorphics when you need to display content as a header, but without
  using the semantic header elements that may cause problems for screen readers.
`);

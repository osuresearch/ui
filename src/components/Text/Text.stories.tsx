import { Story } from '@storybook/react';
import React from 'react';

import { Paper } from '@osuresearch/ui';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Text, TextProps } from './Text';

export default RUIComponentMeta<TextProps>('Components', Text)
  .withStyleSystemProps()
  .withBadge('atom')
  .withBadge('stable');

const Template: Story<TextProps> = (args) => (
  <Text {...args}>The quick brown fox jumped over the lazy dog.</Text>
);

export const Overview = RUIComponentStory(Template);

export const HelpText = RUIComponentStory(Template, {
  c: 'dark',
  fs: 'sm'
}).withDescription(`
  Additional help text is typically shown smaller and slightly
  lighter than the base color to de-emphasize the content
`);

export const BreakWords = RUIComponentStory((args) => (
  <Paper maw="xs" variant="panel">
    <Text>
      The longest word in any of the major English language dictionaries is{' '}
      <Text fw="bold">pneumonoultramicroscopicsilicovolcanoconiosis</Text>, a word that refers to a
      lung disease contracted from the inhalation of very fine silica particles, specifically from a
      volcano; medically, it is the same as silicosis.
    </Text>
  </Paper>
)).withDescription(`
  Text will automatically add line breaks mid-word if needed
`);

export const Polymorphic = RUIComponentStory((args) => (
  <>
    <Text component="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget elit ac arcu luctus
      varius. Vivamus egestas neque ut sem auctor vehicula. Sed suscipit lobortis porta. Etiam
      vulputate iaculis diam, a suscipit sem accumsan et. Fusce consectetur, ligula eget vehicula
      auctor, metus ipsum tempor nibh, vitae mollis purus felis at dui. Nullam quis est ac libero
      maximus mollis. Quisque porta elementum placerat. Ut accumsan lobortis dolor id pretium. Cras
      placerat quis purus eu vestibulum. Aenean venenatis, est non semper sagittis, leo quam
      consequat sem, placerat aliquet justo nulla ac est. Aliquam scelerisque dolor felis, quis
      ullamcorper orci viverra sit amet. Duis eu cursus massa. Praesent efficitur eget felis vitae
      aliquet. Aliquam consequat sollicitudin nunc in semper. Donec pellentesque a sapien eu
      dapibus.
    </Text>
    <Text component="p">
      Vestibulum cursus dolor neque, eget porttitor purus fermentum condimentum. Praesent sagittis
      lorem et bibendum faucibus. Sed quis erat placerat, tempor magna at, dictum ante. Quisque
      fringilla, orci at tristique imperdiet, nunc lacus faucibus mi, ultricies dapibus nunc enim
      vel nibh. Aliquam scelerisque tortor ut ipsum pulvinar vehicula. Aenean eleifend odio elit, ac
      mattis ligula convallis sed. Nulla quis justo at justo gravida eleifend. Morbi blandit nulla
      eu nunc vulputate venenatis. Mauris ante eros, scelerisque quis bibendum ut, vehicula quis
      nibh.
    </Text>
  </>
)).withDescription(`
  Text can be a semantic paragraph element by using the \`component\` prop
`);

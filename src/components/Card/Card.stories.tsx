import { RUIComponentMeta } from '@sb/utils';
import { Story } from '@storybook/react';
import React from 'react';

import { Card, CardProps } from './Card';

export default RUIComponentMeta<CardProps>('Ohio State', Card).withStyleSystemProps();

const Template: Story<CardProps> = (args: CardProps) => (
  <Card {...args} href="https://example.com">
    Script Ohio tbdbitl non magna quis tortor volutpat flow of ideas The Lantern vestibulum ligula
    efficitur Woody Hayes highest-ranked public university in Ohio.
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  image: 'https://s3.amazonaws.com/bux.osu.edu/img/example-images/oxley_9599.jpg',
  headline: 'This is a default card',
  callToAction: 'Call to Action',
  withBorder: true
};

export const GrayBackground = Template.bind({});
GrayBackground.args = {
  image: 'https://s3.amazonaws.com/bux.osu.edu/img/example-images/oxley_9599.jpg',
  headline: 'This is a default card',
  callToAction: 'Call to Action',
  variant: 'panel'
};

export const LinkedHeadline = Template.bind({});
LinkedHeadline.args = {
  image: 'https://placeimg.com/400/225/animals',
  headline: 'This is about an animal',
  callToAction: 'Call to Action',
  linkedHeadline: true
};

export const Storytelling = Template.bind({});
Storytelling.args = {
  image: 'https://placeimg.com/400/225/animals',
  taxonomy: 'Optional Taxonomy',
  headline: 'This is about an animal and maybe this heading is two lines long',
  variant: 'storytelling',
  minutes: 3
};

export const ImageOmitted = Template.bind({});
ImageOmitted.args = {
  headline: 'This is a card without an image',
  variant: 'panel',
  callToAction: 'Call to Action'
};

const BodyTextOmittedTemplate: Story<CardProps> = (args: CardProps) => (
  <Card {...args} href="https://example.com" />
);

export const BodyTextOmitted = BodyTextOmittedTemplate.bind({});
BodyTextOmitted.args = {
  image: 'https://s3.amazonaws.com/bux.osu.edu/img/example-images/oxley_9599.jpg',
  headline: 'This is a card without body text',
  callToAction: 'Call to Action',
  withBorder: true
};

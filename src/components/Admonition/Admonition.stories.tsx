import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import { StoryFn } from '@storybook/react';
import React from 'react';

import { Admonition, AdmonitionProps } from '../Admonition';

export default {
  title: 'Components / Admonition',
  ...RUIComponentMeta(Admonition)
};

const Template: StoryFn<AdmonitionProps> = (args: AdmonitionProps) => (
  <Admonition {...args}>This is text content that you want to call out for the user</Admonition>
);

export const Note = RUIComponentStory(Template, {
  variant: 'note'
});

export const Tip = RUIComponentStory(Template, {
  variant: 'tip'
});

export const Info = RUIComponentStory(Template, {
  variant: 'info'
});

export const Caution = RUIComponentStory(Template, {
  variant: 'caution'
});

export const Critical = RUIComponentStory(Template, {
  variant: 'critical'
});

export const WithCustomTitle = RUIComponentStory(Template, {
  variant: 'critical',
  title: 'This is really bad'
});

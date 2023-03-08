import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import { Story } from '@storybook/react';
import React from 'react';

import { Admonition, AdmonitionProps } from '../Admonition';

export default RUIComponentMeta<AdmonitionProps>('Components', Admonition);

const Template: Story<AdmonitionProps> = (args: AdmonitionProps) => (
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

export const Danger = RUIComponentStory(Template, {
  variant: 'danger'
});

export const WithCustomTitle = RUIComponentStory(Template, {
  variant: 'note',
  title: 'Your Title'
});

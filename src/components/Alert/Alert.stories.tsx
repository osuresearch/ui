import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import { StoryFn } from '@storybook/react';
import React from 'react';

import { Alert, AlertProps } from '../Alert';

export default {
  title: 'Components / Alert',
  ...RUIComponentMeta(Alert)
};

const Template: StoryFn<AlertProps> = (args: AlertProps) => (
  <Alert {...args}>This is additional text about this message.</Alert>
);

export const Info = RUIComponentStory(Template, {
  variant: 'info',
  title: 'This is an info message'
});

export const Success = RUIComponentStory(Template, {
  variant: 'success',
  title: 'This is a success message',
  dismissible: true
});

export const Caution = RUIComponentStory(Template, {
  variant: 'caution',
  title: 'This is a caution message',
  dismissible: true
});

export const Critical = RUIComponentStory(Template, {
  variant: 'critical',
  title: 'This is a critical message',
  dismissible: true
});

import { Story } from '@storybook/react';
import React from 'react';

import { Alert, AlertProps } from '@osuresearch/ui';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<AlertProps>('Components', Alert);

const Template: Story<AlertProps> = (args: AlertProps) => (
  <Alert {...args}>This is additional text about this message.</Alert>
);

export const Overview = RUIComponentStory(Template, {
  variant: 'info',
  title: 'This is an alert title'
});

export const Success = RUIComponentStory(Template, {
  variant: 'success',
  title: 'This is a success message',
  dismissible: true
});

export const Warning = RUIComponentStory(Template, {
  variant: 'warning',
  title: 'This is a warning message',
  dismissible: true
});

export const Error = RUIComponentStory(Template, {
  variant: 'error',
  title: 'This is an error message',
  dismissible: true
});

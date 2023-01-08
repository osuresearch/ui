import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { FormDialog as Component, FormDialogProps } from './FormDialog';

export default RUIComponentMeta<FormDialogProps>('Dialogs', Component);

export const FormDialog = RUIComponentStory<FormDialogProps>(
  (args) => (
    <Component
      {...args}
      onSubmit={(e) => {
        e.preventDefault();
        alert('form onSubmit');
      }}
    >
      <input type="text" />
      <input type="text" />
    </Component>
  ),
  {
    title: 'My form'
  }
);

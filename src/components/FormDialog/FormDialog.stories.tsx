import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { CheckboxField } from '../CheckboxField';
import { Stack } from '../Stack';
import { TextAreaField } from '../TextAreaField';
import { FormDialog as Component, FormDialogProps } from './FormDialog';

export default {
  title: 'Internal / FormDialog',
  ...RUIComponentMeta(Component)
};

export const FormDialog = RUIComponentStory<FormDialogProps>(
  (args) => (
    <Component
      {...args}
      onSubmit={(e) => {
        e.preventDefault();
        alert('form onSubmit');
      }}
    >
      <Stack w={480} align="stretch">
        <TextAreaField
          label="Text area label"
          description="Some description content"
          isRequired
          necessityIndicator
        />
        <CheckboxField label="I agree to the above" isRequired />
      </Stack>
    </Component>
  ),
  {
    title: 'My form'
  }
);

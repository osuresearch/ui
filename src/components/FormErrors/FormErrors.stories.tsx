import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { FormErrors as Component, FormErrorsProps } from './FormErrors';

export default {
  title: 'Forms / FormErrors',
  ...RUIComponentMeta(Component).withStyleSystemProps()
};

export const FormErrors = RUIComponentStory<FormErrorsProps>((args) => <Component {...args} />, {
  errorMessages: {
    foo: {
      message: 'You must fill out the foo field'
    },
    bar: {
      message: 'You must fill out the bar field'
    },
    date: {
      message: 'The date you selected must be between January and December'
    }
  }
});

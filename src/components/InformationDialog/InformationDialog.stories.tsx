import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { InformationDialog as Component, InformationDialogProps } from './InformationDialog';

export default {
  title: 'Internal / InformationDialog',
  ...RUIComponentMeta(Component)
};

export const InformationDialog = RUIComponentStory<InformationDialogProps>(
  (args) => (
    <Component {...args}>Informative content for the user that requires no action.</Component>
  ),
  {
    title: 'Information'
  }
);

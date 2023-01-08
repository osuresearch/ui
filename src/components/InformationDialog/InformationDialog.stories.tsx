import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { InformationDialog as Component, InformationDialogProps } from './InformationDialog';

export default RUIComponentMeta<InformationDialogProps>('Dialogs', Component);

export const InformationDialog = RUIComponentStory<InformationDialogProps>(
  (args) => (
    <Component {...args}>Informative content for the user that requires no action.</Component>
  ),
  {
    title: 'Information'
  }
);

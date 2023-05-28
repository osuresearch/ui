import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import { StoryFn } from '@storybook/react';
import React from 'react';

import { CloseButtonProps, CloseButton as Component } from './CloseButton';

export default {
  title: 'Buttons / CloseButton',
  ...RUIComponentMeta(Component).withStyleSystemProps()
};

export const CloseButton = RUIComponentStory<CloseButtonProps>((args) => <Component {...args} />);

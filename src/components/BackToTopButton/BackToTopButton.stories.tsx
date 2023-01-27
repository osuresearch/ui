import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { BackToTopButtonProps, BackToTopButton as Component } from './BackToTopButton';

export default RUIComponentMeta<BackToTopButtonProps>('BUX Stuff', Component);

export const BackToTopButton = RUIComponentStory<BackToTopButtonProps>((args) => (
  <Component {...args} />
));

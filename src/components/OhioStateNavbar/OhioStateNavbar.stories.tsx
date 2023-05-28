import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { OhioStateNavbar, OhioStateNavbarProps } from './OhioStateNavbar';

export default {
  title: 'Ohio State / OhioStateNavbar',
  ...RUIComponentMeta(OhioStateNavbar)
};

export const Light = RUIComponentStory<OhioStateNavbarProps>(
  (args) => <OhioStateNavbar {...args} />,
  {
    variant: 'light'
  }
);

export const Dark = RUIComponentStory<OhioStateNavbarProps>(
  (args) => <OhioStateNavbar {...args} />,
  {
    variant: 'dark'
  }
);

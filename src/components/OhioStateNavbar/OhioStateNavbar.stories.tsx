import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { OhioStateNavbar, OhioStateNavbarProps } from './OhioStateNavbar';

export default RUIComponentMeta<OhioStateNavbarProps>('Ohio State', OhioStateNavbar);

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

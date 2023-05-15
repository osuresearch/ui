import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { SectionTitle as Component, SectionTitleProps } from './SectionTitle';

export default RUIComponentMeta<SectionTitleProps>('Ohio State', Component);

export const SectionTitle = RUIComponentStory<SectionTitleProps>((args) => (
  <Component {...args}>This is a Section Heading</Component>
));

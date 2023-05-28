import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Section as Component, SectionProps } from './Section';

export default {
  title: 'Utilities / Section',
  ...RUIComponentMeta(Component)
};

export const Section = RUIComponentStory<SectionProps<any>>(() => <>No example available</>);

import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Section as Component, SectionProps } from './Section';

export default RUIComponentMeta<SectionProps<any>>('Utilities', Component);

export const Section = RUIComponentStory<SectionProps<any>>((args) => <>No example available</>);

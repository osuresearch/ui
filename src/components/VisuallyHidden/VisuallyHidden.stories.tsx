import React from 'react';
import { Story, Meta } from '@storybook/react';

import { VisuallyHidden } from './VisuallyHidden';

export default {
  title: 'utilities/VisuallyHidden',
  component: VisuallyHidden,
  argTypes: {}
} as Meta<typeof VisuallyHidden>;

export const Default = () => <VisuallyHidden>Hello screen readers!</VisuallyHidden>;

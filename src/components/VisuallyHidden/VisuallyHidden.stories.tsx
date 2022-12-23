import React from 'react';
import { VisuallyHidden as Component } from './VisuallyHidden';
import { RUIComponentMeta } from '~/.storybook/utils';

export default RUIComponentMeta('Utilities', Component).withBadge('stable');

export const VisuallyHidden = () => <Component>Hello screen readers!</Component>;

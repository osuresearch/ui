import React from 'react';

import { RUIComponentMeta } from '~/.storybook/utils';

import { VisuallyHidden as Component } from './VisuallyHidden';

export default RUIComponentMeta('Utilities', Component).withBadge('atom').withBadge('stable');

export const VisuallyHidden = () => <Component>Hello screen readers!</Component>;

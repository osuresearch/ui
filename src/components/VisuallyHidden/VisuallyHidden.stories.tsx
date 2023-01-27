import { RUIComponentMeta } from '@sb/utils';
import React from 'react';

import { VisuallyHidden as Component } from './VisuallyHidden';

export default RUIComponentMeta('Utilities', Component);

export const VisuallyHidden = () => <Component>Hello screen readers!</Component>;

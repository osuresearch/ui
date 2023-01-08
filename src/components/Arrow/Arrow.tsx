import { PlacementAxis } from '@react-types/overlays';
import { FocusableElement } from '@react-types/shared';
import React, { DOMAttributes } from 'react';

import { Color, ThemeProp } from '~/types';

import { Box } from '../Box';

export type ArrowProps = DOMAttributes<FocusableElement> & {
  c: ThemeProp<Color>;
  placement: PlacementAxis;
};

/**
 * An arrow that can be applied to an edge of a relatively positioned container.
 */
export function Arrow({ placement, c, ...props }: ArrowProps) {
  return <Box c={c} className="rui-arrow" data-placement={placement} {...props} />;
}

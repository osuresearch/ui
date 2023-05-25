import { PlacementAxis } from '@react-types/overlays';
import { FocusableElement } from '@react-types/shared';
import React, { CSSProperties, DOMAttributes } from 'react';

import { Color } from '../../theme';
import { ThemeProp } from '../../types';
import { Box } from '../Box';

export type ArrowProps = DOMAttributes<FocusableElement> & {
  style?: CSSProperties;
  c: ThemeProp<Color>;
  placement: PlacementAxis;
  size?: number
};

/**
 * An arrow that can be applied to an edge of a relatively positioned container.
 */
export function Arrow({ placement, c, size = 8, ...props }: ArrowProps) {
  return (
    <Box c={c}
      className="arrow"
      data-placement={placement}
      {...props}
      style={{
        '--rui-arrow-size': `${size}px`,
      } as any}
    />
  );
}

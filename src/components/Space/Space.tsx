import React from 'react';

import { PositiveSpacing } from '../../types';
import { cx, spacingValueToClass } from '../../utils';

export type SpaceProps = {
  h?: PositiveSpacing;
  w?: PositiveSpacing;
};

/**
 * Add horizontal or vertical spacing between elements
 */
export function Space({ h = 'sm', w = 'sm' }: SpaceProps) {
  const className = cx(spacingValueToClass('h', h), spacingValueToClass('w', w));

  return <div className={className} />;
}

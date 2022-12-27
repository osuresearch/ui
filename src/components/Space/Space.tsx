import React from 'react';

import { spacingValueToClass } from '@osuresearch/ui';

import { cx } from '../../theme/utils';
import { PositiveSpacing, Spacing } from '../../types';

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

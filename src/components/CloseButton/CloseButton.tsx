import React from 'react';

import { IconButton, IconButtonProps } from '@mui/material';

import { Icon } from '../Icon';

export type CloseButtonProps = IconButtonProps & {
  /** Hidden label for the button to present to screen readers.
   *
   * Defaults to `Close`
   */
  label?: string;
};

export function CloseButton({ label, ...props }: CloseButtonProps) {
  return (
    <IconButton aria-label={label} color="inherit" size="small" {...props}>
      <Icon name="xmark" />
    </IconButton>
  );
}

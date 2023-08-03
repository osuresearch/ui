import { Icon as Iconography, IconProps as IconographyProps } from '@osuresearch/iconography';

import React from 'react';

import { Box, BoxProps } from '@mui/material';

export interface IconProps extends BoxProps<'div'>, IconographyProps {}

/**
 * Wrapper around `@osuresearch/iconography` icons to support MaterialUI style system props.
 */
export function Icon({ sx, ...props }: IconProps) {
  return <Box component={Iconography} sx={{ verticalAlign: 'middle', ...sx }} {...props}></Box>;
}

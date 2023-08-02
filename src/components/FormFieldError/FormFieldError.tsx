import React from 'react';

import { Box, BoxProps, Typography } from '@mui/material';

import { Icon } from '../Icon';

export type FormFieldErrorProps = {
  id: string;
  children: React.ReactNode;
};

/**
 * Render an error message. Used within `FormField`.
 *
 * <!-- @ruiInternal -->
 */
export function FormFieldError({ id, children }: FormFieldErrorProps) {
  return (
    <Typography id={id} fontSize="0.88em" color="error">
      <Icon role="presentation" name="xmarkCircle" sx={{ verticalAlign: 'text-top' }} /> {children}
    </Typography>
  );
}

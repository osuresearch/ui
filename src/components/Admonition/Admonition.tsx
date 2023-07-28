import React from 'react';

import {
  Alert,
  AlertProps,
  AlertTitle,
  Box,
  BoxProps,
  Palette,
  SimplePaletteColorOptions,
  Stack,
  Typography,
  styled,
} from '@mui/material';

import { Icon, IconProps } from '../Icon';

export type AdmonitionProps = BoxProps<'div'> & {
  title?: string;
  variant?: 'note' | 'tip' | 'info' | 'caution' | 'danger';
};

const IconMap = {
  note: 'infoCircle',
  tip: 'checkCircle',
  info: 'infoCircle',
  caution: 'exclamationCircle',
  danger: 'exclamationFill',
};

const ColorMap: Record<string, keyof Palette> = {
  note: 'gray',
  tip: 'green',
  info: 'blue',
  caution: 'warning',
  danger: 'error',
};

const Root = styled(Box)<AdmonitionProps>(({ theme, variant = 'note' }) => ({
  backgroundColor: (theme.palette[ColorMap[variant]] as SimplePaletteColorOptions).light,
  color: (theme.palette[ColorMap[variant]] as SimplePaletteColorOptions).contrastText,
}));

type AdmonitionIconProps = IconProps & Pick<AdmonitionProps, 'variant'>;

const AdmonitionIcon = styled(Icon)<AdmonitionIconProps>(({ theme, variant = 'note' }) => ({
  opacity: variant === 'danger' ? 1 : 0.7,
}));

/**
 * Content that should be called out to the user.
 *
 * If you need to notify the user with a dynamic message, use MUI's `<Alert>`.
 */
export function Admonition({ title, variant = 'note', children, ...props }: AdmonitionProps) {
  return (
    <Root {...props} variant={variant} p={2}>
      <Stack direction="row" gap={2}>
        <AdmonitionIcon size={20} name={IconMap[variant]} variant={variant} />
        <Stack gap={1}>
          <Typography fontWeight="bold">{title ?? variant.toUpperCase()}</Typography>
          <Typography>{children}</Typography>
        </Stack>
      </Stack>
    </Root>
  );
}

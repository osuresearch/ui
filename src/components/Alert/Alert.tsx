import { CloseButton, Group, Icon, Stack, Text } from '@osuresearch/ui';
import React, { forwardRef, useState } from 'react';

import { Color } from '@osuresearch/ui/theme';

export type AlertProps = {
  variant: 'success' | 'info' | 'warning' | 'error';

  title?: string;
  dismissible?: boolean;
  children?: React.ReactNode;
};

/**
 * Attract user attention with important static message
 *
 * ### Accessibility
 * - Root element is `role="alert"`
 * - Dismiss button is labeled with "Dismiss this alert"
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = 'info', title, dismissible = false, children }, ref) => {
    const [open, setOpen] = useState(true);

    const iconName = {
      success: 'checkCircle',
      info: 'infoCircle',
      warning: 'infoCircle',
      error: 'xmarkCircle'
    }[variant];

    if (!open) {
      return null;
    }

    const tint: Color = `${variant}-tint`;
    const shade: Color = `${variant}-shade`;
    const contrast: Color = `${variant}-contrast`;

    return (
      <Group justify="apart" ref={ref} role="alert" bgc={tint}>
        <Group align="stretch" p="md">
          <Icon c={shade} name={iconName} size={24} />
          <Stack c={contrast}>
            <Text fw="bold" c={contrast}>
              {title}
            </Text>
            {children}
          </Stack>
        </Group>
        {dismissible && (
          <CloseButton c={contrast} label="Dismiss this alert" onClick={() => setOpen(false)} />
        )}
      </Group>
    );
  }
);

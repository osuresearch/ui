import React, { forwardRef, useState } from 'react';

import { Color } from '../../theme';
import { CloseButton } from '../CloseButton';
import { Group } from '../Group';
import { Icon } from '../Icon';
import { Stack } from '../Stack';
import { Text } from '../Text';

export type AlertProps = {
  variant: 'success' | 'info' | 'warning' | 'error';

  title?: string;
  dismissible?: boolean;

  /**
   * Text content to display within the alert.
   */
  children?: React.ReactNode;
};

/**
 * Attract user attention with dismissible messages.
 *
 * ## When to use Alerts
 *
 * Alerts are meant to communicate time-sensitive messages
 * to the user. When mounted, the browser will interrupt
 * assistive technologies with the alert content.
 *
 * If you simply need to display content on the page
 * in a way that separates it from the rest of the page,
 * use `Admonition` instead.
 *
 * Use cases for alerts:
 * - An invalid value was entered in a form field
 * - The user's login session is about to expire
 * - The connection to the server was lost so local changes will not be saved
 *
 * ## Accessibility
 * - Root element is `role="alert"`.
 * - Dismiss button is labeled with "Dismiss this alert"
 * - Only text content may be inside an alert. Links and buttons are not allowed.
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant, title, dismissible = false, children }, ref) => {
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
      <Group
        justify="apart"
        ref={ref}
        role="alert"
        bgc={{
          light: tint,
          dark: variant
        }}
      >
        <Group align="stretch" p="md">
          <Icon
            c={{
              light: shade,
              dark: contrast
            }}
            name={iconName}
            size={24}
          />
          <Stack c={contrast}>
            <Text fw="bold" c={contrast}>
              {title}
            </Text>
            {children}
          </Stack>
        </Group>
        {dismissible && (
          <CloseButton c={contrast} label="Dismiss this alert" onPress={() => setOpen(false)} />
        )}
      </Group>
    );
  }
);

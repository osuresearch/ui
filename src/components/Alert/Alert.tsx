import React, { forwardRef, useState } from 'react';

import { Color } from '../../theme';
import { CloseButton } from '../CloseButton';
import { Group } from '../Group';
import { Icon } from '../Icon';
import { Stack } from '../Stack';
import { Text } from '../Text';

export type AlertProps = {
  variant: 'success' | 'info' | 'caution' | 'critical';

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
      caution: 'infoCircle',
      critical: 'xmarkCircle'
    }[variant];

    if (!open) {
      return null;
    }

    const bold: Color = `${variant}-bold`;
    const inverse: Color = `${variant}-inverse`;

    return (
      <Group
        justify="apart"
        ref={ref}
        role="alert"
        bgc={bold}
      >
        <Group align="stretch" p="md">
          <Icon
            c={inverse}
            name={iconName}
            size={24}
          />
          <Stack c={inverse}>
            <Text fw="bold" c={inverse}>
              {title}
            </Text>
            {children}
          </Stack>
        </Group>
        {dismissible && (
          <CloseButton c={inverse} label="Dismiss this alert" onPress={() => setOpen(false)} />
        )}
      </Group>
    );
  }
);

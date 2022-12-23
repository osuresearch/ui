import React, { forwardRef, useState } from 'react';
import { Icon, Group, Stack, CloseButton, Text } from '@osuresearch/ui';
import { ThemeColor } from '@osuresearch/ui/types';

export type AlertProps = {
  variant: 'success' | 'info' | 'warning' | 'error';

  title?: string;
  dismissible?: boolean;
  children?: React.ReactNode;
};

// Class map for alert colors
const className = {
  success: {
    bg: 'bg-success-light',
    fg: 'black',
    iconColor: 'success',
    iconName: 'checkCircle'
  },
  info: {
    bg: 'bg-info-light',
    fg: 'black',
    iconColor: 'info',
    iconName: 'infoCircle'
  },
  warning: {
    bg: 'bg-warning-light',
    fg: 'black',
    iconColor: 'warning',
    iconName: 'infoCircle'
  },
  error: {
    bg: 'bg-error',
    fg: 'white',
    iconColor: 'white',
    iconName: 'xmarkCircle'
  }
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
    const { bg, fg, iconColor, iconName } = className[variant];

    if (!open) {
      return null;
    }

    return (
      <div ref={ref} className={bg} role="alert">
        <Group justify="apart">
          <Group align="stretch" p="md">
            <Icon c={iconColor as ThemeColor} name={iconName} size={24} />
            <Stack c={fg as ThemeColor}>
              <Text c={fg as ThemeColor} fw="bold">
                {title}
              </Text>
              {children}
            </Stack>
          </Group>
          {dismissible && (
            <CloseButton
              c={fg as ThemeColor}
              label="Dismiss this alert"
              onClick={() => setOpen(false)}
            />
          )}
        </Group>
      </div>
    );
  }
);

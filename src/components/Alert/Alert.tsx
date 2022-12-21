import React, { forwardRef, useState } from 'react';
import { cx } from '../../styles';
import { Icon } from '../Icon';
import { Group } from '../Group';
import { Stack } from '../Stack';
import { CloseButton } from '../CloseButton';

export type AlertProps = {
  c: 'success' | 'info' | 'warning' | 'error';

  title?: string;
  dismissible?: boolean;
  children?: React.ReactNode;
};

// Class map for alert colors
const className = {
  success: {
    color: 'text-black bg-success-light',
    iconColor: 'text-success',
    iconName: 'checkCircle'
  },
  info: {
    color: 'text-black bg-info-light',
    iconColor: 'text-info',
    iconName: 'infoCircle'
  },
  warning: {
    color: 'text-black bg-warning-light',
    iconColor: 'text-warning',
    iconName: 'infoCircle'
  },
  error: {
    color: 'text-white bg-error',
    iconColor: 'text-white',
    iconName: 'xmarkCircle'
  }
};

/**
 * Attract user attention with important static message
 *
 * ### Accessibility
 * - Root element role is set to `alert`
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ c, title, dismissible = false, children }, ref) => {
    const [open, setOpen] = useState(true);
    const { color, iconColor, iconName } = className[c];

    if (!open) {
      return null;
    }

    return (
      <div ref={ref} className={color} role="alert">
        <Group justify="apart">
          <Group align="stretch" p="lg">
            <Icon className={cx(iconColor, 'pr-sm')} name={iconName} size={24} />
            <Stack>
              <div className="font-bold">{title}</div>
              {children}
            </Stack>
          </Group>
          {dismissible && <CloseButton label="Dismiss this alert" onClick={() => setOpen(false)} />}
        </Group>
      </div>
    );
  }
);

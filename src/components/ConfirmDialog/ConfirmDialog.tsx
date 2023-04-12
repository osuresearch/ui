import React, { forwardRef, useRef } from 'react';
import { AriaDialogProps, useDialog } from 'react-aria';

import { Color } from '../../theme';
import { mergeRefs } from '../../utils';
import { Button } from '../Button';
import { FocusRing } from '../FocusRing';
import { Group } from '../Group';
import { Paper } from '../Paper';
import { Stack } from '../Stack';
import { Text } from '../Text';

export type ConfirmDialogProps = AriaDialogProps & {
  /** Title of the dialog */
  title: string;

  onPrimaryAction: () => void;
  onSecondaryAction?: () => void;
  onCancel?: () => void;

  primaryActionSlot: React.ReactNode;

  /**
   * Accent color of the primary button.
   */
  primaryActionAccent?: Color;

  secondaryActionSlot?: React.ReactNode;

  cancelSlot?: React.ReactNode;

  /** Message to display within the dialog */
  children: React.ReactNode;
};

/**
 * A dialog that requires user confirmation before continuing the current action.
 *
 * Use the `ConfirmButton` component to toggle a confirmation dialog.
 *
 * ## Accessibility
 * - Enforces `aria-role="alertdialog"` on the dialog to notify users that the
 * dialog demands their immediate attention and response.
 * - Dialog uses a semantic `h2` element for the title
 *
 * @internal
 */
export const ConfirmDialog = forwardRef<HTMLDivElement, ConfirmDialogProps>(
  ({ children, primaryActionAccent = 'primary', ...props }, ref) => {
    const dialogRef = useRef<HTMLDivElement>(null);
    const { dialogProps, titleProps } = useDialog(
      {
        ...props,
        role: 'alertdialog'
      },
      dialogRef
    );

    return (
      <FocusRing>
        <Paper
          ref={mergeRefs(dialogRef, ref)}
          bgc="light-tint"
          p="md"
          shadow="md"
          w="fit-content"
          withBorder
          {...dialogProps}
        >
          <Stack align="stretch">
            <Text as="h2" fs="md" {...titleProps}>
              {props.title}
            </Text>

            {children}

            <Group justify="end">
              <Button variant="subtle" onPress={props.onCancel}>
                {props.cancelSlot ?? 'Cancel'}
              </Button>

              {props.secondaryActionSlot && props.onSecondaryAction && (
                <Button onPress={props.onSecondaryAction}>{props.secondaryActionSlot}</Button>
              )}

              <Button
                variant="accented"
                bgc={primaryActionAccent}
                c={`${primaryActionAccent}-contrast` as Color}
                onPress={props.onPrimaryAction}
              >
                {props.primaryActionSlot}
              </Button>
            </Group>
          </Stack>
        </Paper>
      </FocusRing>
    );
  }
);

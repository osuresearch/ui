import React, { forwardRef, useRef } from 'react';
import { AriaDialogProps, useDialog } from 'react-aria';

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

  renderPrimaryAction: React.ReactNode;

  renderSecondaryAction?: React.ReactNode;

  renderCancelAction?: React.ReactNode;

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
  ({ children, ...props }, ref) => {
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
          bgc="surface"
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
                {props.renderCancelAction ?? 'Cancel'}
              </Button>

              {props.renderSecondaryAction && props.onSecondaryAction && (
                <Button onPress={props.onSecondaryAction}>{props.renderSecondaryAction}</Button>
              )}

              <Button
                variant="primary"
                onPress={props.onPrimaryAction}
              >
                {props.renderPrimaryAction}
              </Button>
            </Group>
          </Stack>
        </Paper>
      </FocusRing>
    );
  }
);

import React, { forwardRef, useRef } from 'react';
import { AriaDialogProps, useDialog } from 'react-aria';

import { mergeRefs } from '../../utils';
import { Button } from '../Button';
import { FocusRing } from '../FocusRing';
import { Group } from '../Group';
import { Paper } from '../Paper';
import { Stack } from '../Stack';
import { Text } from '../Text';

export type InformationDialogProps = AriaDialogProps & {
  /** Title of the dialog */
  title: string;

  onClose?: () => void;

  closeSlot?: React.ReactNode;

  /** Content to display within the dialog */
  children: React.ReactNode;
};

/**
 * A dialog that displays additional information for the user.
 *
 * Do not include form components (inputs, buttons) in this dialog.
 *
 * ## Accessibility
 * - Enforces `aria-role="dialog"` on the dialog
 * - Uses a semantic `h2` element for the title
 *
 * @internal
 */
export const InformationDialog = forwardRef<HTMLDivElement, InformationDialogProps>(
  ({ children, ...props }, ref) => {
    const dialogRef = useRef<HTMLDivElement>(null);
    const { dialogProps, titleProps } = useDialog(
      {
        ...props,
        role: 'dialog'
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
              <Button variant="default" onPress={props.onClose}>
                {props.closeSlot ?? 'Close'}
              </Button>
            </Group>
          </Stack>
        </Paper>
      </FocusRing>
    );
  }
);

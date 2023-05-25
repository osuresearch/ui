import React, { forwardRef, useRef } from 'react';
import { AriaDialogProps, useDialog } from 'react-aria';

import { mergeRefs } from '../../utils';
import { Button } from '../Button';
import { FocusRing } from '../FocusRing';
import { Group } from '../Group';
import { Paper } from '../Paper';
import { Stack } from '../Stack';
import { Text } from '../Text';

export type FormDialogProps = AriaDialogProps & {
  /** Title of the dialog */
  title: string;

  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  onCancel?: () => void;

  /** Content for the submit button. Defaults to `Submit` */
  submitSlot?: React.ReactNode;

  /** Content for the cancel button. Defaults to `Cancel` */
  cancelSlot?: React.ReactNode;

  /** Form content */
  children: React.ReactNode;

  /** Additional props to spread into the wrapping `<form>` element */
  formProps?: React.ComponentPropsWithRef<'form'>;
};

/**
 * A dialog that contains a form for the user to fill out and submit.
 *
 * This dialog wraps the content with a `<form>` element.
 *
 * ## Accessibility
 * - Enforces `aria-role="dialog"` on the dialog
 * - Uses a semantic `h2` element for the form title
 *
 * @internal
 */
export const FormDialog = forwardRef<HTMLDivElement, FormDialogProps>(
  ({ children, formProps, ...props }, ref) => {
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
            <form {...formProps} onSubmit={props.onSubmit}>
              <Text as="h2" fs="md" {...titleProps} mb="sm">
                {props.title}
              </Text>

              {children}

              <Group justify="end" mt="sm">
                <Button variant="subtle" onPress={props.onCancel}>
                  {props.cancelSlot ?? 'Cancel'}
                </Button>

                <Button variant="primary" type="submit">
                  {props.submitSlot ?? 'Submit'}
                </Button>
              </Group>
            </form>
          </Stack>
        </Paper>
      </FocusRing>
    );
  }
);

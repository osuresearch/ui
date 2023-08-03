import React, { useId, useState } from 'react';

import {
  Button,
  ButtonProps,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

export type ConfirmButtonProps = ButtonProps & {
  title?: string;

  /** Content for the dialog */
  renderContent: React.ReactNode;

  /** Label for the confirm button in the dialog */
  confirmButtonLabel?: React.ReactNode;

  /** Label for the cancel button in the dialog */
  cancelButtonLabel?: React.ReactNode;
};

/**
 * Button that opens a confirmation dialog that requires user
 * action before executing the `onClick` event.
 *
 * The user may always choose to cancel the action.
 *
 * Most confirmations don't need titles. They summarize a decision
 * in a sentence or two by asking a question (e.g. "Delete this conversation?")
 *
 * Use title bar alerts only for high-risk situations, such as the potential
 * loss of data. Users should be able to understand the choices based on the title
 * and button text alone.
 *
 * If a title is required:
 * - Use a clear question or statement with an explanation in the content area,
 *  such as "Erase USB storage?".
 * - Avoid apologies, ambiguity, or questions, such as "Warning!" or "Are you sure?"
 */
export function ConfirmButton({
  id,
  children,
  onClick,
  title,
  renderContent,
  confirmButtonLabel = 'Confirm',
  cancelButtonLabel = 'Cancel',
  ...props
}: ConfirmButtonProps) {
  const [open, setOpen] = useState(false);
  const generatedId = useId();

  const handleClick = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(false);
    onClick && onClick(e);
  };

  const buttonId = id ?? generatedId;

  return (
    <>
      <Button {...props} onClick={handleClick} id={buttonId}>
        {children}
      </Button>
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labeledby={`${buttonId}-dialog-title`}
        aria-describedby={`${buttonId}-dialog-content`}
      >
        <DialogTitle id={`${buttonId}-dialog-title`}>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id={`${buttonId}-dialog-content`}>{renderContent}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleCancel}>
            {cancelButtonLabel}
          </Button>
          <Button onClick={handleConfirm} autoFocus>
            {confirmButtonLabel}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

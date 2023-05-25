import { DOMAttributes, FocusableElement } from '@react-types/shared';
import React, { useRef, useState } from 'react';
import { AriaDialogProps, AriaModalOverlayProps, useModalOverlay } from 'react-aria';
import { Overlay } from 'react-aria';
import { OverlayTriggerState } from 'react-stately';

import { Underlay } from '../Underlay';
import { Paper } from '../Paper';

export type ModalProps = AriaModalOverlayProps & {
  /**
   * React Aria trigger state
   */
  state: OverlayTriggerState;

  /**
   * Props to spread into React Aria `<Overlay>`
   */
  overlayProps: DOMAttributes<FocusableElement>;

  children: React.ReactNode;
};

export type DialogImplProps = AriaDialogProps & {
  title: string;
  children: React.ReactNode;
};

/**
 * Container for dialogs.
 *
 * Once active, only content within the modal may be interacted with.
 *
 * @internal
 */
export function Modal({ children, state, overlayProps, ...props }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(!state.isOpen);

  const { modalProps, underlayProps } = useModalOverlay(props, state, modalRef);

  // Don't render anything if the modal is not open and we're not animating out.
  if (!(state.isOpen || !open)) {
    return null;
  }

  return (
    <Overlay {...overlayProps}>
      <Underlay {...underlayProps} variant="tint" />

      <div className="fixed inset-0 flex justify-center z-50">
        <Paper
          className="top-[10%] h-fit max-h-[80vh] max-w-sm flex justify-center relative animate-fade-in-down"
          {...modalProps}
          ref={modalRef}
        >
          {children}
        </Paper>
      </div>
    </Overlay>
  );
}

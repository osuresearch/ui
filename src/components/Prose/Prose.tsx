import React from 'react';
import { cx } from '../../utils';

export type ProseProps = {
  children: React.ReactNode
  className?: string
}

// TODO: Somehow make non-text components not affected by prose?
/// ... magically ... somehow... (maybe just no-prose on Box?)

export function Prose({ children, className }: ProseProps) {
  return (
    <div className={cx('prose prose-rui max-w-none', className)}>
      {children}
    </div>
  )
}

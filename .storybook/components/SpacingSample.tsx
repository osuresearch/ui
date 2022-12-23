import React from 'react';

export type Props = {
  size: number
}

export function SpacingSample({ size }: Props) {
  return (
    <div style={{
      width: size,
      height: size,
      backgroundColor: 'var(--rui-primary)'
    }} />
  )
}

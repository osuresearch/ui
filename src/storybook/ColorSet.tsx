
import React from 'react';
import { ColorItem } from '@storybook/addon-docs';

/**
 * Show the full range of colors for a theme (base, tint, shade, contrast)
 */
export function ColorSet({ name }: { name: string }) {
  const prefix = '--rui-' + name.toLowerCase();
  return (
    <ColorItem
      title={name}
      subtitle=""
      colors={{
        'Tint': `var(${prefix}-tint)`,
        'Base': `var(${prefix})`,
        'Shade': `var(${prefix}-shade)`,
        'Contrast': `var(${prefix}-contrast)`,
      }}
    />
  );
}

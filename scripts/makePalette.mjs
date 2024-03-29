
/**
 * Simple script to regenerate theme/palette.ts from tailwind styles
 */

import fs from 'fs';
import tw from '../tailwind.config.js';

console.log(tw.theme.colors);

const colors = Object.keys(tw.theme.colors);

fs.writeFileSync('src/theme/colors.ts', `
// Autogenerated by makePalette.mjs

export const colors = [
${
  colors
    .map(c => `  '${c}',`)
    .join('\n')
}
] as const;

export type Color = typeof colors[number];

export type ColorClassMap = Record<Color, string>;

export const textColorClasses: ColorClassMap = {
${
  colors
    .map(c => `  '${c}': 'text-${c}',`)
    .join('\n')
}
};

export const backgroundColorClasses: ColorClassMap = {
${
  colors
    .map(c => `  '${c}': 'bg-${c}',`)
    .join('\n')
}
};

export const borderColorClasses: ColorClassMap = {
${
  colors
    .map(c => `  '${c}': 'border-${c}',`)
    .join('\n')
}
};
`);

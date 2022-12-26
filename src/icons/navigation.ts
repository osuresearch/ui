// Navigation icons from Bootstrap
// https://icon-sets.iconify.design/bi/

// Naming conventions set to match https://bux.osu.edu/typography/icons
// Except for cases where icons contain cardinals since we can rotate SVGs.

export * as jump from '@iconify/icons-bi/arrow-bar-down';
export * as externalLink from '@iconify/icons-bi/arrow-up-right';
export * as caret from '@iconify/icons-bi/caret-down-fill';
export * as location from '@iconify/icons-bi/geo-alt';
export * as home from '@iconify/icons-bi/house-door';
export * as homeFill from '@iconify/icons-bi/house-door-fill';
export * as link from '@iconify/icons-bi/link-45deg';
export * as dots from '@iconify/icons-bi/three-dots';
export * as chevron from '@iconify/icons-material-symbols/chevron-right';
export * as chevronDouble from '@iconify/icons-material-symbols/keyboard-double-arrow-right';

export const bars = {
  default: {
    body: `
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
    />`
  }
};

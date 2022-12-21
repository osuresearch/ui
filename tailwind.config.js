/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{tsx,ts}'
  ],
  plugins: [
    // Reset for form styles
    require('@tailwindcss/forms'),
  ],
  darkMode: 'class',
  theme: {
    screens: {
      // Ref: https://bux.osu.edu/layout/breakpoints
      sm: '0',
      md: '640px',
      lg: '960px',
      xl: '1280px',
      xxl: '1440px',
    },
    spacing: {
      'xs': '4px',
      'sm': '8px',
      'md': '12px',
      'lg': '16px',
      'xl': '24px',
      'xxl': '32px',

      // Ref: https://bux.osu.edu/layout/spacing
      '0': '0px',
      '1': '1px',
      '4': '4px',
      '8': '8px',
      '12': '12px',
      '16': '16px',
      '24': '24px',
      '32': '32px',
      '48': '48px',
      '64': '64px',
      '96': '96px',
    },
    colors: {
      // We map Tailwind theme colors to
      // css variables in globals.css

      // Primary
      'scarlet': 'var(--rui-scarlet)',
      'gray': 'var(--rui-gray)',

      // Scarlet shades
      'scarlet-dark-40': 'var(--rui-scarlet-dark-40)',
      'scarlet-dark-60': 'var(--rui-scarlet-dark-60)',

      // Gray tints
      'gray-tint-20': 'var(--rui-gray-tint-20)',
      'gray-tint-40': 'var(--rui-gray-tint-40)',
      'gray-tint-60': 'var(--rui-gray-tint-60)',
      'gray-tint-80': 'var(--rui-gray-tint-80)',
      'gray-tint-90': 'var(--rui-gray-tint-90)',

      // Gray shades
      'gray-shade-20': 'var(--rui-gray-shade-20)',
      'gray-shade-40': 'var(--rui-gray-shade-40)',
      'gray-shade-60': 'var(--rui-gray-shade-60)',
      'gray-shade-80': 'var(--rui-gray-shade-80)',

      // Neutrals
      'clear': 'rgba(0, 0, 0, 0)',
      'white': 'var(--rui-white)',
      'black': 'var(--rui-black)',

      // Accents
      'blue': 'var(--rui-blue)',
      'orange': 'var(--rui-orange)',
      'green': 'var(--rui-green)',
      'brown': 'var(--rui-brown)',
      'pink': 'var(--rui-pink)',
      'violet': 'var(--rui-violet)',
      'aqua': 'var(--rui-aqua)',
      'teal': 'var(--rui-teal)',
      'gold': 'var(--rui-gold)',

      // System / utility colors
      'primary': 'var(--rui-primary)',
      'secondary': 'var(--rui-secondary)',
      'tertiary': 'var(--rui-tertiary)',

      'info': 'var(--rui-info)',
      'info-light': 'var(--rui-info-light)',
      'success': 'var(--rui-success)',
      'success-light': 'var(--rui-success-light)',
      'warning': 'var(--rui-warning)',
      'warning-light': 'var(--rui-warning-light)',
      'error': 'var(--rui-error)',
      'error-light': 'var(--rui-error-light)',
      'focus': 'var(--rui-focus)',
      'visited': 'var(--rui-visited)',
      'visited-light': 'var(--rui-visited-light)',
    },
    // Ref: https://bux.osu.edu/typography/type-size
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      md: ['1.5rem', { lineHeight: '1.75rem' }],
      lg: ['2rem', { lineHeight: '2rem' }],
      xl: ['2.5rem', { lineHeight: '2.5rem' }],
      xxl: ['3rem', { lineHeight: '3rem' }],

      // Headings use different font steps
      // Ref: https://bux.osu.edu/typography/headings
      h1: ['2.625rem', { lineHeight: '1.2'}],
      h2: ['1.75rem', { lineHeight: '1.25'}],
      h3: ['1.375rem', { lineHeight: '1.25'}],
      h4: ['1.125rem', { lineHeight: '1.25'}],
    },
    // Ref: https://bux.osu.edu/typography/fonts
    fontFamily: {
      serif: ['BuckeyeSerif', 'Georgia', 'sans-serif'],
      sans: ['BuckeyeSans', 'HelveticaNeue', 'Helvetica', 'Arial', 'serif'],
    },
    fontWeight: {
      normal: '400',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    extend: {},
  },
  safelist: [
    // I expose a number of props for controlling the box model via specific spacing units.
    // But to support this, we have to interpolate class names. To ensure each variant is
    // compiled into the final .css build we create a whitelist of all patterns we support.

    // Note that I do *not* include responsive prefixes (sm:, md:, etc) because classes
    // are dynamically added/removed when a developer uses a responsive form of
    // one of the box model props. This may change in the future based on benchmarks.

    // Unminified benchmarks:
    // 30 KB without the whitelist (so far...)
    // 43 KB without ^$ (will match scroll-m-md and so forth that we don't need)
    // 35 KB with ^$ (25 KB minified)

    // (m)argin, (p)adding
    // Examples: px-sm, p-xxl, m-xs, -m-xs
    { pattern: /^-?(m|p)(x|y|l|r|t|b)?-(xs|sm|md|lg|xl|xxl|0|auto|px)$/ }, // +6 KB

    // // inset
    // // Examples: inset-full, -inset-x-md, inset-y-full
    { pattern: /^-?(inset)(x|y)?-(xs|sm|md|lg|xl|xxl|full|auto|px)$/ }, // +2 KB

    // // top/left/bottom/right
    // // Examples: top-xs, -right-sm, right-auto
    { pattern: /^-?(top|left|bottom|right)(x|y)?-(xs|sm|md|lg|xl|xxl|full|auto)$/ }, // +2 KB

    // // TODO: Space between? It's heavy CSS

    // // fz(fontSize)
    { pattern: /^text-(xs|sm|md|lg|xl|xxl|0|full)$/ }, // +1 KB

    // +1 KB
    // (h)eight, (w)idth, (miw)in width, (maw)x idth, (mih)in height, (mah)x height,
    // Examples: max-h-screen, min-h-0, max-w-sm, w-full, h-xxl
    // Note that tailwind only define min-h 0, full, screen.
    { pattern: /^(max|min)?-(h|w)-(xs|sm|md|lg|xl|xxl|0|full|screen)$/ }, // +1 KB
  ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{tsx,ts}'
  ],
  plugins: [
    // Reset for form styles
    require('@tailwindcss/forms'),
  ],
  darkMode: [
    'class', '[data-theme="dark"]'
  ],
  theme: {
    screens: {
      // Ref: https://bux.osu.edu/layout/breakpoints
      'sm': '0',
      'md': '640px',
      'lg': '960px',
      'xl': '1280px',
      'xxl': '1440px',
    },
    spacing: {
      'xxs': 'var(--rui-spacing-xxs)',
      'xs': 'var(--rui-spacing-xs)',
      'sm': 'var(--rui-spacing-sm)',
      'md': 'var(--rui-spacing-md)',
      'lg': 'var(--rui-spacing-lg)',
      'xl': 'var(--rui-spacing-xl)',
      'xxl': 'var(--rui-spacing-xxl)',

      // Ref: https://bux.osu.edu/layout/spacing
      // TODO: Drop these for semantics (sans 0 and 1)
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

      // Brand
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

      /* Semantic colors */
      'primary': 'var(--rui-primary)',
      'secondary': 'var(--rui-secondary)',
      'tertiary': 'var(--rui-tertiary)',

      'dimmed': 'var(--rui-neutral-90)',

      /* Neutrals */
      'white': 'var(--rui-white)',
      'black': 'var(--rui-black)',

      'neutral-0': 'var(--rui-neutral-0)',
      'neutral-20': 'var(--rui-neutral-20)',
      'neutral-40': 'var(--rui-neutral-40)',
      'neutral-60': 'var(--rui-neutral-60)',
      'neutral-80': 'var(--rui-neutral-80)',
      'neutral-90': 'var(--rui-neutral-90)',
      'neutral-100': 'var(--rui-neutral-100)',

      /* Utilities */
      'info': 'var(--rui-info)',
      'info-light': 'var(--rui-info-light)',
      'success': 'var(--rui-success)',
      'success-light': 'var(--rui-success-light)',
      'warning': 'var(--rui-warning)',
      'warning-light': 'var(--rui-warning-light)',
      'error': 'var(--rui-error)',
      'error-light': 'var(--rui-error-light)',

      'focus': 'var(--rui-focus)',

      'link': 'var(--rui-link)',
      'link-light': 'var(--rui-link-light)',

      'visited': 'var(--rui-visited)',
      'visited-light': 'var(--rui-visited-light)',
    },
    // Ref: https://bux.osu.edu/typography/type-size
    fontSize: {
      xs: ['var(--rui-text-xs)', { lineHeight: '1.5' }],
      sm: ['var(--rui-text-sm)', { lineHeight: '1.5' }],
      md: ['var(--rui-text-md)', { lineHeight: '1.5' }],
      base: ['var(--rui-text-base)', { lineHeight: '1.5' }],
      lg: ['var(--rui-text-lg)', { lineHeight: '1.5' }],
      xl: ['var(--rui-text-xl)', { lineHeight: '1.5' }],
      xxl: ['var(--rui-text-xxl)', { lineHeight: '1.5' }],
      // TODO: Line heights. Did I get them from BUX SASS?

      // Headings use different font steps
      // Ref: https://bux.osu.edu/typography/headings
      h1: ['var(--rui-title-1)', { lineHeight: '1.2'}],
      h2: ['var(--rui-title-2)', { lineHeight: '1.25'}],
      h3: ['var(--rui-title-3)', { lineHeight: '1.25'}],
      h4: ['var(--rui-title-4)', { lineHeight: '1.25'}],
    },
    // Ref: https://bux.osu.edu/typography/fonts
    fontFamily: {
      serif: ['BuckeyeSerif', 'Georgia', 'sans-serif'],
      sans: ['BuckeyeSans', 'HelveticaNeue', 'Helvetica', 'Arial', 'serif'],
      mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
    },
    fontWeight: {
      normal: 'var(--rui-font-normal)',
      semibold: 'var(--rui-font-semibold)',
      bold: 'var(--rui-font-bold)',
      extrabold: 'var(--rui-font-extrabold)',
      black: 'var(--rui-font-black)',
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
    // Examples: px-sm, p-2xl, m-xs, -m-xs
    { pattern: /^-?(m|p)(x|y|l|r|t|b)?-(xs|sm|md|lg|xl|xxl|0|1|auto|px)$/ }, // +6 KB

    // // inset
    // // Examples: inset-full, -inset-x-md, inset-y-full
    { pattern: /^-?(inset)(x|y)?-(xs|sm|md|lg|xl|xxl|xxxl|full|auto|px)$/ }, // +2 KB

    // // top/left/bottom/right
    // // Examples: top-xs, -right-sm, right-auto
    { pattern: /^-?(top|left|bottom|right)(x|y)?-(xs|sm|md|lg|xl|xxl|xxxl|full|auto)$/ }, // +2 KB

    // // TODO: Space between? It's heavy CSS

    // // fz(fontSize)
    { pattern: /^text-(xs|sm|md|lg|xl|xxl|0|full)$/ }, // +1 KB

    // +1 KB
    // (h)eight, (w)idth, (miw)in width, (maw)x idth, (mih)in height, (mah)x height,
    // Examples: max-h-screen, min-h-0, max-w-sm, w-full, h-2xl
    // Note that tailwind only define min-h 0, full, screen.
    { pattern: /^(max|min)?-(h|w)-(xs|sm|md|lg|xl|xxl|xxxl|0|1|full|screen)$/ }, // +1 KB
  ],
}

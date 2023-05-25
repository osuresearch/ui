
/* eslint global-require: off */
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('./tailwind-preset')
  ],
  content: [
    './src/**/*.{tsx,ts}'
  ],
  theme: {
    extend: {}
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
    { pattern: /^-?(m|p)(x|y|l|r|t|b)?-(xxs|xs|sm|md|lg|xl|xxl|0|1|auto|px)$/ }, // +6 KB

    // // inset
    // // Examples: inset-full, -inset-x-md, inset-y-full
    { pattern: /^-?(inset)(x|y)?-(xxs|xs|sm|md|lg|xl|xxl|xxxl|full|auto|px)$/ }, // +2 KB

    // // top/left/bottom/right
    // // Examples: top-xs, -right-sm, right-auto
    { pattern: /^-?(top|left|bottom|right)(x|y)?-(xxs|xs|sm|md|lg|xl|xxl|xxxl|full|auto)$/ }, // +2 KB

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

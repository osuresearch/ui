/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{tsx,ts}'
  ],
  plugins: [
    require('@tailwindcss/typography'),
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
      // css variables in globals.css.
      // The palette is then autogenerated via makePalette.mjs

      'black': 'var(--rui-black)',
      'white': 'var(--rui-white)',
      'clear': 'rgba(0, 0, 0, 0)',
      'focus': 'var(--rui-focus)',

      'neutral-subtle': 'var(--rui-neutral-subtle)',
      'neutral': 'var(--rui-neutral)',
      'neutral-bold': 'var(--rui-neutral-bold)',

      'surface-subtle': 'var(--rui-surface-subtle)',
      'surface': 'var(--rui-surface)',
      'surface-bold': 'var(--rui-surface-bold)',

      'surface-subtle-inverse': 'var(--rui-surface-subtle-inverse)',
      'surface-inverse': 'var(--rui-surface-inverse)',
      'surface-bold-inverse': 'var(--rui-surface-bold-inverse)',

      'primary': 'var(--rui-primary)',
      'primary-hover': 'var(--rui-primary-hover)',
      'primary-active': 'var(--rui-primary-active)',
      'primary-disabled': 'var(--rui-primary-disabled)',
      'primary-inverse': 'var(--rui-primary-inverse)',

      'secondary': 'var(--rui-secondary)',
      'secondary-inverse': 'var(--rui-secondary-inverse)',

      'tertiary': 'var(--rui-tertiary)',
      'tertiary-inverse': 'var(--rui-tertiary-inverse)',

      'link': 'var(--rui-link)',
      'link-hover': 'var(--rui-link-hover)',

      // TODO: Needed?
      'surface-link-hover': 'var(--rui-surface-link-hover)',

      'info': 'var(--rui-info)',
      'info-bold': 'var(--rui-info-bold)',
      'info-inverse': 'var(--rui-info-inverse)',

      'caution': 'var(--rui-caution)',
      'caution-bold': 'var(--rui-caution-bold)',
      'caution-inverse': 'var(--rui-caution-inverse)',

      'critical': 'var(--rui-critical)',
      'critical-bold': 'var(--rui-critical-bold)',
      'critical-inverse': 'var(--rui-critical-inverse)',

      'success': 'var(--rui-success)',
      'success-bold': 'var(--rui-success-bold)',
      'success-inverse': 'var(--rui-success-inverse)',

      'interactive': 'var(--rui-interactive)',
      'interactive-hover': 'var(--rui-interactive-hover)',
      'interactive-active': 'var(--rui-interactive-active)',
      'interactive-selected': 'var(--rui-interactive-selected)',
      'interactive-disabled': 'var(--rui-interactive-disabled)',

      'interactive-subtle-hover': 'var(--rui-interactive-subtle-hover)',

      'input': 'var(--rui-input)',
      'input-active': 'var(--rui-input-active)',
      'input-focused': 'var(--rui-input-focused)',
      'input-error': 'var(--rui-input-error)',
      'input-disabled': 'var(--rui-input-disabled)',

      'outline': 'var(--rui-outline)',
      'outline-active': 'var(--rui-outline-active)',
      'outline-focused': 'var(--rui-outline-focused)',
      'outline-error': 'var(--rui-outline-error)',
      'outline-disabled': 'var(--rui-outline-disabled)',

      'accent01': 'var(--rui-accent01)',
      'accent01-inverse': 'var(--rui-accent01-inverse)',
      'accent02': 'var(--rui-accent02)',
      'accent02-inverse': 'var(--rui-accent02-inverse)',
      'accent03': 'var(--rui-accent03)',
      'accent03-inverse': 'var(--rui-accent03-inverse)',
      'accent04': 'var(--rui-accent04)',
      'accent04-inverse': 'var(--rui-accent04-inverse)',
      'accent05': 'var(--rui-accent05)',
      'accent05-inverse': 'var(--rui-accent05-inverse)',
      'accent06': 'var(--rui-accent06)',
      'accent06-inverse': 'var(--rui-accent06-inverse)',
      'accent07': 'var(--rui-accent07)',
      'accent07-inverse': 'var(--rui-accent07-inverse)',
      'accent08': 'var(--rui-accent08)',
      'accent08-inverse': 'var(--rui-accent08-inverse)',
      'accent09': 'var(--rui-accent09)',
      'accent09-inverse': 'var(--rui-accent09-inverse)',
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
      h1: ['var(--rui-heading-1)', { lineHeight: '1.2' }],
      h2: ['var(--rui-heading-2)', { lineHeight: '1.25' }],
      h3: ['var(--rui-heading-3)', { lineHeight: '1.25' }],
      h4: ['var(--rui-heading-4)', { lineHeight: '1.25' }],
    },
    // Ref: https://bux.osu.edu/typography/fonts
    fontFamily: {
      sans: ['Nunito Sans', 'HelveticaNeue', 'Helvetica', 'Arial', 'serif'],
      serif: ['Source Serif Pro', 'Georgia', 'sans-serif'],
      mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
    },
    fontWeight: {
      regular: 'var(--rui-font-regular)',
      semibold: 'var(--rui-font-semibold)',
      bold: 'var(--rui-font-bold)',
      extrabold: 'var(--rui-font-extrabold)',
      black: 'var(--rui-font-black)',
    },
    extend: {
      minWidth: {
        // Tailwind doesn't come with spacing breakpoint min-width values
        'xxs': 'var(--rui-spacing-xxs)',
        'xs': 'var(--rui-spacing-xs)',
        'sm': 'var(--rui-spacing-sm)',
        'md': 'var(--rui-spacing-md)',
        'lg': 'var(--rui-spacing-lg)',
        'xl': 'var(--rui-spacing-xl)',
        'xxl': 'var(--rui-spacing-xxl)',
      },
      boxShadow: {
        // It's typical that we use a thick line under certain
        // content that match either the primary color or some
        // dark variant.
        // TODO: Make these a standard token for underline
        // styling on interactive components
        'underline-primary': '0 4px 0 0 var(--rui-primary)',
        'underline-interactive': '0 4px 0 0 var(--rui-outline-active)',
      },
      transitionTimingFunction: {
        'decelerate-max': 'transform 300ms cubic-bezier(0, 0, 0, 1)',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'pop': {
          '0%': {
            transform: 'scale(0)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
        'ping': {
          '75%, 100%': {
            // Reduce Tailwind's default ping transform
            transform: 'scale(1.5)',
            opacity: '0'
          }
        },
        'scroll': {
          'from': {
            left: '-50%'
          },
          'to': {
            left: '100%'
          }
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.2s ease-out', // Used by modals. TODO: Replace. I hate it.
        'pop': 'pop 0.12s ease-in-out',
        'scroll': 'scroll 2s linear infinite'
      },
      // @tailwindcss/typography plugin theme
      typography: () => ({
        rui: {
          css: {
            h1: {
              fontFamily: 'var(--rui-font-serif)',
            },
            a: {
              textDecoration: 'inherit',
              borderBottom: '1px solid var(--rui-link)',
              '&:hover': {
                color: 'var(--rui-link-hover)',
                borderColor: 'var(--rui-link-hover)',
                background: 'var(--rui-surface-link-hover)',
              }
            },
            '--tw-prose-body': 'var(--rui-neutral)',
            '--tw-prose-headings': 'var(--rui-neutral)',
            '--tw-prose-lead': 'var(--rui-neutral-subtle)',
            '--tw-prose-links': 'var(--rui-link)',
            '--tw-prose-bold': 'var(--rui-neutral)',
            '--tw-prose-counters': 'var(--rui-primary)',
            '--tw-prose-bullets': 'var(--rui-primary)',
            '--tw-prose-hr': 'var(--rui-surface-subtle)',
            '--tw-prose-quotes': 'var(--rui-neutral-subtle)',
            '--tw-prose-quote-borders': 'var(--rui-primary)',
            '--tw-prose-captions': 'var(--rui-neutral-subtle)',
            '--tw-prose-code': 'var(--rui-neutral)',
            '--tw-prose-pre-code': 'var(--rui-neutral)',
            '--tw-prose-pre-bg': 'var(--rui-surface-subtle)',
            '--tw-prose-th-borders': 'var(--rui-surface-bold)',
            '--tw-prose-td-borders': 'var(--rui-surface-subtle)',
          }
        }
      })
    },
  },
}
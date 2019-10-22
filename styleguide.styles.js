
/**
 * JSS styles for the styleguide.
 *
 * Originally based on Constructicon's theme and rebranded for OSU
 * https://github.com/everydayhero/constructicon
 */
const rhythm = (value = 1, unit = 'rem', basis = 1.5) => (
    Array.isArray(value)
        ? value.map(v => `${basis * v}${unit}`).join(' ')
        : `${basis * value}${unit}`
)

const colors = {
    light: '#fff',
    dark: '#292929',
    grey: '#7a898f',
    lightGrey: '#aec0c6',
    paleGrey: '#ebf1f3',
    primary: '#26686d', // Casal
    secondary: '#666', // Grey
    tertiary: '#203a44',
    danger: '#db3b21',
    link: '#3283c8'
}

const theme = {
    color: {
        baseBackground: colors.light,
        border: colors.paleGrey,
        codeBackground: colors.paleGrey,
        error: colors.danger,
        light: colors.grey,
        lightest: colors.lightGrey,
        name: colors.primary,
        type: colors.secondary,
        base: colors.dark,
        link: colors.link,
        linkHover: colors.tertiary,
        sidebarBackground: colors.dark
    },
    fontFamily: {
        base: 'ProximaNova, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        monospace: 'Consolas, "Liberation Mono", Menlo, monospace',
        heading: '"Capita", "Times New Roman", serif'
    },
    fontSize: {
        base: 15,
        text: 16,
        small: 13,
        h1: 38,
        h2: 32,
        h3: 18,
        h4: 18,
        h5: 16,
        h6: 16
    },
    maxWidth: 900,
    sidebarWidth: 240
}

const styles = {
    ComponentsList: {
        heading: {
            fontWeight: '300 !important'
        }
    },
    Logo: {
        logo: {
            color: colors.light,
            fontFamily: theme.fontFamily.heading,
            '&:before': {
                content: '"Office of Research"',
                fontSize: '12px',
                display: 'block',
                color: '#ddd',
                fontFamily: theme.fontFamily.base
            }
        }
    },
    Heading: {
        heading1: {
            display: 'block',
            position: 'relative',
            paddingBottom: rhythm(0.75),
            marginBottom: rhythm(0.75),
            fontFamily: theme.fontFamily.heading,
            fontWeight: 300,
            color: '#b00',
            '&:before': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: rhythm(3),
                height: '4px',
                backgroundColor: '#b00',
            },
            '& > a': {
                fontWeight: '300 !important'
            }
        },
        heading2: {
            marginBottom: rhythm(0.5),
            marginTop: '2.5rem',
            fontWeight: '300'
        },
        heading3: {
            borderBottom: `thin solid ${colors.lightGrey}`,
            paddingBottom: rhythm(0.25),
            marginBottom: rhythm(1),
            textTransform: 'uppercase',
            fontWeight: '300'
        }
    },
    TableOfContents: {
        input: {
            backgroundColor: '#666',
            border: 0,
            color: '#fff',
            '&::placeholder': {
                color: '#fff'
            }
        }
    },
    ReactComponent: {
        tabs: {
            backgroundColor: colors.paleGrey,
            padding: rhythm([0.5, 1]),
            overflow: 'auto'
        },
        tabButtons: {
            marginBottom: 0
        }
    },
    SectionHeading: {
        sectionName: {
            display: 'block',
            paddingTop: `${rhythm(1)} !important`,
            textDecoration: 'none !important',
            fontWeight: 300,
            '&:hover': {
                opacity: 0.75
            }
        },
        isDeprecated: {
            '&::after' : {
                content: '"Deprecated"',
                fontSize: '14px',
                background: '#b00',
                padding: '0.25em 0.5em',
                color: '#fff',
                verticalAlign: 'middle',
                marginLeft: '1rem',
            }
        }
    },
    StyleGuide: {
        content: {
            paddingTop: rhythm(2.5),
            '@media (max-width: 600px)': {
                padding: rhythm(1)
            }
        },
        logo: {
            border: 0,
            paddingBottom: 0,
            '& .rsg-logo': {
                display: 'block',
                color: colors.tertiary,
                margin: rhythm(-0.5),
                padding: rhythm(0.5),
                fontSize: theme.fontSize.h3,
                fontFamily: theme.fontFamily.base,
                transition: 'all 250ms ease',
                cursor: 'pointer',
                '&:after, &:hover:after': {
                    content: '"\\2197"',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    padding: rhythm(0.5),
                    opacity: 0.25,
                    transition: 'all 250ms ease',
                    cursor: 'pointer'
                },
                '&:hover:after': {
                    opacity: 0.75,
                    color: colors.dark
                }
            },
            '& .rsg-logo-name, & .rsg-logo-version': {
                display: 'inline-block',
                verticalAlign: 'middle',
                pointerEvents: 'none'
            },
            '& .rsg-logo-name': {
                fontWeight: 700
            },
            '& .rsg-logo-version': {
                marginLeft: rhythm(0.25),
                opacity: 0.5
            }
        },
        sidebar: {
            border: 0,
            '& li > a': {
                color: `${colors.light} !important`
            }
        }
    },
    TabButton: {
        button: {
            width: '100%'
        },
        isActive: {
            border: 0
        }
    },
    Table: {
        table: {
            marginTop: rhythm(0.5),
            marginBottom: rhythm(0.5),
            minWidth: '600px'
        },
        cellHeading: {
            borderBottom: `thin solid ${colors.lightGrey}`
        },
        cell: {
            paddingBottom: 0,
            '& p': {
                marginBottom: `${rhythm(0.125)} !important`
            },
            '& div[class*="para"]': {
                marginBottom: `${rhythm(0.125)} !important`
            }
        }
    }
}

module.exports = {
    styles: styles,
    theme: theme
}

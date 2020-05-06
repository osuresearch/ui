
const path = require('path');
const glob = require('glob');
const { styles, theme } = require('./styleguide.styles');
const packageManifest = require('./package.json');

// Where to find the root SASS file for loading styles across the page
const SASS_INDEX = path.join(__dirname, './src/sass/styleguide.scss');

// Output path of deployable assets after `npm run deploy`
const BUILD_PATH = path.join(__dirname, './styleguide');

// Where standard static vendor assets are loaded from.
const ASSETS_HOST = 'https://orapps.osu.edu';

/**
 * Custom aggregator for the `HTML Components` section
 */
function listHtmlComponents() {
    const files = glob.sync('docs/html/**/!(readme).md');

    var sections = [];
    files.forEach((filename) => {
        sections.push({
            name: path.basename(filename, '.md'),
            content: filename
        });
    });

    return sections;
}

/**
 * Reconfigure Webpack for Styleguidist
 *
 * References:
 * - https://github.com/everydayhero/constructicon
 * - https://react-styleguidist.js.org/docs/configuration.html
 * - https://www.npmjs.com/package/@vxna/mini-html-webpack-template
 */
module.exports = {
    title: 'UI Components ' + packageManifest.version,
    usageMode: 'expand',
    styleguideDir: BUILD_PATH,
    skipComponentsWithoutExample: true,
    styles,
    theme,
    template: {
        favicon: ASSETS_HOST + '/assets/img/vendor/osu-navbar/favicon.ico',
        head: {
            scripts: [
                // jQuery is required for BS4 and React components that are just wrappers around
                // legacy jQuery-based components.
                { src: ASSETS_HOST + '/assets/js/vendor/jquery-3.2.1.min.js' },
                { src: ASSETS_HOST + '/assets/js/vendor/bootstrap-4.0.0.min.js' },

                // Vendor libraries required for certain custom components
                { src: ASSETS_HOST + '/assets/js/vendor/bootstrap-datepicker-1.6.1.min.js' },
                { src: ASSETS_HOST + '/assets/js/vendor/moment-2.14.1.min.js' },
                // { src: ASSETS_HOST + '/assets/js/vendor/ckeditor-4.6.2/ckeditor.js' },
                { src: ASSETS_HOST + '/assets/js/vendor/datatables-1.10.10.min.js' },
                { src: 'https://cdn.ckeditor.com/ckeditor5/19.0.0/decoupled-document/ckeditor.js' },
            ]
        }
    },
    getComponentPathLine: (componentPath) => {
        // Naming convention for ../Component/index.js
        const dirname = path.dirname(componentPath);
        const name = dirname.split(path.sep).slice(-1)[0];

        // The assumption is that all (public) components are exported
        // by name from the primary index of the package.
        return 'import { ' + name + ' } from \'@oris/ui\'';
    },
    dangerouslyUpdateWebpackConfig: (webpackConfig, env) => {
        // Ignore any jQuery imports. They'll be resolved via the CDN script
        webpackConfig.externals = {
            jquery: 'jQuery'
        }

        return webpackConfig
    },
    require: [
        // Bake in global SASS styles together, rather than
        // using the webpack-method of directly importing into
        // each component's .js file. This is because we're including components
        // that are meant to work with gulp-sass, which does not have CSS module
        // support (At least in our configured gulpfile)
        SASS_INDEX
    ],
    moduleAliases: {
        // Aliasing so we don't have awful import '../../../..' in examples.
        '@oris/ui': path.join(__dirname, './src')
    },
    propsParser: (filePath, source, resolver, handlers) => {
        // Handle TypeScript prop parsing
        if (filePath.substr(-3) === 'tsx') {
            return require('react-docgen-typescript').withCustomConfig(
                './tsconfig.json'
            ).parse(filePath);
        }

        // Assume Javascript
        return require('react-docgen').parse(source, resolver, handlers);
    },
    sections: [
        {
            name: '',
            content: 'docs/readme.md'
        },
        {
            name: 'Colors',
            content: 'docs/colors.md'
        },
        {
            name: 'Components',
            content: 'src/components/readme.md',
            components: 'src/components/**/index.?(js|tsx)',
            ignore: [
                'src/components/.ignore'
            ]
        },
        {
            name: 'HTML Components',
            content: 'docs/html/readme.md',
            sections: listHtmlComponents()
        },
        {
            name: 'Experimental',
            content: 'src/experimental/readme.md',
            components: 'src/experimental/**/index.js',
            ignore: [
                'src/experimental/.ignore'
            ]
        }
    ]
};

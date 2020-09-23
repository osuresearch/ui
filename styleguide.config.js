
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

const ISOLATED_COMPONENTS = process.env.ISOLATE_COMPONENTS || undefined;

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

function listSearchComponents() {
    const components = glob.sync('src/search/components/*/index.tsx');
    
    console.log(components);

    // Need to handle top level:
    // <DebugSearch>, <SearchProvider>
    // Anything else? useSearch hook, different drivers, 
    // Might just need a fat readme for it

    var sections = [];
    components.forEach((componentPath) => {
        const dirname = path.dirname(componentPath);
        const dirs = dirname.split('/'); // src, search, components, Checkbox
        const component = dirs[3];
        const subPaths = glob.sync(dirname + '/*/index.tsx');
        
        // Component with zero or more sub-components
        sections.push({
            name: `<${component}>`,
            usageMode: 'collapse',
            components: [
                componentPath, // Main (composite) form component listed first
                ...subPaths, // Followed by each sub-component at `{sub-component name}/index.tsx`
            ]
        });
    });

    // Add section for drivers
    sections.push({
        name: 'Drivers',
        content: 'src/search/drivers/readme.md',
        usageMode: 'collapse',
        components: [
            'src/search/drivers/**/index.tsx'
        ],
    });

    console.log(sections);
    // throw new Error('');
    return sections;
}

/**
 * Custom aggregator for the `Form Components` section with the following rules:
 * 
 * - Each component creates a section named as the top level component
 *   - e.g. `src/form/Text/index.tsx` creates a `Text` section.
 * 
 * - A sub-section is then added for every sub-component (indicated as subfolders)
 *   to that top level component directory.
 *   - e.g. `src/form/Text/Input/index.tsx` will create an `Input` subsection.
 * 
 * - Common components in `src/internal/FormCommon/Components` will also be
 *   added *per section* UNLESS there's a local override matching the name.
 *   - e.g. Radio will get `src/internal/FormCommon/Label/index.tsx` UNLESS
 *     it has its own `src/form/Radio/Label/index.tsx`
 */
function listFormComponents() {
    const components = glob.sync('src/form/*/index.tsx');

    var sections = [];
    components.forEach((componentPath) => {
        const dirname = path.dirname(componentPath);
        const dirs = dirname.split('/'); // src, form, Checkbox
        const component = dirs[2];

        // Special handling for the root Form component
        // to ensure it's first in the list 
        if (component === 'Form') {
            sections = [{ 
                name: '<Form>',
                usageMode: 'collapse',
                components: 'src/form/Form/index.tsx'
            }, ...sections];
        } else {
            const subPaths = glob.sync(dirname + '/*/index.tsx');
            
            // Components from FormCommon that we include as subcomponents
            // for all components by default. 
            let generics = glob.sync('src/internal/FormCommon/Components/*/index.tsx');

            // For all generics - if there's a copy locally defined to this component
            // then we replace it with the local copy (e.g. if `src/form/Text/Label/index.tsx` exists)
            subPaths.forEach((p) => {
                const subName = p.split('/')[3];
                generics = generics.filter(s => s.indexOf(subName + '/index.tsx'));
            });

            // Component with zero or more sub-components
            sections.push({
                name: `<${component}>`,
                usageMode: 'collapse',
                components: [
                    componentPath, // Main (composite) form component listed first
                    ...subPaths, // Followed by each sub-component at `{sub-component name}/index.tsx`
                    ...generics // And then any generics not overridden
                ]
            });
        }
    });

    // console.log(sections);

    return sections;
}

// Default sections of the styleguide
let sections = [
    {
        name: '',
        content: 'docs/readme.md',
    },
    {
        name: 'Colors',
        content: 'docs/colors.md',
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
        name: 'Form Components',
        content: 'src/form/readme.md',
        // components: 'src/form/*/index.?(js|tsx)',
        // ignore: [
        //     'src/form/Form/index.tsx'
        // ],
        sections: listFormComponents(),
        sectionDepth: 0,
    }, 
    {
        name: 'Search Components',
        content: 'src/search/readme.md',
        components: 'src/search/components/*.tsx',
        sections: listSearchComponents(),
        sectionDepth: 0,
    },
    {
        name: 'HTML Components',
        content: 'docs/html/readme.md',
        sections: listHtmlComponents(),
        sectionDepth: 0,
    },
    {
        name: 'Experimental',
        content: 'src/experimental/readme.md',
        components: 'src/experimental/**/index.?(js|tsx)',
        ignore: [
            'src/experimental/.ignore'
        ],
        sectionDepth: 1,
    }
];

// If we're isolating, replace the sections with just those components.
if (ISOLATED_COMPONENTS) {
    sections = [{
        name: 'Isolated Components',
        description: `Subset of @oris/ui components matching filter: \`${ISOLATED_COMPONENTS}\``,
        components: ISOLATED_COMPONENTS
    }];
}

/**
 * Configurations for the react-docgen-typescript plugin
 */
const reactDocgenTypescriptOptions = {
    propFilter: (prop, component) => {
        // Skip props merged from node_modules
        // E.g. const MyComponent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ()...
        if (prop.parent) {
          return !prop.parent.fileName.includes('node_modules');
        }
     
        return true;
    },
};

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
    tocMode: 'collapse',
    styleguideDir: BUILD_PATH,
    skipComponentsWithoutExample: false,
    pagePerSection: true,
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
                { src: 'https://cdn.ckeditor.com/4.14.0/standard/ckeditor.js' },
            ]
        }
    },
    // updateDocs: (docs, file) => {
    //     console.log(file);
    //     console.log(docs);
    //     return docs;
    // },
    getComponentPathLine: (componentPath) => {
        // Naming convention for ../Component/index.js
        const dirname = path.dirname(componentPath);
        const basename = path.basename(componentPath, path.extname(componentPath));
        const paths = dirname.split(path.sep); // .slice(-1);

        // If basename is index, then we assume it's /ComponentName/index.ext
        // Otherwise, we assume ComponentName.ext
        const name = basename === 'index' ? paths[paths.length - 1] : basename;

        // Handle import conventions for search components:
        // 1. Drivers are direct imports per-driver
        // 2. Subcomponents are imported via their parent only through the composite index.ts
        // 3. Everything else (provider, debuggers, etc) are in the composite index.ts
        if (paths[1] === 'search') {
            if (paths[2] === 'drivers') {
                return `import ${name} from '@oris/ui/search/drivers/${name}'`;
            }

            // Some sort of subcomponent - import line is for the parent
            if (paths[2] === 'components' && paths.length > 3) {
                return `import { ${paths[3]} } from '@oris/ui/search'`;
            }

            // Otherwise, assume a direct import
            return `import { ${name} } from '@oris/ui/search'`;
        }

        // TODO: Can't figure out how to deal with subcomponents that come from generics.
        // E.g. a subcomponent path is `src/form/Checkbox/Label` but a generic would
        // be `src/internal/FormCommon/Components/Error`. Both should return
        // `import { Checkbox } from '@oris/ui'` but there's no way to identify
        // that `Checkbox` is the right import for the generic, given the function args.
        // In either case though - we can't import the subcomponent directly, we only
        // import the parent and access it as a child to that parent component entity.

        // So - for now - subcomponents don't get import documentation.
        if (paths.length > 3) return;

        // The assumption is that all (public) components are exported
        // by name from the primary index of the package.
        return 'import { ' + name + ' } from \'@oris/ui\'';
    },
    dangerouslyUpdateWebpackConfig: (webpackConfig, env) => {
        // Ignore any jQuery imports. They'll be resolved via the CDN script
        webpackConfig.externals = {
            jquery: 'jQuery'
        }

        // Disable minification due to bug with custom styles in builds
        // See: https://github.com/styleguidist/react-styleguidist/issues/1525
        webpackConfig.optimization = {
            minimize: false
        };

        return webpackConfig;
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
                './tsconfig.json',
                reactDocgenTypescriptOptions
            ).parse(filePath);
        }

        // Assume Javascript
        return require('react-docgen').parse(source, resolver, handlers);
    },
    sections: sections
};

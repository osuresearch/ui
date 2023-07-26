
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import inquirer from 'inquirer';
import { buildComponentsIndex } from './utils.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Copy and format a template file into the `src` directory
 *
 * @param {string[]} template A template file path within `scripts/templates`
 * @param {string[]} src  File path within `src/` to write
 * @param {Array} replacements Mapping search regex (key) to replacement (value)
 */
function copyTemplate(template, src, ...args) {
  let contents = fs
    .readFileSync(
      join(__dirname, 'templates', ...template),
      { encoding: 'utf-8' }
    );

  for (let key in args) {
    contents = contents.replace(args[key][0], args[key][1]);
  }

  const target = join(__dirname, '../', 'src', ...src);
  console.log('CREATE', target);

  fs.mkdirSync(dirname(target), { recursive: true });
  fs.writeFileSync(target, contents);
}

/**
 * Interactive tooling for doing various project level things.
 */
async function builder() {
  const answers = await inquirer.prompt([
    {
      name: 'name',
      type: 'input',
      message: 'Name of the new component? (e.g. FooBar)',
    },
    {
      name: 'group',
      type: 'input',
      message: 'Group for the new component? (e.g. Layout, Components, etc)',
      default: 'Components',
    }
  ]);

  const replacements = [
    [/__TEMPLATE__/g, answers.name],
    [/__GROUP__/g, answers.group]
  ];

  // Component
  copyTemplate(
    ['component', 'index.tsx'],
    ['components', answers.name, answers.name + '.tsx'],
    ...replacements
  );

  // Storybook stories
  copyTemplate(
    ['component', 'index.stories.tsx'],
    ['components', answers.name, answers.name + '.stories.tsx'],
    ...replacements
  );

  // Jest tests
  copyTemplate(
    ['component', 'index.test.tsx'],
    ['components', answers.name, answers.name + '.test.tsx'],
    ...replacements
  );

  // Main export
  copyTemplate(
    ['component', 'index.ts'],
    ['components', answers.name, 'index.ts'],
    ...replacements
  );

  // Rebuild indices to add to exports
  buildComponentsIndex();
}

builder();

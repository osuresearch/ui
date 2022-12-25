
import fs from 'fs';

/**
 * Regenerate `src/components/index.ts` with aggregate exports
 * of all components
 */
export function buildComponentsIndex() {
  const components = fs.readdirSync(
      'src/components',
      { withFileTypes: true }
    )
    .filter(f => f.isDirectory())
    .map(f => f.name)
    .sort();

  console.log(components);

  // Generate src/components/index.ts with component exports
  const contents = components
    .map(c => `export * from './${c}';`)
    .join('\n');

  fs.writeFileSync('src/components/index.ts', contents);
}

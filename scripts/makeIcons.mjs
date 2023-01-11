import { promises as fs } from 'fs';
import {
  importDirectory,
  cleanupSVG,
  runSVGO,
  parseColors,
  isEmptyColor,
} from '@iconify/tools';


async function convert(directory, prefix) {
  // Import icons
  const iconSet = await importDirectory(directory, {
    prefix
  });

  // Validate, clean up, fix palette and optimise
  await iconSet.forEach(async (name, type) => {
    if (type !== 'icon') {
      return;
    }

    const svg = iconSet.toSVG(name);
    if (!svg) {
      // Invalid icon
      iconSet.remove(name);
      return;
    }

    // Clean up and optimize icons
    try {
      // Clean up icon code
      await cleanupSVG(svg);

      // Assume icon is monotone: replace color with currentColor, add if missing
      // If icon is not monotone, remove this code
      await parseColors(svg, {
        defaultColor: 'currentColor',
        callback: (attr, colorStr, color) => {
          return !color || isEmptyColor(color) ? colorStr : 'currentColor';
        },
      });

      // Optimize
      runSVGO(svg);
    } catch (err) {
      // Invalid icon
      console.error(`Error parsing ${name}:`, err);
      iconSet.remove(name);
      return;
    }

    // Update icon
    iconSet.fromSVG(name, svg);
  });

  // Export as IconifyJSON
  const exported = JSON.stringify(iconSet.export(), null, '\t') + '\n';

  // Save to file
  await fs.writeFile(`src/icons/${iconSet.prefix}.json`, exported, 'utf8');
}

(async () => {
  await convert('svg/icons', 'rui');
  await convert('svg/illustrations', 'rui-illustration');
})();

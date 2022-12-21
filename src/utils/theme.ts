import { ThemeColor } from '../types';

import { cx } from '../styles';

function pxxxxx() {
  // Matrix of Tailwind padding classes that can be
  // used by a developer consuming UI.
  // Classes are explicitly defined to ..... this sucks.
  // what about md/xl/etc screen resolution matrices?
  // do I ignore that and use our own toggles?
  const padClasses = {
    p: ['p-xs', 'p-sm', 'p-lg', 'p-xl', 'p-xxl'],
    px: ['px-xs', 'px-sm', 'px-lg', 'px-xl', 'px-xxl'],
    py: ['py-xs', 'py-sm', 'py-lg', 'py-xl', 'py-xxl'],
    pl: ['pl-xs', 'pl-sm', 'pl-lg', 'pl-xl', 'pl-xxl'],
    pr: ['pr-xs', 'pr-sm', 'pr-lg', 'pr-xl', 'pr-xxl'],
    pt: ['pt-xs', 'pt-sm', 'pt-lg', 'pt-xl', 'pt-xxl'],
    pb: ['pb-xs', 'pb-sm', 'pb-lg', 'pb-xl', 'pb-xxl', '-mx-xs']
  };
}

function testVSCodeTailwindIntellisense() {
  const c = cx(`
    bg-scarlet,
  `);

  const b = cx(
    'bg-white',
    ';', // <- breaks matcher.
    'bg-scarlet'
  );

  const foo = 'bg-scarlet';

  const className = cx('bg-scarlet', 'text-scarlet', {
    foo: 'bg-scarlet',
    bar: 'bg-gray',
    fizz: bg('bg-scarlet')
  });

  const foobar = cx(
    'bg-scarlet',
    'bg-white',
    {
      foo: 'bg-scarlet',
      bar: 'bg-gray',
      fizz: bg('bg-scarlet')
    },
    'bg-scarlet',
    {
      buzz: 'bg-gray'
    }
  );

  const buzzClasses = {
    'bg-scarlet': true,
    'bg-white': true,
    'sub': {
      foo: 'bg-scarlet',
      bar: 'bg-gray',
      fizz: bg('bg-scarlet')
    },
    'bg-scarlet ': true,
    'sub2': {
      buzz: 'bg-gray'
    }
  };

  const shouldNotMatch = 'bg-scarlet';

  const fooClasses = 'backdrop:block bg-scarlet';

  const fizzClasses = {
    'enabled': 'bg-scarlet',
    'bg-scarlet': true,
    'foo': {
      bar: 'bg-scarlet'
    }
  };

  const testClass = {
    scarlet: 'bg-scarlet'
  };
}

/**
 * Return a safe contrast color against the given theme as a background
 */
export function contrast(color: ThemeColor): ThemeColor {
  // Mapping of all colors that require a white fg
  if (['scarlet', 'black', 'brown', 'violet', 'teal', 'error', 'error-light'].indexOf(color) >= 0) {
    return 'white';
  }

  // Everything else, call it dark.
  return 'black';
}

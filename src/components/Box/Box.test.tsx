import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React, { forwardRef } from 'react';

import { Box } from './Box';

console.error = (warning = '') => {
  throw Error(warning);
  // if (warning.indexOf("Warning: Failed prop type:") > -1) {
  //   throw Error(warning);
  // }
};

describe('Tests for AltBox component', () => {
  it('renders content', () => {
    const { container } = render(<Box>Foo bar</Box>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('is polymorphic span', () => {
    const { container } = render(<Box as="span">Foo bar</Box>);

    expect((container.firstChild as HTMLElement).tagName).toBe('SPAN');
  });

  it('passes down polymorph props', () => {
    const { container } = render(
      <Box as="a" href="https://sybolt.com">
        Foo bar
      </Box>
    );

    expect((container.firstChild as HTMLElement).tagName).toBe('A');
    expect((container.firstChild as HTMLAnchorElement).href).toBe('https://sybolt.com/');
  });

  // it('rejects invalid polymorph props', () => {
  //   expect(() => {
  //     render(<AltBox as='a' garbage="foo">Foo bar</AltBox>);
  //   }).toThrow();
  // });

  itIsPolymorphic(Box, {});
});

export function itIsPolymorphic<P>(Component: React.ComponentType<P>, requiredProps: P) {
  it('is polymorphic', () => {
    const get = (container: HTMLElement): HTMLElement => container.firstChild as HTMLElement;

    const TestComponent = forwardRef((props: any, ref) => <mark ref={ref} {...props} />);

    const { container: withTag } = render(
      <Component as="a" href="https://mantine.dev" {...requiredProps} />
    );

    const { container: withComponent } = render(
      <Component as={TestComponent} {...requiredProps} />
    );

    const { container: withProps } = render(
      <Component as="a" href="https://sybolt.com/" {...requiredProps} />
    );

    expect(get(withTag).tagName).toBe('A');
    expect(get(withComponent).tagName).toBe('MARK');
    expect(get(withProps).getAttribute('href')).toBe('https://sybolt.com/');
  });
}

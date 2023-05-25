import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React, { forwardRef } from 'react';

import { Box } from './Box';

console.error = (warning = '') => {
  throw Error(warning);
  // if (warning.indexOf("Warning: Failed prop type:") > -1) {
  //   throw Error(warning);
  // }
};

describe('Tests for Box component', () => {
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
      <Box as="a" href="https://example.com">
        Foo bar
      </Box>
    );

    expect((container.firstChild as HTMLElement).tagName).toBe('A');
    expect((container.firstChild as HTMLAnchorElement).href).toBe('https://example.com/');
  });

  // Issue #83 - cannot polymorph to components that also have an 'as' prop
  it('ignores target as prop', () => {

    const TestComponent = forwardRef<HTMLSpanElement, { as: URL }>((props, ref) => <mark />);

    const { container } = render(
      <Box as={TestComponent}>
        Foo bar
      </Box>
    );

    expect((container.firstChild as HTMLElement).tagName).toBe('MARK');
  });

  itIsPolymorphic(Box, {});
});

export function itIsPolymorphic<P>(Component: React.ComponentType<P>, requiredProps: P) {
  it('is polymorphic', () => {
    const get = (container: HTMLElement): HTMLElement => container.firstChild as HTMLElement;

    const TestComponent = forwardRef<HTMLElement>((props: any, ref) => <mark ref={ref} {...props} />);

    const { container: withTag } = render(
      <Component as="a" href="https://example.com/" {...requiredProps} />
    );

    const { container: withComponent } = render(
      <Component as={TestComponent} {...requiredProps} />
    );

    const { container: withProps } = render(
      <Component as="a" href="https://example.com/" {...requiredProps} />
    );

    expect(get(withTag).tagName).toBe('A');
    expect(get(withComponent).tagName).toBe('MARK');
    expect(get(withProps).getAttribute('href')).toBe('https://example.com/');
  });
}

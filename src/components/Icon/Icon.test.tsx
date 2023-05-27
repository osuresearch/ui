import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Icon } from './index';

describe('Tests for Icon component', () => {
  it('renders content', () => {
    const { container } = render(<Icon name="caret" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders aria-label attribute', () => {
    const { container } = render(<Icon name="caret" aria-label="Foo bar" />);
    expect(container.firstChild).toHaveAttribute('aria-label', 'Foo bar');
  });
});

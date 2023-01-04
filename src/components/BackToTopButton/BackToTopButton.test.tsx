import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { BackToTopButton } from './BackToTopButton';

describe('Tests for BackToTopButton component', () => {
  it('renders content', () => {
    const { container } = render(<BackToTopButton>Foo bar</BackToTopButton>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

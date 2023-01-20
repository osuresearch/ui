import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { HamburgerButton } from './HamburgerButton';

describe('Tests for HamburgerButton component', () => {
  it('renders content', () => {
    const { container } = render(<HamburgerButton>Foo bar</HamburgerButton>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

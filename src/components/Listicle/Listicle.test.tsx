import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Listicle } from './index';

describe('Tests for Listicle component', () => {
  it('renders content', () => {
    const { container } = render(<Listicle>Foo bar</Listicle>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

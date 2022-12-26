import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { Ring } from './Ring';

describe('Tests for Ring component', () => {
  it('renders content', () => {
    const { container } = render(<Ring>Foo bar</Ring>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

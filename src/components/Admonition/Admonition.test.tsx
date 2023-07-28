import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Admonition } from './Admonition';

describe('Tests for Admonition component', () => {
  it('renders', () => {
    const { container } = render(<Admonition />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

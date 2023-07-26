import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { LazyLoaded } from './LazyLoaded';

describe('Tests for LazyLoaded component', () => {
  it('renders', () => {
    const { container } = render(<LazyLoaded />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

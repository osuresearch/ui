import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { NecessityIndicator } from './NecessityIndicator';

describe('Tests for NecessityIndicator component', () => {
  it('renders content', () => {
    const { container } = render(<NecessityIndicator>Foo bar</NecessityIndicator>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

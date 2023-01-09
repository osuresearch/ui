import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { OhioStateFooter } from './OhioStateFooter';

describe('Tests for OhioStateFooter component', () => {
  it('renders content', () => {
    const { container } = render(<OhioStateFooter>Foo bar</OhioStateFooter>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

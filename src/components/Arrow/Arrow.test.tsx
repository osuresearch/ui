import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Arrow } from './Arrow';

describe('Tests for Arrow component', () => {
  it('renders content', () => {
    const { container } = render(<Arrow>Foo bar</Arrow>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

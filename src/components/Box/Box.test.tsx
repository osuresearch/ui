import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Box } from './index';

describe('Tests for Box component', () => {
  it('renders content', () => {
    const { container } = render(<Box>Foo bar</Box>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

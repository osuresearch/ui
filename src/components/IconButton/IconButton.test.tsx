import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { IconButton } from './IconButton';

describe('Tests for IconButton component', () => {
  it('renders content', () => {
    const { container } = render(<IconButton name="xmark" label="Close" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

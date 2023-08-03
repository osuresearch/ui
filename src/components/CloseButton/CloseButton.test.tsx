import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { CloseButton } from './CloseButton';

describe('Tests for CloseButton component', () => {
  it('renders', () => {
    const { container } = render(<CloseButton />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

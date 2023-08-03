import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { ConfirmButton } from './ConfirmButton';

describe('Tests for ConfirmButton component', () => {
  it('renders', () => {
    const { container } = render(<ConfirmButton />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

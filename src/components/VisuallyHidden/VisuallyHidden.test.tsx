import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { VisuallyHidden } from './VisuallyHidden';

describe('Tests for VisuallyHidden component', () => {
  it('renders', () => {
    const { container } = render(<VisuallyHidden />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

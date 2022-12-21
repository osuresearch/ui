import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { VisuallyHidden } from './VisuallyHidden';

describe('Tests for VisuallyHidden component', () => {
  it('renders content', () => {
    const { container } = render(<VisuallyHidden>Foo bar</VisuallyHidden>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

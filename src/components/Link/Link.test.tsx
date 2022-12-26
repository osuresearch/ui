import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { Link } from './index';

describe('Tests for Link component', () => {
  it('renders content', () => {
    const { container } = render(<Link href="https://research.osu.edu">research.osu.edu</Link>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

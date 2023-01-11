import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { OhioStateNavbar } from './OhioStateNavbar';

describe('Tests for OhioStateNavbar component', () => {
  it('renders content', () => {
    const { container } = render(<OhioStateNavbar />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

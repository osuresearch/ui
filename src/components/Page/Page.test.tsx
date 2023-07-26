import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Page } from './Page';

describe('Tests for Page component', () => {
  it('renders', () => {
    const { container } = render(<Page />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

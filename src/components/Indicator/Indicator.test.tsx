import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Indicator } from './index';

describe('Tests for Indicator component', () => {
  it('renders content', () => {
    const { container } = render(<Indicator />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

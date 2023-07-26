import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Icon } from './Icon';

describe('Tests for Icon component', () => {
  it('renders', () => {
    const { container } = render(<Icon />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

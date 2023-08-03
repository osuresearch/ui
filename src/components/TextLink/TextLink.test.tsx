import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { TextLink } from './TextLink';

describe('Tests for TextLink component', () => {
  it('renders', () => {
    const { container } = render(<TextLink />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { ToggleButton } from './ToggleButton';

describe('Tests for ToggleButton component', () => {
  it('renders content', () => {
    const { container } = render(<ToggleButton>Foo bar</ToggleButton>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

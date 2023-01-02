import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { PrimaryButton } from './PrimaryButton';

describe('Tests for PrimaryButton component', () => {
  it('renders content', () => {
    const { container } = render(<PrimaryButton>Foo bar</PrimaryButton>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { AltBox } from './AltBox';

describe('Tests for AltBox component', () => {
  it('renders content', () => {
    const { container } = render(<AltBox>Foo bar</AltBox>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

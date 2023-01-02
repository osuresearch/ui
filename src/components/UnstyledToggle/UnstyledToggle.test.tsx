import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { UnstyledToggle } from './UnstyledToggle';

describe('Tests for UnstyledToggle component', () => {
  it('renders content', () => {
    const { container } = render(<UnstyledToggle>Foo bar</UnstyledToggle>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

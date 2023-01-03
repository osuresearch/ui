import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Kbd } from './Kbd';

describe('Tests for Kbd component', () => {
  it('renders content', () => {
    const { container } = render(<Kbd>Foo bar</Kbd>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

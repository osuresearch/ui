import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Lookup } from './Lookup';

describe('Tests for Lookup component', () => {
  it('renders content', () => {
    const { container } = render(<Lookup>Foo bar</Lookup>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Underlay } from './Underlay';

describe('Tests for Underlay component', () => {
  it('renders content', () => {
    const { container } = render(<Underlay>Foo bar</Underlay>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

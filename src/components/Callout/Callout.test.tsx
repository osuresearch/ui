import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Callout } from './Callout';

describe('Tests for Callout component', () => {
  it('renders content', () => {
    const { container } = render(<Callout>Foo bar</Callout>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

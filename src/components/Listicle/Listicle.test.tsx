import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Listicle } from './index';

describe('Tests for Listicle component', () => {
  it('renders content', () => {
    const { container } = render(<Listicle>Foo bar</Listicle>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

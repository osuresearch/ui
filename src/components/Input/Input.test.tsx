import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Input } from './index';

describe('Tests for Input component', () => {
  it('renders content', () => {
    const { container } = render(<Input>Foo bar</Input>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

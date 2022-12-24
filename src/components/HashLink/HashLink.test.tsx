import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { HashLink } from './HashLink';

describe('Tests for HashLink component', () => {
  it('renders content', () => {
    const { container } = render(<HashLink id="#foobar">Foo bar</HashLink>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

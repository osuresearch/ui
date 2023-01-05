import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Header } from './index';

describe('Tests for Title component', () => {
  it('renders content', () => {
    const { container } = render(<Header level={1}>Foo bar</Header>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

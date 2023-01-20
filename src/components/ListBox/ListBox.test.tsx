import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { ListBox } from './ListBox';

describe('Tests for ListBox component', () => {
  it('renders content', () => {
    const { container } = render(<ListBox>Foo bar</ListBox>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

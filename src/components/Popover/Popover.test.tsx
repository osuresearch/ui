import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Popover } from './Popover';

describe('Tests for Popover component', () => {
  it('renders content', () => {
    const { container } = render(<Popover>Foo bar</Popover>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

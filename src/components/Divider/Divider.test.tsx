import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Divider } from './Divider';

describe('Tests for Divider component', () => {
  it('renders content', () => {
    const { container } = render(<Divider>Foo bar</Divider>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

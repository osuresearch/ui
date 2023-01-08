import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Heading } from './index';

describe('Tests for Title component', () => {
  it('renders content', () => {
    const { container } = render(<Heading level={1}>Foo bar</Heading>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

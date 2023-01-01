import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Title } from './index';

describe('Tests for Title component', () => {
  it('renders content', () => {
    const { container } = render(<Title level={1}>Foo bar</Title>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

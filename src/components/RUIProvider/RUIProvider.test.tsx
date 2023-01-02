import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { RUIProvider } from './RUIProvider';

describe('Tests for RUIProvider component', () => {
  it('renders content', () => {
    const { container } = render(<RUIProvider>Foo bar</RUIProvider>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

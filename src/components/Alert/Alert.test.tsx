import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Alert } from './index';

describe('Tests for Alert component', () => {
  it('renders content', () => {
    const { container } = render(<Alert>Foo bar</Alert>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

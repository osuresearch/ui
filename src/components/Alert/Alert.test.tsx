import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Alert } from './index';

describe('Tests for Alert component', () => {
  it('renders content', () => {
    const { container } = render(<Alert>Foo bar</Alert>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Breadcrumbs } from './Breadcrumbs';

describe('Tests for Breadcrumbs component', () => {
  it('renders content', () => {
    const { container } = render(<Breadcrumbs>Foo bar</Breadcrumbs>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

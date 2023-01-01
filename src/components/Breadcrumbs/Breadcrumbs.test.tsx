import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Breadcrumbs } from './Breadcrumbs';

describe('Tests for Breadcrumbs component', () => {
  it('renders content', () => {
    const { container } = render(<Breadcrumbs>Foo bar</Breadcrumbs>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

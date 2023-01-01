import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { SectionTitle } from './SectionTitle';

describe('Tests for Section component', () => {
  it('renders content', () => {
    const { container } = render(<SectionTitle>Foo bar</SectionTitle>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

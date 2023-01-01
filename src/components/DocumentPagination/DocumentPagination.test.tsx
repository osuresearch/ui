import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { DocumentPagination } from './index';

describe('Tests for DocumentPagination component', () => {
  it('renders content', () => {
    const { container } = render(<DocumentPagination>Foo bar</DocumentPagination>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

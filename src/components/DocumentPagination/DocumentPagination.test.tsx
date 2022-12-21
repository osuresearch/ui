import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { DocumentPagination } from './index';

describe('Tests for DocumentPagination component', () => {
  it('renders content', () => {
    const { container } = render(<DocumentPagination>Foo bar</DocumentPagination>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

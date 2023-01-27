import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Markdown } from './Markdown';

describe('Tests for Markdown component', () => {
  it('renders content', () => {
    const { container } = render(<Markdown>Foo bar</Markdown>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

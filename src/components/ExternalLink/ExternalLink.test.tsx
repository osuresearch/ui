import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { ExternalLink } from './ExternalLink';

describe('Tests for ExternalLink component', () => {
  it('renders content', () => {
    const { container } = render(<ExternalLink>Foo bar</ExternalLink>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

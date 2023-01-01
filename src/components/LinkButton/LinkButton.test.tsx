import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { LinkButton } from './LinkButton';

describe('Tests for LinkButton component', () => {
  it('renders content', () => {
    const { container } = render(<LinkButton>Foo bar</LinkButton>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

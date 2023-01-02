import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { RadioIcon } from './RadioIcon';

describe('Tests for RadioIcon component', () => {
  it('renders content', () => {
    const { container } = render(<RadioIcon>Foo bar</RadioIcon>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

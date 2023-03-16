import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { RadioButtonIcon } from './RadioButtonIcon';

describe('Tests for RadioButtonIcon component', () => {
  it('renders content', () => {
    const { container } = render(<RadioButtonIcon>Foo bar</RadioButtonIcon>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

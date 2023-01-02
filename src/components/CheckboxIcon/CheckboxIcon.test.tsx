import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { CheckboxIcon } from './CheckboxIcon';

describe('Tests for CheckboxIcon component', () => {
  it('renders content', () => {
    const { container } = render(<CheckboxIcon>Foo bar</CheckboxIcon>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

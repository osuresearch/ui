import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { SwitchField } from './SwitchField';

describe('Tests for SwitchField component', () => {
  it('renders content', () => {
    const { container } = render(<SwitchField>Foo bar</SwitchField>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

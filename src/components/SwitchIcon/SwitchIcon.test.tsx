import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { SwitchIcon } from './SwitchIcon';

describe('Tests for SwitchIcon component', () => {
  it('renders content', () => {
    const { container } = render(<SwitchIcon>Foo bar</SwitchIcon>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

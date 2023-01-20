import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { YesNoField } from './YesNoField';

describe('Tests for YesNoField component', () => {
  it('renders content', () => {
    const { container } = render(<YesNoField>Foo bar</YesNoField>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

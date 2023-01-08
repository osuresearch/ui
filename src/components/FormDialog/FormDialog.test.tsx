import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { FormDialog } from './FormDialog';

describe('Tests for FormDialog component', () => {
  it('renders content', () => {
    const { container } = render(<FormDialog>Foo bar</FormDialog>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

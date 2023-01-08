import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { ConfirmDialog } from './ConfirmDialog';

describe('Tests for ConfirmDialog component', () => {
  it('renders content', () => {
    const { container } = render(<ConfirmDialog>Foo bar</ConfirmDialog>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

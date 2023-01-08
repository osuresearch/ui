import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { InformationDialog } from './InformationDialog';

describe('Tests for InformationDialog component', () => {
  it('renders content', () => {
    const { container } = render(<InformationDialog>Foo bar</InformationDialog>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

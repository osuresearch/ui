import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { AutocompleteField } from './AutocompleteField';

describe('Tests for AutocompleteField component', () => {
  it('renders', () => {
    const { container } = render(<AutocompleteField />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Modal } from './Modal';

describe('Tests for Modal component', () => {
  it('renders content', () => {
    const { container } = render(<Modal>Foo bar</Modal>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

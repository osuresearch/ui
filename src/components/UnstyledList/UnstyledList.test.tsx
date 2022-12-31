import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { Item } from '../Item';
import { UnstyledList } from './UnstyledList';

describe('Tests for UnstyledList component', () => {
  it('renders content', () => {
    const { container } = render(
      <UnstyledList>
        <Item key="dx11">DirectX 11</Item>
        <Item key="dx12">DirectX 12</Item>
        <Item key="ogl">OpenGL</Item>
        <Item key="ogles">OpenGL ES</Item>
        <Item key="metal">Metal</Item>
        <Item key="vk">Vulkan</Item>
      </UnstyledList>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

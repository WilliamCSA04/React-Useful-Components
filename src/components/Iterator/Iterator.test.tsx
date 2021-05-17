// @ts-nocheck
import React from 'react';
import { render, screen } from '@testing-library/react';
import Iterator from './Iterator';

test('Iterator success case', () => {
  const list = ['text'];
  render(
    <Iterator
      list={list}
      onRender={(prop, index) => <p key={index}>{prop}</p>}
    />,
  );
  const element = screen.getByText(list[0]);
  expect(element).toBeInTheDocument();
});

test('Iterator should not render anything if list is empty', () => {
  const list = [];
  render(
    <Iterator
      list={list}
      onRender={(prop, index) => <p key={index}>{prop}</p>}
    />,
  );
  const element = screen.queryByRole('p');
  expect(element).not.toBeInTheDocument();
});

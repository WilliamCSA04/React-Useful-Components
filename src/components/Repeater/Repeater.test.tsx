// @ts-nocheck
import React from 'react';
import { render, screen } from '@testing-library/react';
import Repeater from './Repeater';

test('Repeater success case', () => {
  const dataTestId = 'repeating';
  render(
    <Repeater htmlTag="div" replicableProps={{ 'data-testid': dataTestId }} />,
  );
  const element = screen.queryAllByTestId(dataTestId);
  expect(element).toHaveLength(1);
});

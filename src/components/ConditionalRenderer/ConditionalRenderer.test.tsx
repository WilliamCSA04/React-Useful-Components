import React from 'react';
import { render, screen } from '@testing-library/react';
import ConditionalRenderer from './ConditionalRenderer';

test('ConditionalRenderer success case without optional parameter', () => {
  const text = 'La Li Lu Le Lo';
  render(<ConditionalRenderer condition onSuccess={() => <p>{text}</p>} />);
  const element = screen.getByText(text);
  expect(element).toBeInTheDocument();
});

test('ConditionalRenderer success case with optional parameter', () => {
  const textSuccess = 'Chrono';
  const textFailure = 'Trigger';
  render(
    <ConditionalRenderer
      condition
      onSuccess={() => <p>{textSuccess}</p>}
      onFailure={() => <p>{textFailure}</p>}
    />,
  );
  const elementOnSuccess = screen.getByText(textSuccess);
  const elementOnFailure = screen.queryByText(textFailure);
  expect(elementOnSuccess).toBeInTheDocument();
  expect(elementOnFailure).not.toBeInTheDocument();
});

test('ConditionalRenderer failure case', () => {
  const text = 'Ben';
  render(
    <ConditionalRenderer
      condition={false}
      onSuccess={() => <p>You've met with a terrible fate, haven't you?</p>}
      onFailure={() => <p>{text}</p>}
    />,
  );
  const element = screen.getByText(text);
  expect(element).toBeInTheDocument();
});

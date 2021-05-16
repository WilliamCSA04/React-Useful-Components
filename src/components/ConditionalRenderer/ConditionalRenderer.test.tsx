import React from "react";
import { render, screen } from "@testing-library/react";
import ConditionalRenderer from "./ConditionalRenderer";

test("ConditionalRenderer success case", () => {
  const text = "La Li Lu Le Lo";
  render(<ConditionalRenderer condition={true} onSuccess={() => <p>{text}</p>} />);
  const element = screen.getByText(text);
  expect(element).toBeInTheDocument();
});

test("ConditionalRenderer failure case", () => {
  const text = "Ben";
  render(<ConditionalRenderer condition={false} onSuccess={() => <p>You've met with a terrible fate, haven't you?</p>} onFailure={() => <p>{text}</p>} />);
  const element = screen.getByText(text);
  expect(element).toBeInTheDocument();
});

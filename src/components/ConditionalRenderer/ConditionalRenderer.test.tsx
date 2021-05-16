import React from "react";
import { render, screen } from "@testing-library/react";
import ConditionalRenderer from "./ConditionalRenderer";

test("ConditionalRenderer success case", () => {
  const text = "La Li Lu Le Lo";
  render(<ConditionalRenderer condition={true} onSuccess={() => <p>{text}</p>} />);
  const element = screen.getByText(text);
  expect(element).toBeInTheDocument();
});

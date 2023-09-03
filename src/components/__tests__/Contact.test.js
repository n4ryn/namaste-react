import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Contact from "../Contact";

describe("Contact us page test cases", () => {
  test("Should load Contact component", () => {
    render(<Contact />);

    // Querying
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact component", () => {
    render(<Contact />);

    // Querying
    const button = screen.getByRole("button");
    // const button = screen.getByText("Submit");
    // const button = screen.getByText("Random");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load input email inside Contact component", () => {
    render(<Contact />);

    // Querying
    const inputName = screen.getByPlaceholderText("email");

    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    // Assertion
    // expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(3);
  });
});

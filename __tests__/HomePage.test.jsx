import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "../pages";

describe("HomePage", () => {
  it("renders the homepage content", () => {
    expect(() => render(<HomePage />).not.toThrow());
  });
});

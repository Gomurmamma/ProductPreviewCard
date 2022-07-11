import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductPreviewCard from "../components/ProductPreviewCard";

describe("ProductPreviewCard", () => {
  it("renders without crashing", () => {
    expect(() => render(<ProductPreviewCard />)).not.toThrow();
  });

  it("renders product image - desktop", () => {
    render(<ProductPreviewCard />);
    expect(
      screen.getByAltText(
        "Photo of Gabrielle Essence Eau De Parfum for desktop"
      )
    ).toBeInTheDocument();
  });

  it("renders product image - mobile", () => {
    render(<ProductPreviewCard />);
    expect(
      screen.getByAltText("Photo of Gabrielle Essence Eau De Parfum for mobile")
    ).toBeInTheDocument();
  });

  it("renders product category", () => {
    render(<ProductPreviewCard />);
    expect(screen.getByText("PERFUME")).toBeInTheDocument();
  });

  it("renders product title", () => {
    render(<ProductPreviewCard />);
    expect(
      screen.getByText("Gabrielle Essence Eau De Parfum")
    ).toBeInTheDocument();
  });

  it("renders product sale price", () => {
    render(<ProductPreviewCard />);
    expect(screen.getByText("$149.99")).toBeInTheDocument();
  });

  it("renders product original price", () => {
    render(<ProductPreviewCard />);
    expect(screen.getByText("$169.99")).toBeInTheDocument();
  });

  it("renders shopping cart icon", () => {
    render(<ProductPreviewCard />);
    expect(screen.getByAltText("Icon of shopping cart")).toBeInTheDocument();
  });

  it("renders Add to Cart button", () => {
    render(<ProductPreviewCard />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});

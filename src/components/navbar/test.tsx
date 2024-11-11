import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from ".";

describe("component", () => {
  describe("Navbar", () => {
    it("should render correctly", () => {
      render(<Navbar />);

      expect(screen.getByText("David Murdoch")).toBeInTheDocument();
    });
  });
});

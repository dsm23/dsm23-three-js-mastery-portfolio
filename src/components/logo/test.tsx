import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Logo from ".";

describe("component", () => {
  describe("Logo", () => {
    it("should render correctly", () => {
      const { container } = render(<Logo />);

      expect(container).toBeInTheDocument();
    });
  });
});

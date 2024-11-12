import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import Experience from ".";

vi.stubGlobal(
  "IntersectionObserver",
  vi.fn(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    takeRecords: vi.fn(),
    unobserve: vi.fn(),
  })),
);

describe("component", () => {
  describe("Experience", () => {
    it("should render correctly", () => {
      const { container } = render(<Experience />);

      expect(container.querySelector("#experience")).toBeInTheDocument();
    });
  });
});

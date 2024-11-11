import { describe, expect, it, vi } from "vitest";
import Computer from ".";
import { render } from "../../../../../test-utils";

vi.stubGlobal("matchMedia", (query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(), // Deprecated
  removeListener: vi.fn(), // Deprecated
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));

class ResizeObserver {
  callback: globalThis.ResizeObserverCallback;
  constructor(callback: globalThis.ResizeObserverCallback) {
    this.callback = callback;
  }
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

vi.stubGlobal("ResizeObserver", ResizeObserver);

describe("component", () => {
  describe("canvas", () => {
    describe("Computer", () => {
      it("should render correctly", () => {
        const { container } = render(<Computer />);

        expect(container.firstChild).toBeTruthy();
      });
    });
  });
});

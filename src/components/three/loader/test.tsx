import { describe, expect, it } from "vitest";
import ReactThreeTestRenderer from "@react-three/test-renderer";
import Loader from ".";

describe("component", () => {
  describe("Loader", () => {
    it("should render correctly", async () => {
      const renderer = await ReactThreeTestRenderer.create(<Loader />);

      expect(renderer.toGraph()).toBeTruthy();
    });
  });
});

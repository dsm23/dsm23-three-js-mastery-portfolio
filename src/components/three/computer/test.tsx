import { describe, expect, it, vi } from "vitest";
import ReactThreeTestRenderer from "@react-three/test-renderer";
import { Object3D } from "three";
import Computer from ".";

vi.mock("@react-three/drei", async (importOriginal) => ({
  ...(await importOriginal()),
  useGLTF: () => ({
    scene: new Object3D(),
  }),
}));

describe("component", () => {
  describe("Computer", () => {
    it("should render correctly, is mobile", async () => {
      const renderer = await ReactThreeTestRenderer.create(
        <Computer isMobile />,
      );

      expect(renderer.toGraph()).toBeTruthy();
    });

    it("should render correctly, is not mobile", async () => {
      const renderer = await ReactThreeTestRenderer.create(
        <Computer isMobile={false} />,
      );

      expect(renderer.toGraph()).toBeTruthy();
    });
  });
});

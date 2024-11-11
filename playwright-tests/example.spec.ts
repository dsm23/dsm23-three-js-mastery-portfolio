import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Vite \+ React \+ TS/);
});

test("has heading", async ({ browserName, page }) => {
  // https://playwright.dev/docs/api/class-page#page-goto
  test.fixme(
    browserName === "firefox",
    "Errors are occurring in firefox in CI pipeline",
  );

  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "Vite Enterprise Boilerplate",
    }),
  ).toBeVisible();
});

test("should not have any automatically detectable accessibility issues", async ({
  browserName,
  page,
}) => {
  // https://playwright.dev/docs/api/class-page#page-goto
  test.fixme(
    browserName === "firefox",
    "Errors are occurring in firefox in CI pipeline",
  );
  await page.goto("/");

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});

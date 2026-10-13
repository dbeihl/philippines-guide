import { test, expect } from "@playwright/test";

test("Suzanne jumps to the mano po etiquette note", async ({ page }) => {
  await page.goto("/philippines-guide/");

  await page.getByRole("navigation", { name: "On this page" }).getByRole("link", { name: "Blessing elders (mano po)", exact: true }).click();

  await expect(page).toHaveURL(/#blessing-elders-mano-po$/);
  await expect(page.getByRole("heading", { name: "Blessing elders (mano po)", exact: true })).toBeInViewport();
});

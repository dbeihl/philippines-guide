import { test, expect } from "@playwright/test";

test("David jumps to the pre-trip checklist", async ({ page }) => {
  await page.goto("/philippines-guide/");

  await page.getByRole("navigation", { name: "On this page" }).getByRole("link", { name: "Before you leave home", exact: true }).click();

  await expect(page).toHaveURL(/#before-you-leave-home$/);
  await expect(page.getByRole("heading", { name: "Before you leave home", exact: true })).toBeInViewport();
});

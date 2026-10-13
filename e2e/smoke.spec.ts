import { test, expect } from "@playwright/test";

test("smoke: travel guide loads with no console errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(err.message));

  await page.goto("/philippines-guide/");
  await expect(page.getByRole("heading", { name: "Philippines Travel Guide" }).first()).toBeVisible();
  expect(errors).toEqual([]);
});

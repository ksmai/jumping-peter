import { expect, test } from "@playwright/test";
import { promises as fs } from "fs";

const animationNames = [
  "jumping",
  "extreme-speed",
  "spinning",
  "excited",
  "expanding",
  "tower",
  "repeated",
  "mirror",
  "panic",
  "rotating",
  "party",
  "parrot",
];

for (const animationName of animationNames) {
  test(animationName, testAnimationSnapshot(animationName));
}

function testAnimationSnapshot(
  animationName: string,
): Parameters<typeof test>[1] {
  return async ({ page }) => {
    await page.goto("/");
    const downloadPromise = page.waitForEvent("download");
    await page.getByRole("button", { name: animationName }).click();
    await page.getByRole("link", { name: "Download" }).click();
    const download = await downloadPromise;
    const path = await download.path();
    expect(path).toBeTruthy();
    const content = await fs.readFile(path || "");
    expect(content).toMatchSnapshot(`${animationName}.gif`);
  };
}

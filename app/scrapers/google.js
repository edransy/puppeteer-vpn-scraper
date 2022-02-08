const { createCursor, path } = require("ghost-cursor");
const { installMouseHelper } = require("../functions/installMouseHelper");
const { sleep } = require("../functions/sleep");
const {
  clickById,
  clickByText,
  clickCheckboxByTest,
} = require("../functions/clicking");

const google = async ({ page }, keyword) => {
  try {
    await sleep(3 * 10 ** 3);

    const inputHandle = await page.waitForXPath("//input[@name = 'q']");
    await inputHandle.click({ clickCount: 3 });
    await inputHandle.type(keyword, { delay: 20 });

    await page.keyboard.press("Enter");
    await sleep(3 * 10 ** 3);

    console.log("should click it now");
    await clickByText(page, "Accetto", 0);

    await page.screenshot({
      path: `screenshots/${keyword}-${parseInt(
        (Math.random() * 1000) % 1000,
        10
      )}.png`,
      fullPage: true,
    });
  } catch (error) {
    console.log({ error });
  } finally {
  }
};

module.exports = google;

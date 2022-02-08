const { createCursor, path } = require("ghost-cursor");
const { installMouseHelper } = require("../functions/installMouseHelper");
const { sleep } = require("../functions/sleep");

const youtubeScraper = async ({ browser }) => {
  try {
    const page = await browser.newPage();
    await installMouseHelper(page);
    await sleep(Math.random() * 3000);

    const url = "https://www.youtube.com/";
    console.log({ url });

    await page.goto(url);

    const selector = "[aria-label='Sign in']";
    console.log({ selector });

    const { _x: x, _y: y } = await page.mouse;

    // hack :(
    await sleep(7 * 10 ** 3);

    const cursor = createCursor(page);

    const loginElement = await page.$(selector);
    console.log({ loginElement });

    const loginPoint = await loginElement.clickablePoint();
    console.log({ loginPoint });

    const integerLoginPoint = {
      x: parseInt(loginPoint.x, 10),
      y: parseInt(loginPoint.y, 10),
    };
    console.log({ integerLoginPoint });

    const resultStart = await cursor.moveTo({ x: 5, y: 5 });
    console.log({ resultStart });

    const resultLoginElement = await cursor.click(loginElement);
    console.log({ resultLoginElement });

    await page.screenshot("/usr/output/yt-login-step-0.png");
  } catch (error) {
    console.log({ error });
  } finally {
    // await page.close({ runBeforeUnload: true });
  }
};

module.exports = youtubeScraper;

const puppeteer = require("puppeteer-extra");

// plugins
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const stealthPlugin = StealthPlugin();

// scrapers
const google = require("./scrapers/google");

// functions
const { installMouseHelper } = require("./functions/installMouseHelper");
const { sleep } = require("./functions/sleep");
const {
  clickById,
  clickByText,
  clickCheckboxByTest,
} = require("./functions/clicking");

puppeteer.use(stealthPlugin);

let keywords = [];
require("fs")
  .readFileSync("screenshots/keywords.txt", "utf-8")
  .split(/\r?\n/)
  .forEach((line) => keywords.push(line));

console.log({ keywords });

const main = async () => {
  try {
    //const browserURL = "http://localhost:21222";
    const browser = await puppeteer.launch({
      headless: false,
      ignoreHTTPSErrors: true,
      args: ["--no-sandbox"],
    });

    const page = await browser.newPage();

    const url = "https:/www.google.com/";
    console.log({ url });

    await page.goto(url);

    await sleep(5 * 10 ** 3);

    for (const keyword of keywords) {
      const start = Date.now();
      await google({ page }, keyword);
      const stop = Date.now();
      console.log(`Time Taken to execute = ${(stop - start) / 1000} seconds`);
    }

    console.log("Disconnecting...");

    await browser.close();

    console.log("Finished");
  } catch (error) {
    console.log({ error });
  }
};

console.log("Hello eMedia crew");
main();

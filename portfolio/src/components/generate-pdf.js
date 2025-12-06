import puppeteer from "puppeteer";
import path from "path";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const filePath = path.resolve("resume.html");

  await page.goto(`file://${filePath}`, {
    waitUntil: "networkidle0",
  });

  await page.pdf({
    path: "resume.pdf",
    format: "A4",
    printBackground: true
  });

  await browser.close();
})();

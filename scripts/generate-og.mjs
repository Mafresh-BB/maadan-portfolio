import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateOGImage() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set viewport to OG image size
  await page.setViewport({ width: 1200, height: 630 });

  // Load the OG template
  const templatePath = path.join(__dirname, 'og-template.html');
  await page.goto(`file://${templatePath}`);

  // Wait for fonts to load
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Take screenshot
  const outputPath = path.join(__dirname, '..', 'public', 'og', 'og-image.jpg');
  await page.screenshot({
    path: outputPath,
    type: 'jpeg',
    quality: 90,
    clip: { x: 0, y: 0, width: 1200, height: 630 }
  });

  await browser.close();
  console.log('OG image generated successfully!');
}

generateOGImage().catch(console.error);
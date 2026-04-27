import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import { posts } from './blog-data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateBlogOGImages() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set viewport to OG image size
  await page.setViewport({ width: 1200, height: 630 });

  for (const post of posts) {
    // Load the blog OG template
    const templatePath = path.join(__dirname, 'blog-og-template.html');
    await page.goto(`file://${templatePath}`);

    // Update the content
    await page.evaluate((post) => {
      const categoryEl = document.getElementById('category');
      const titleEl = document.getElementById('title');
      const subtitleEl = document.getElementById('subtitle');
      const dateEl = document.getElementById('date');
      const readTimeEl = document.getElementById('readTime');
      const urlEl = document.querySelector('.url');

      if (categoryEl) categoryEl.textContent = post.category;
      if (titleEl) titleEl.textContent = post.title;
      if (subtitleEl) subtitleEl.textContent = post.subtitle;
      if (dateEl) dateEl.textContent = post.date;
      if (readTimeEl) readTimeEl.textContent = post.readTime;
      if (urlEl) urlEl.textContent = `maadan.dev/blog/${post.slug}`;
    }, post);

    // Wait for fonts to load
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Take screenshot
    const outputPath = path.join(__dirname, '..', 'public', 'og', 'blog', `${post.slug}.jpg`);
    await page.screenshot({
      path: outputPath,
      type: 'jpeg',
      quality: 90,
      clip: { x: 0, y: 0, width: 1200, height: 630 }
    });

    console.log(`Generated OG image for ${post.slug}`);
  }

  await browser.close();
  console.log('All blog OG images generated successfully!');
}

generateBlogOGImages().catch(console.error);
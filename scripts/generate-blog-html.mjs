import fs from 'fs';
import path from 'path';

const posts = [
  {
    slug: 'hallucination-architecture',
    title: 'How I Stopped My CV Tool From Lying to Users',
    subtitle: "The hallucination problem in AI CV tools isn't a prompt problem. It's an architecture problem.",
    date: 'April 20, 2026',
    category: 'Engineering Deep Dive',
    ogImage: '/og/blog/hallucination-architecture.jpg',
  },
  {
    slug: 'motivation-is-a-bug',
    title: 'Motivation Is a Bug. Peer Pressure Is the Fix.',
    subtitle: "Why you don't build serious systems on top of something as unstable as 'feeling like it'.",
    date: 'April 27, 2026',
    category: 'Philosophy',
    ogImage: '/og/blog/motivation-is-a-bug.jpg',
  },
];

function pageHtml(post) {
  const url = `https://maadan.dev/blog/${post.slug}`;
  const image = `https://maadan.dev${post.ogImage}`;

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${post.title} | Abdulyekeen Maadan</title>
    <meta name="description" content="${post.subtitle}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${post.title} | Abdulyekeen Maadan" />
    <meta property="og:description" content="${post.subtitle}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Preview of ${post.title}" />
    <meta property="article:author" content="Abdulyekeen Maadan" />
    <meta property="article:published_time" content="${new Date(post.date).toISOString()}" />
    <meta property="article:section" content="${post.category}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${post.title} | Abdulyekeen Maadan" />
    <meta name="twitter:description" content="${post.subtitle}" />
    <meta name="twitter:image" content="${image}" />
    <meta name="twitter:image:alt" content="Preview of ${post.title}" />
  </head>
  <body>
    <noscript>
      <p>This page is a preview for social sharing. <a href="${url}">Open the article</a>.</p>
    </noscript>
    <script>
      window.location.replace('${url}');
    </script>
  </body>
</html>`;
}

const distDir = path.join(process.cwd(), 'dist');

if (!fs.existsSync(distDir)) {
  throw new Error('dist directory not found. Run the build first.');
}

for (const post of posts) {
  const postDir = path.join(distDir, 'blog', post.slug);
  fs.mkdirSync(postDir, { recursive: true });

  const filePath = path.join(postDir, 'index.html');
  fs.writeFileSync(filePath, pageHtml(post), 'utf8');

  const altFilePath = path.join(distDir, 'blog', `${post.slug}.html`);
  fs.writeFileSync(altFilePath, pageHtml(post), 'utf8');

  console.log(`Created static blog page: ${filePath}`);
}

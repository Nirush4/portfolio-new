import fs from 'fs';

const totalProjects = 21;
const projectIds = Array.from({ length: totalProjects }, (_, i) => i + 1);

const domain = 'https://www.nirushan.no';
const currentDate = new Date().toISOString().split('T')[0];

const projectUrls = projectIds
  .map(
    (id) => `
  <url>
    <loc>${domain}/projects/${id}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join('');

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${domain}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>${projectUrls}
</urlset>`;

fs.writeFileSync('./public/sitemap.xml', sitemapContent);
console.log(
  `✅ Sitemap successfully generated with ${totalProjects} project URLs!`
);

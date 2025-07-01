/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.swatrixsoft.com', // Ensure correct domain
  generateRobotsTxt: true, // Generates robots.txt
  generateIndexSitemap: false, // Prevents sitemap-0.xml creation
  sitemapBaseFileName: "sitemap", // Ensures sitemap.xml instead of sitemap-0.xml
  exclude: ['/admin/*', '/login'], // Exclude sensitive routes
};

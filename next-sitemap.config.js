/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.swatrixsoft.com', // no trailing slash
  generateRobotsTxt: true,                // generates robots.txt
  generateIndexSitemap: true,             // ensures sitemap.xml is created
  sitemapBaseFileName: 'sitemap',         // this will generate sitemap.xml (not sitemap-0.xml)
  exclude: ['/admin/*', '/login'],        // excluded routes
  additionalSitemaps: [],                 // keep empty or add custom ones later if needed
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    // Replace with your actual domain (no trailing slash)
    siteUrl: 'https://www.swatrixsoft.com',
    
    // Automatically generate a robots.txt file that references your sitemap
    generateRobotsTxt: true,
    
    // Optional: Exclude routes that you don’t want to appear in your sitemap
    exclude: ['/admin/*', '/login'],
    
    // Optional: If you have extra sitemaps, list them here.
    additionalSitemaps: [
      // 'https://yourdomain.com/some-other-sitemap-1.xml',
      // 'https://yourdomain.com/some-other-sitemap-2.xml',
    ],
  };
  
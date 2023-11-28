const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');

const hostname = 'https://js-ojha.github.io/test/'; // Replace with your domain

// Define your routes
export const routes = [
  { url: '/', changefreq: 'daily', priority: 0.7 },
  { url: '/about', changefreq: 'weekly', priority: 0.5 },
  { url: '/contact', changefreq: 'weekly', priority: 0.5 },
];

// Create a sitemap stream
const sitemap = new SitemapStream({ hostname });

// Add your routes to the sitemap
routes.forEach(route => {
  sitemap.write(route);
});

// End the stream
sitemap.end();

// Convert the stream to a promise
streamToPromise(sitemap).then(sm => {
  // Save the sitemap to a file
  fs.writeFileSync('./public/sitemap.xml', sm.toString());
});

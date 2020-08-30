// import { sitemapBuilder as buildSitemap } from 'react-router-sitemap';
// import Routes from './routes';
// import path from 'path';
// import fs from 'fs';

// const hostname = 'https://janetpeng.com';

// const dest = path.resolve('./public', 'sitemap.xml');

// const sitemap = buildSitemap(hostname, routes);

// fs.writeFileSync(dest, sitemap.toString())

require("babel-register")({
    presets: ["es2015", "react"]
  });
   
  const router = require("./routes.js").default;
  const Sitemap = require("react-router-sitemap").default;
  
  function generateSitemap() {
      return (
        new Sitemap(router)
            .build('https://janetpeng.com')
            .save("./public/sitemap.xml")
      );
  }
  
  generateSitemap();
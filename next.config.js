const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
   images: {
  
     unoptimized : true,
 loader: 'akamai',
 path: '/',
 distDir: 'build',
   },
};



const stylexPlugin = require('@stylexjs/nextjs-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = stylexPlugin({
  rootDir: __dirname,
})({});

module.exports = nextConfig;

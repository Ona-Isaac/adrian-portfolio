/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg/,
      use: {
        loader: 'svg-url-loader',
      },
    });
    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      use: {
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
          publicPath: '/_next/static',
          outputPath: 'static',
          emitFile: !options.isServer,
        },
      },
    });
    return config;
}}
module.exports = nextConfig

/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["config"] }] */
/* eslint @typescript-eslint/no-var-requires: 0 */

'strict';

const path = require('path');
const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    // npm packages polyfill setup
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();
      if (entries['main.js'] && !entries['main.js'].includes('@babel/polyfill')) {
        entries['main.js'].unshift('@babel/polyfill');
      }
      return entries;
    };

    // absolute path import setup
    config.resolve.modules.push(path.resolve('./src'));

    return config;
  },
});

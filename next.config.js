/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["config"] }] */
/* eslint @typescript-eslint/no-var-requires: 0 */

'strict';

const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    return config;
  },
});

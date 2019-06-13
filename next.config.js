/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["config"] }] */
/* eslint @typescript-eslint/no-var-requires: 0 */

'strict';

const path = require('path');
const fs = require('fs');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const withTypescript = require('@zeit/next-typescript');
const Dotenv = require('dotenv-webpack');

const { NODE_ENV } = process.env;
if (!NODE_ENV) {
  throw new Error('The NODE_ENV environment variable is required but was not specified.');
}

// resolve path util
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = withBundleAnalyzer(
  withTypescript({
    analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: '../bundles/server.html',
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: '../bundles/client.html',
      },
    },
    webpack: config => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: 'empty',
      };

      // dotenv setup
      const dotenvFile = `${resolveApp('.env')}.${NODE_ENV}`;

      config.plugins = config.plugins || [];
      config.plugins = [
        ...config.plugins,
        // Read the .env file
        new Dotenv({
          path: fs.existsSync(dotenvFile) ? dotenvFile : resolveApp('.env'),
          // for validate ".env.*" file through ".env.example"
          safe:
            fs.readdirSync(resolveApp('.')).filter(fn => fn.startsWith('.env') && !fn.endsWith('.example')).length !==
            0,
          systemvars: true,
        }),
      ];

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
  }),
);

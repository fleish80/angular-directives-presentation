import { createConfig } from '@nx/angular-rspack';

export default createConfig(
  {
    options: {
      root: __dirname,

      outputPath: {
        base: '../../dist/apps/main-app',
      },
      index: './src/index.html',
      browser: './src/main.ts',
      polyfills: ['zone.js'],
      tsConfig: './tsconfig.app.json',
      assets: [
        // {
        //   glob: '**/*',
        //   input: './public',
        //   output: './',
        // },
      ],
      styles: ['./src/styles.css'],
      scripts: [],
      devServer: {
        port: 4201,
        host: 'localhost',
      },
    },
  },
  {
    production: {
      options: {
        budgets: [
          {
            type: 'initial',
            maximumWarning: '500kb',
            maximumError: '1mb',
          },
          {
            type: 'anyComponentStyle',
            maximumWarning: '4kb',
            maximumError: '8kb',
          },
        ],
        outputHashing: 'all',
        devServer: {},
      },
    },

    development: {
      options: {
        optimization: false,
        vendorChunk: true,
        extractLicenses: false,
        sourceMap: {
          scripts: true,
          styles: true,
          hidden: false,
          vendor: true
        },
        namedChunks: true,
        devServer: {
          port: 4201,
          host: 'localhost',
        },
      },
    },
  }
);

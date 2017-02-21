const webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    browsers: [
      'PhantomJS',
      //'Chrome'
    ],
    frameworks: ['tap'],
    files: [
      { pattern: './src/entry1.js' },
      { pattern: './src/entry2.js' },
    ],
    plugins: [
      require('karma-sourcemap-loader'),
      require('karma-webpack'),
      require('karma-tap'),
      require('karma-phantomjs-launcher'),
      require('karma-chrome-launcher'),
    ],
    preprocessors: {
      './src/**/*.js': ['webpack', 'sourcemap'],
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
  })
};

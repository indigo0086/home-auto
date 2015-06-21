module.exports = function(config) {
  config.set({
    basepath: '.',
    frameworks: ['mocha', 'browserify'],
    browsers: ['Chrome', 'Firefox'],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'js/**/*.jsx'
    ],
    preprocessors: {
      'js/**/*.jsx': ['browserify']
    },
    browserify: {
      transform: ['reactify'],
      extensions: ['.jsx'],
      debug: true,
      bundleDelay: 1000
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS'],
    singleRun: false,
    plugins: [
      'karma-mocha',
      'karma-browserify',
      'karma-phantomjs-launcher'
    ]
  })
};

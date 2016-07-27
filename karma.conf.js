module.exports = function(config) {
  config.set({
    frameworks: ["browserify", "jasmine"],
    files: [
      "test/support/*.js",
      "test/**/*.spec.js"
    ],
    preprocessors: {
      "/**/*.js": ["browserify"],
      "test/**/*.spec.js": ["browserify"]
    },
    browsers: ["PhantomJS"],
    reporters: ["spec"],
    browserify: {
      transform: [
        ["babelify", {
          presets: ["es2015"],
          plugins: ["transform-runtime"]
        }],
        ["aliasify", { aliases: { "tributejs": "./node_modules/tributejs/dist/tribute.js"} }]
      ]
    }
  });
}

// Karma configuration
// Generated on Wed Aug 10 2016 18:47:49 GMT-0600 (Mountain Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'js/jquery.js',  
        'bower_components/angular/angular.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'js/angular-route.js',
        'node_modules/jasmine-core/lib/jasmine-core/jasmine.css',
        'node_modules/jasmine-core/lib/jasmine-core/jasmine.js',
        'node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js',
        'node_modules/karma-jasmine-html-reporter/src/lib/adapter.js',
        '/node_modules/karma-ng-html2js-preprocessor/lib/html2js.js',
        'js/app.js',
        'js/directives.js',
        'js/appSpec.js',
        'templates/*.html'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    'templates/*.html': 'ng-html2js'
    },
    ngHtml2JsPreprocessor: {
        // strip app from the file path
        stripPrefix: 'templates/',
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}

var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');

gulp.task('browserify', function () {
  var bundler = browserify({
    entries: ['./js/app.jsx'],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  });
  var watcher = watchify(bundler, {delay: 300});

  return watcher
    .on('update', function () { // When any files update
      console.log('Updating!');
      var updateStart = Date.now();

      watcher.bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist/'));

      console.log('Updated!', (Date.now() - updateStart) + 'ms');
    })
    .bundle() // Create the initial bundle when starting the task
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist/'));
});


gulp.task('default', ['browserify']);

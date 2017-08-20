var gulp = require('gulp');
var fs = require('fs');
var gutil = require('gulp-util');
var browserify = require('browserify'); // Pustaka untuk mengumpulkan dependensi ke 1 berkas
gulp.task('default', function(){ // Task default untuk gulp
  browserify('./src/index.js')
  .bundle()
  .pipe(fs.createWriteStream('./public/main.js')); // Arahkan ke public/main.js
});

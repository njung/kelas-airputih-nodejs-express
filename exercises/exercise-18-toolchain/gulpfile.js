var gulp = require('gulp');
var fs = require('fs');
var gutil = require('gulp-util');
var browserify = require('browserify');
gulp.task('default', function(){
  browserify('./src/index.js')
  .bundle()
  .pipe(fs.createWriteStream('./public/main.js'));
});

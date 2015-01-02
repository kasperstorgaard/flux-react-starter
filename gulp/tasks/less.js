var config          = require('../config.json').less;

var gulp            = require('gulp');
var less            = require('gulp-less');
var minifycss       = require('gulp-minify-css');
var rename          = require("gulp-rename");
var sourcemaps      = require('gulp-sourcemaps');
var reload          = require('browser-sync').reload;

var handleError     = require('../utils/handle-error');
var bundleName     = require('../utils/bundle-name');

var TASK_NAME = 'less';

gulp.task(TASK_NAME, function() {
  gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(less())
    .on('error', handleError)
    .pipe(minifycss())
    .pipe(rename(bundleName + '.min.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest))
    .pipe(reload({stream: true}));
});

function watcher () {
  gulp.watch(config.watch, [TASK_NAME]);
}

module.exports = { name: TASK_NAME, watcher: watcher};

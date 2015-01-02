var config          = require('../config.json').html;
var title          = require('../config.json').title;

var gulp            = require('gulp');
var reload          = require('browser-sync').reload;
var replace         = require('gulp-replace');
var bundleName      = require('../utils/bundle-name');

var TASK_NAME = 'html';

var replaceTargets = {
  title: '{title}',
  bundleName: '{bundleName}',
  mainId: '{mainContainer}',
  footerId: '{footerContainer}',
};

gulp.task(TASK_NAME, function() {
  gulp.src(config.src)
    .pipe(replace(replaceTargets.title, title))
    .pipe(replace(replaceTargets.bundleName, bundleName))
    .pipe(replace(replaceTargets.mainId, config.mainContainer))
    .pipe(replace(replaceTargets.footerId, config.footerContainer))
    .pipe(gulp.dest(config.dest))
    .pipe(reload({stream: true}));
});

function watcher () {
  gulp.watch(config.watch, [TASK_NAME]);
}

module.exports = {name: TASK_NAME, watcher: watcher};

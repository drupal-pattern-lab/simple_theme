'use strict';
const gulp = require('gulp');

// docs: https://github.com/theme-tools/theme-tools/tree/master/packages/plugin-sass
const cssTasks = require('@theme-tools/plugin-sass')({
  src: [
    'scss/**/*.scss',
    'pattern-lab/source/**/*.scss'
  ],
  dest: 'dist',
  lint: {
    enabled: false,
  },
});

// docs: https://github.com/theme-tools/theme-tools/tree/master/packages/plugin-browser-sync
const browserSyncTasks = require('@theme-tools/plugin-browser-sync')({
  startPath: 'pattern-lab/public',
});

// docs: https://github.com/theme-tools/theme-tools/tree/master/packages/plugin-pattern-lab-php
const patternLabTasks = require('@theme-tools/plugin-pattern-lab-php')({
  configFile: './pattern-lab/config/config.yml',
});

gulp.task('css', cssTasks.compile);
gulp.task('serve', browserSyncTasks.serve);
gulp.task('pl', patternLabTasks.compile);

gulp.task('clean', gulp.parallel([
  cssTasks.clean,
]));

gulp.task('compile', gulp.series([
  'clean',
  gulp.parallel([
    cssTasks.compile,
    patternLabTasks.compile,
  ]),
]));

gulp.task('default', gulp.series([
  'compile',
  gulp.parallel([
    cssTasks.watch,
    patternLabTasks.watch,
    browserSyncTasks.serve,
  ]),
]));

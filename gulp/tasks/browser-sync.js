var gulp        = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
  browserSync({
      proxy: 'local.futurlik.dev'
  });
});

gulp.task('browser-reload', function() {
  browserSync.reload;
});
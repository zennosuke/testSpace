import gulp from 'gulp';
import webpackConfig from './webpack.config.js';
import webpack from 'webpack-stream';
import browserSync from 'browser-sync';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';

gulp.task('build', function(done){
  gulp.src('src/js/app.js')
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist/js'));
    done();
});
gulp.task('browser-sync', function(done){
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });
  done();
});
gulp.task('bs-reload', function(done){
  browserSync.reload();
  done();
});

gulp.task('default', gulp.series('build', 'browser-sync'), function(done){
  gulp.watch('./src/*/*.js', gulp.task('build'));
  gulp.watch('./*.html', gulp.task('bs-reload'));
  gulp.watch('./dist/*/*.+(js|css)', gulp.task('bs-reload'));
  done();
});
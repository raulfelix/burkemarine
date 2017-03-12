var gulp = require('gulp');
var sass = require('gulp-sass');

var paths = {
  sass: './static/sass/**/*.scss',
  build: './assets'
};

gulp.task('sass', function () {
  return gulp.src('./static/sass/master.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.build));
});
 
gulp.task('watch', function () {
  gulp.watch(paths.sass, ['sass']);
});


gulp.task('build', ['sass', 'watch']);
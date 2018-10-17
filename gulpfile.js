var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat')
    notify = require('gulp-notify'),
    glob = require('gulp-sass-glob');

gulp.task('browser-sync', ['styles', 'scripts'], function(){
  browserSync({
    server: {
      baseDir: "./app"
    },
    notify: false
  });
});

gulp.task('styles', function(){
  return gulp.src('sass/**/*.sass')
  .pipe(glob())
  .pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
  .pipe(autoprefixer({browsers: ['last 2 version'],cascade: false}))
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', function(){
  return gulp.src([
    './app/libs/*.js',
    './app/libs/jquery/dist/jquery.min.js',
    './app/libs/waypoints/waypoints.min.js',
    './app/libs/animate/animate-css.js',
    './app/libs/OwlCarousel2/dist/owl.carousel.js',
    './app/libs/animateNumber/jquery.animateNumber.min.js'
  ])
  .pipe(concat('libs.js'))
  .pipe(gulp.dest('./app/js'))
});

gulp.task('watch',['styles', 'scripts', 'browser-sync'], function(){
  gulp.watch('sass/**/*.sass', ['styles']).on("change", browserSync.reload);
  gulp.watch(['app/libs/**/*.js','app/js/common.js'], ['scripts']);
  gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('default', ['watch']);

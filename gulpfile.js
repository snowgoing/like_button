var gulp = require('gulp');
var webpack = require('webpack-stream');
var serve = require('gulp-serve');

// Webpack
gulp.task('webpack', function() {
 return gulp.src('./src/main.js')
   .pipe(webpack(require('./webpack.config.js')))
   .pipe(gulp.dest('./dist'));
});

// Move html
gulp.task('mvhtml', function() {
 return gulp.src('./src/assets/html/index.html')
 .pipe(gulp.dest('./dist'));
});

// Web Server
gulp.task('serve:web', serve({
 root: ['./dist'],
 port: 8000
}));

// Watch
gulp.task('watch', function() {
   gulp.watch('./src/**/*', ['webpack'])
});

gulp.task('default', ['serve:web', 'webpack', 'mvhtml', 'watch']);
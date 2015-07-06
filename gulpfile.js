var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var path = require('path');
var minifyCSS = require('gulp-minify-css');

gulp.task('build', function () {
    return browserify({
        entries: 'index.js',
        extensions: ['.js'],
        debug: true
    })
        .transform(babelify, {
            stage: 0
        })
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('compress', ['build'], function() {
    return gulp.src('dist/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('assets', function () {
    gulp.src(['./assets/scripts/*.js']).pipe(gulp.dest('dist/scripts'));
    gulp.src(['./assets/fonts/**/*']).pipe(gulp.dest('dist/font'));
    gulp.src(['./assets/styles/**/*.css']).pipe(gulp.dest('dist/styles'));
    gulp.src(['./assets/images/**/*']).pipe(gulp.dest('dist/images'));
});

gulp.task('less', function () {
    return gulp.src('./assets/styles/custom.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/styles'));
});

gulp.task('default', ['build', 'compress', 'less', 'assets']);
gulp.task('dev', ['build', 'less', 'assets']);
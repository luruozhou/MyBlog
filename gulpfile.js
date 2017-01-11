var gulp = require("gulp");
var babel = require("gulp-babel");
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var browserify = require('browserify');
var babelify = require("babelify");
var source = require("vinyl-source-stream");
var path = require("path");
var glob = require('glob');
var buffer = require('vinyl-buffer');
var md5 = require('gulp-md5-plus');
var rev = require('gulp-rev'); //- 对文件名加MD5后缀
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var exec = require('child_process').exec;


gulp.task("compile-server", function() {
    return gulp.src("server/**/*.js")
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest("dest/server"));
});

gulp.task("compile-routes", function() {
    return gulp.src("routes/**/*.js")
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest("dest/routes"));
});

gulp.task('build',  function() {

    gulp.start('compile-server');
    gulp.start('compile-routes');
    gulp.watch('server/**/*.js', ['compile-server']);
    gulp.watch('routes/**/*.js', ['compile-routes']);
});

gulp.task("prod-server", function() {
    return gulp.src("server/**/*.js")
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest("dest-tmp/server"));
});

gulp.task("prod-routes", function() {
    return gulp.src("routes/**/*.js")
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest("dest-tmp/routes"));
});

gulp.task('prod',function() {
    gulp.start('prod-server');
    gulp.start('prod-routes');
});
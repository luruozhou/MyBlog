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

// gulp.task("libs", function () {
//     return gulp.src("views/static/libs/js/**/*")
//         .pipe(gulp.dest("dest/views/static/libs/js"));
// });

gulp.task("compile-routes", function() {
    return gulp.src("routes/**/*.js")
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest("dest/routes"));
});


gulp.task("webpack", function(callback) {
    var myConfig = Object.create(webpackConfig);
    // run webpack
    webpack(
        // configuration
        webpackConfig,
        function(err, stats) {
            // if(err) throw new gutil.PluginError("webpack", err);
            // gutil.log("[webpack]", stats.toString({
            //	 // output options
            // }));
            callback();
        });
});


gulp.task("clean", function() {
    // exec('rm -rf dest');
});

gulp.task("fis", function() {
    exec('fis3 release -r ./views -d ./dest/views -wL');
});


gulp.task('build', ["clean"], function(callback) {

    gulp.start('compile-server');
    gulp.start('compile-routes');
    // gulp.start('fis');
    // gulp.start('webpack');
    // gulp.start('libs');
    // gulp.watch('views/**/*', ['webpack']);
    // gulp.watch('views/static/libs/js/**/*', ['libs']);
    gulp.watch('server/**/*.js', ['compile-server']);
    gulp.watch('routes/**/*.js', ['compile-routes']);
});
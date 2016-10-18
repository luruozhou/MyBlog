var gulp = require("gulp");
var babel = require("gulp-babel");
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var browserify = require('browserify');
var babelify = require("babelify");
var source = require("vinyl-source-stream");
var path = require("path");
var glob = require('glob');
var es = require('event-stream');
// var autoRestart = require('gulp-auto-restart');
//
// autoRestart({'task': 'watch'});

gulp.task("compile-template", function () {
    return gulp.src("views/**/*.!(js|less)")// ES6 源码存放的路径
        .pipe(plumber())
        .pipe(gulp.dest("dest/views")); //转换成 ES5 存放的路径
});

gulp.task("compile-static-js", function () {
    glob('./views/**/*.js', function(err, files) {
        if(err) console.log(err);

        var tasks = files.map(function(entry) {
            console.log(entry)
            return browserify({ entries: [entry],debug: true})
                .transform(babelify)
                .bundle()
                .pipe(source(entry))
                .pipe(gulp.dest('./dest'));
        });
        es.merge(tasks).on('end', console.log);
    })
});

gulp.task("compile-static-less", function () {
    return gulp.src("views/**/*.less")// ES6 源码存放的路径
        .pipe(plumber())
        .pipe(less())
        .pipe(minifyCss())
        .pipe(gulp.dest("dest/views")); //转换成 ES5 存放的路径
});

gulp.task("compile-server", function () {
    return gulp.src("server/**/*.js")// ES6 源码存放的路径
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest("dest/server")); //转换成 ES5 存放的路径
});

gulp.task("compile-routes", function () {
    return gulp.src("routes/**/*.js")// ES6 源码存放的路径
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest("dest/routes")); //转换成 ES5 存放的路径
});

gulp.task('build', function (callback) {

    gulp.start('compile-template');
    gulp.start('compile-server');
    gulp.start('compile-routes');
    gulp.start('compile-static-js');
    gulp.start('compile-static-less');
    gulp.watch('views/**/*.!(js|less)', ['compile-template']);
    gulp.watch('views/**/*.js', ['compile-static-js']);
    gulp.watch('views/**/*.less', ['compile-static-less']);
    gulp.watch('server/**/*.js', ['compile-server']);
    gulp.watch('routes/**/*.js', ['compile-routes']);

});
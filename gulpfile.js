var gulp = require("gulp");
var babel = require("gulp-babel");
var plumber = require('gulp-plumber');
// var autoRestart = require('gulp-auto-restart');
//
// autoRestart({'task': 'watch'});

gulp.task("compile-template", function () {
    return gulp.src("views/**/*")// ES6 源码存放的路径
        .pipe(plumber())
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
    gulp.watch('server/**/*.js', ['compile-server']);
    gulp.watch('routes/**/*.js', ['compile-routes']);
    gulp.watch('views/**/*', ['compile-template']);
});
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
var buffer = require('vinyl-buffer');
var md5 = require('gulp-md5-plus');
// var rev = require('gulp-rev-append');
var rev = require('gulp-rev');//- 对文件名加MD5后缀
var revCollector = require('gulp-rev-collector');//- 路径替换
var exec = require('child_process').exec;
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

var gulp = require('gulp');
var assetRev = require('gulp-asset-rev');


gulp.task("compile-server", function () {
    return gulp.src("server/**/*.js")
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest("dest/server"));
});

gulp.task("compile-routes", function () {
    return gulp.src("routes/**/*.js")
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest("dest/routes"));
});


// gulp.task("compile-template", function () {
//     return gulp.src("views/**/*.!(js|less)")
//         .pipe(plumber())
//         .pipe(gulp.dest("dest/views"));
// });

gulp.task("webpack", function (callback) {
    var myConfig = Object.create(webpackConfig);
    // run webpack
    webpack(
        // configuration
        webpackConfig
        , function (err, stats) {
            // if(err) throw new gutil.PluginError("webpack", err);
            // gutil.log("[webpack]", stats.toString({
            //	 // output options
            // }));
            callback();
        });
});


// gulp.task("compile-static-js", function () {
//     glob('./views/**/*.js', function (err, files) {
//         if (err) console.log(err);
//
//         var tasks = files.map(function (entry) {
//
//             return browserify({entries: [entry], debug: true})
//                 .transform(babelify)
//                 .bundle()
//                 .pipe(source(entry))
//                 .pipe(buffer())
//                 .pipe(md5(10, './dest/views/**/*.tpl'))
//                 // .pipe(rev())
//                 .pipe(gulp.dest('./dest'))
//             // .pipe(rev.manifest({merge:true}))                            //- 生成一个rev-manifest.json
//             // .pipe(gulp.dest('./dest/rev/js'));
//         });
//         es.merge(tasks).on('end', function () {
//         });
//     })
// });
//
// gulp.task("compile-static-less", function () {
//     return gulp.src("views/**/*.less")
//         .pipe(plumber())
//         .pipe(less())
//         .pipe(minifyCss())
//         // .pipe(rev())
//         .pipe(md5(10, './dest/views/**/*.tpl'))
//         .pipe(gulp.dest("dest/views"))
//         // .pipe(rev.manifest())                                   //- 生成一个rev-manifest.json
//         // .pipe(gulp.dest('./dest/rev/css'));
// });
//
// gulp.task('rev', ['compile-template', 'compile-static-less', 'compile-static-js'], function () {
//     gulp.src(['./dest/rev/**/*.json', './dest/views/**/*.tpl'])   //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件
//         .pipe(assetRev())
//         .pipe(revCollector({
//             replaceReved:true
//         }))                                   //- 执行文件内css名的替换
//         .pipe(gulp.dest('./dest/views'));                     //- 替换后的文件输出的目录
// });


gulp.task('build', function (callback) {
//删除dist文件夹
//     exec('rm -rf dest',function(err,out) {
//
//     });
    // gulp.start('compile-template');
    gulp.start('compile-server');
    gulp.start('compile-routes');
    gulp.start('webpack');
    // gulp.start('compile-static-js');
    // gulp.start('compile-static-less');
    // gulp.start('rev');

    // gulp.watch('views/**/*.!(js|less)', ['compile-template']);
    gulp.watch('views/**/*', ['webpack']);
    gulp.watch('server/**/*.js', ['compile-server']);
    gulp.watch('routes/**/*.js', ['compile-routes']);


});
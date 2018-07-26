var gulp = require("gulp");
// Include Our Plugins
var webServer = require("gulp-webserver");
// var ts = require("gulp-typescript");
// var tsProject = ts.createProject("tsconfig.json")
var del = require("del");
// var concat = require("gulp-concat");
// var uglify = require("gulp-uglify");
// var minify = require("gulp-minify");

// // Launch webserver and LiveReload
gulp.task("open", function () {
    gulp.src(__dirname)
        .pipe(webServer({
            port: "9001",
            livereload: true,
            directoryListing: false,
            open: true,
            fallback: "index.html"
        }));
});
// gulp.task("build", ["clean-dist"], function () {
//     return gulp.src(["source/*.ts", "source/**/*.ts", "source/**/**/*.ts"])
//         .pipe(concat("bundle.ts"))
//         .pipe(tsProject())
//         .js.pipe(uglify())
//         // .pipe(minify())
//         .pipe(gulp.dest("dist"));
// });


gulp.task("clean-dist", function () {
    return del("dist");
});



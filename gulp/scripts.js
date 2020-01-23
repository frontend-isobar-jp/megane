const gulp = require("gulp");
const browserify = require("browserify");
const babelify = require("babelify");
const buffer = require("vinyl-buffer");
const source = require("vinyl-source-stream");
const gulpIf = require("gulp-if");
const gulpLoadPlugins = require("gulp-load-plugins");
const uglify = require("gulp-uglify-es").default;

const $ = gulpLoadPlugins();

module.exports = (setting,buildType) => {

    setting.js.forEach((e) => {

        // コンパイル対象ファイルのディレクトリ名
        let srcDir = e.src;

        // コンパイル先ディレクトリ
        let distDir = e.dist;

        // コンパイル対象のファイル名
        let sources = e.fileName;

        sources.forEach((entryPoint) => {
            browserify({
                // コンパイル対象となるファイル
                entries: [srcDir + entryPoint],
                transform: [["babelify", { "presets": ["env"] }]],
                debug: true,
                cache: {},
                packageCache: {}
            })
            .bundle()
            .on('error', (err) => {
                console.log(err.message);
            })
            .pipe($.plumber())
            .pipe(source(entryPoint))
            .pipe(buffer())
            .pipe($.sourcemaps.init({loadMaps: true}))
            .pipe(uglify())
            .pipe( gulpIf( !buildType, $.sourcemaps.write()) )
            .pipe(gulp.dest(distDir));
        });

    });

};

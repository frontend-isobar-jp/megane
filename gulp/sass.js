const gulp = require("gulp");
const gulpLoadPlugins = require("gulp-load-plugins");
const gulpIf = require("gulp-if");
const $ = gulpLoadPlugins();

module.exports = (setting,buildType) => {

    setting.sass[0].path.forEach( (e,i,entryPoint) => {

        // console.log(setting.sass[0].browser);//browser
        // console.log(setting.sass[0].outputStyle);//outputStyle

        // console.log(setting.sass[0].path[i].src);//sass
        // console.log(setting.sass[0].path[i].dist);//css

        gulp.src( setting.sass[0].path[i].src + '*.scss' )

        .pipe($.plumber())

        .pipe( gulpIf( !buildType, $.sourcemaps.init()) )

        .pipe($.sass({
            outputStyle: setting.sass[0].outputStyle,
            includePaths: ['.'],
        }).on('error', $.sass.logError))

        .pipe($.autoprefixer({
            cascade: false,
            grid: false
        }))

        .pipe( gulpIf( !buildType, $.sourcemaps.write()) )

        .pipe(gulp.dest( setting.sass[0].path[i].dist ));

    });

};

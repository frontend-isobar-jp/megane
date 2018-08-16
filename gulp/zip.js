const gulp = require("gulp");
const zip = require("gulp-zip");

module.exports = (setting) => {

    setting.zip.forEach( function(e,i,entryPoint) {

        // console.log(setting.zip[i].fileName);
        // console.log(setting.zip[i].version);
        // console.log(setting.zip[i].from);
        // console.log(setting.zip[i].to);

        return gulp.src(
            setting.zip[i].from,
            { base: "./" }
        )
        .pipe(zip( setting.zip[i].fileName + setting.zip[i].version + '.zip' ))
        .pipe(gulp.dest( setting.zip[i].to + '/' ));


    });

};

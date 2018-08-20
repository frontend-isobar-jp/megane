const gulp = require("gulp");
const changed = require("gulp-changed");
const ignore = require("gulp-ignore");

module.exports = (setting) => {

    setting.copyFile.forEach( (e,i,entryPoint) => {

        gulp.src(
            setting.copyFile[i].from
            // { base: root + 'common/' }
        )

        //差分ファイルのみ
        .pipe( changed( setting.copyFile[i].to ) )
        .pipe( ignore.include({isFile: true}) ) // ファイルのみを選択

        // Copy
        .pipe( gulp.dest( setting.copyFile[i].to ) ); // output

    });

};

'use strict';

/**
**
** Setting
**
**/

const ROOT_PATH = './public/';
const package_json = require("./package");

const SETTING = {

    'rootPath': ROOT_PATH,

    'bs': [
        {
            'port': 9000, // browser-sync port
            'target': [ // browser-sync watch file
                '**/*.html',
                '**/assets/css/*.css',
                '**/assets/js/*.js'
            ],
        }
    ],

    'sass': [
        {
            'outputStyle': 'compressed',// compile style
            'path': [
                {
                    'src': './src/scss/**/', // sass path
                    'dist': ROOT_PATH + 'assets/css/' // css path
                }
                // 対象ディレクトリを増やす場合は、オブジェクトを追加する
            ]
        }
    ],

    'js': [
        {
            'src': './src/js/',
            'dist': ROOT_PATH + 'assets/js/',
            'fileName': [ // main file
                'main.js'
            ]
        }
    ],

    'zip': [
        {
          'fileName' :"megane_download",// Name of output file
          'version' :  "", // version of output file
          'from' : [
              './public/**/*',
              './src/**/*'
          ],
          'to' : './' //output directry
        }
    ]


}


/**
**
** Module Import
**
**/

const gulp = require("gulp");

const Sass = require("./gulp/sass");
const Scripts = require("./gulp/scripts");
const BrowserSync = require("./gulp/browser-sync");
const Zip = require("./gulp/zip");


/**
**
** Task
**
**/

gulp.task('sass', (done) => {
    Sass(SETTING);
    done();
});

gulp.task('scripts', (done) => {
    Scripts(SETTING);
    done();
});

gulp.task('serve', (done) => {
    BrowserSync(SETTING);
    done();
});

gulp.task('zip', (done) => {
    Zip(SETTING);
    done();
});

gulp.task('build', (done) => {

    Sass(SETTING,"prod");
    Scripts(SETTING,"prod");
    done();

});

gulp.task('watch', () => {

    SETTING.sass[0].path.forEach( function(e,i) {

        gulp.watch(SETTING.sass[0].path[i].src + '*.scss', gulp.task("sass"));

    });

    SETTING.js.forEach( function(e,i) {

        gulp.watch(SETTING.js[i].src + '**/*.js', gulp.task("scripts"));

    });

});


/**
**
** Default Task
**
** コマンド'gulp'で実行される
**
**/

gulp.task(
    "default",
    gulp.series(gulp.parallel(
        'watch',
        'serve' // browser-sync
    ))
);

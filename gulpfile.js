'use strict';

/**
**
** Setting
**
**/

const ROOT_PATH = './public/';

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
            'browser': ['last 2 versions'], // autoprefix version
            'outputStyle': 'compressed',// compile style
            'path': [
                {
                    'src': './src/scss/**/', // sass path
                    'dist': ROOT_PATH + 'assets/css/' // css path
                }
                // 対象ディレクトリを増やす場合は、オブジェクトを追加する
            ]
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
const BrowserSync = require("./gulp/browser-sync");



/**
**
** Task
**
**/

gulp.task('sass', () => {
    Sass(SETTING);
});

gulp.task('serve', () => {
    BrowserSync(SETTING);
});

gulp.task('build', () => {

    Sass(SETTING,"prod");

});

gulp.task('watch', () => {

    SETTING.sass[0].path.forEach( function(e,i,entryPoint) {

        gulp.watch(SETTING.sass[0].path[i].src + '*.scss', ['sass']);

    });

});


/**
**
** Default Task
**
** コマンド'gulp'で実行される
**
**/

const taskList = [

    'watch',
    'serve' // browser-sync

]
gulp.task('default', taskList);

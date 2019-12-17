const gulp = require("gulp");
const browserSync = require("browser-sync");

module.exports = (setting) => {

    setting.bs.forEach( (e,i,entryPoint) => {

	    // console.log(setting.bs[i].port);//port
	    // console.log(setting.bs[i].target);//target

	    browserSync({
	        open: false,
	        notify: false,
	        port: setting.bs[i].port,
            // proxy: "localhost:8888",  //使用する際は 下記 "server" をコメントアウトする
	        server: {
	            baseDir: setting.rootPath
	        }
	    });

	    gulp.watch(setting.bs[i].target).on('change', browserSync.reload);

    });

};

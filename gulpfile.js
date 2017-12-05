var gulp = require('gulp');
var PWD = process.env.PWD || process.cwd();
var path = require('path'), fse = require('fs-extra');
var PWD = process.env.PWD || process.cwd(); // compitable with windows
var watch = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('init',function()
{
    var dirs = ['app','app/css','app/img','app/js'];

    dirs.forEach(function(item, index)
    {
        fse.mkdirSync(path.join(PWD + '/' + item));
    });

    var template = '<!DOCTYPE HTML> <html> <head> <title> </title> </head> <body> </body> </html>';

	fse.writeFileSync(path.join(PWD + '/app/index.html'),template);
	fse.writeFileSync(path.join(PWD + '/app/js/test.js'),' ');
});

var bs = require('browser-sync').create();

gulp.task('browser-sync',function(){
    bs.init({
        server:"./app"
    });
});

gulp.task('watch',['watch_js','browser-sync'],function(){
	var watcher = gulp.watch('app/**/*.html');
	watcher.on('change',function(event)
	{
        console.log('File ' + event.path + ' was ' + event.type +' running task..');
		bs.reload();
	});
});

gulp.task('watch_js',['browser-sync'],function(){
	var watcher = gulp.watch('app/**/*.js');
	watcher.on('change',function(event)
	{
        console.log('File ' + event.path + ' was ' + event.type +' running task..');
		bs.reload();
	});
});


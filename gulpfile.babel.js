var gulp = require('gulp'),
	phplint = require('gulp-phplint'),
	livereload = require('gulp-livereload');
var config = require('./config.js');




var tools = {};
tools.endWith = function(str, endStr){
	var d= str.length - endStr.length;
	return (d >= 0 && str.lastIndexOf(endStr) == d )
}
tools.gset = function(obj, key, before_get, before_set){
	Object.defineProperty(obj, key, {
		enumerable: true,
		configurable: true,
		get: function(){
			before_get(obj[key])
			return obj[key];
		},
		set: function($newval){
			before_set($newval);
			obj[key] = $newval
		}
	})
}

tools.getPhplint = function(filePath){
	if(tools.endWith(filePath, '.php')){
		return filePath;
	}else{
		return false;
	}
}

gulp.task('watch', function () {
	// 这里的watch，是自定义的，写成live或者别的也行 
	livereload.listen();
	gulp.watch(config.watch.default, function (file) {
		livereload.changed(file.path);
		if(tools.getPhplint(file.path))gulp.run('phplint');
	});
});

// gulp.task('phplint', function() {
//         console.log(common.phplint)
//         return gulp.src(common.phplint)
//           .pipe(phplint());
// });



gulp.task('phplint', function () {
	return gulp.src(common.phplint)
		.pipe(phplint('',{}))
		.pipe(phplint.reporter(function(file){
			var report = file.phplintReport || {};
			if (report.error) {
				console.error(report.message+' on line '+report.line+' of '+report.filename);
			}
		}));
});
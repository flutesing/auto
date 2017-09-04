/**
 * Created by chaowang on 2017/8/2.
 */

gulp.task('watch', function () {
	livereload.listen();
	gulp.watch(config.watch.default, function (file) {
		livereload.changed(file.path);
		if(tools.getPhplint(file.path)) gulp.start('phplint');
	});
});

gulp.task('phplint', function() {
        console.log(common.phplint)
        return gulp.src(common.phplint)
          .pipe(phplint());
});

// gulp.task('phplint', function () {
// 	return gulp.src(common.phplint)
// 		.pipe(phplint('', config.phplint))
// 		.pipe(phplint.reporter(function(file){
// 			console.log(file);
// 			var report = file.phplintReport || {};
// 			if (report.error) {
// 				console.error(report.message+' on line '+report.line+' of '+report.filename);
// 			}
// 		}));
// });
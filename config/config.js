/**
 * Created by chaowang on 2017/8/2.
 */

const config = {
	require : {
		gulp : 'gulp',
		phplint: 'gulp-phplint',
		livereload:'gulp-livereload',
		_ : 'lodash'
	},
	phplint: {
		debug: true,  			//fasle
		clear: true, 			//false
		dryRun: false, 			//false
		notify: true, 			//true
		statusLine: true, 		//true
		skipPassedFiles: false 	//false
	},
	watch: {
		default: ['../**/*.*', '!../**/data/**/*.*']
	}
}
module.exports = config;
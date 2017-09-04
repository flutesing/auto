/**
 * Created by chaowang on 2017/8/2.
 */
const config = {
	phplint : {
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
export default config;
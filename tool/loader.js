/**
 * Created by chaowang on 2017/8/2.
 */
const loader = {

}

/**
 * 引入某一目录下所有非es6的js
 * @param filePath
 */
loader.load = function(filePath, config = 'Dir') {   //config: Dir(来自目录循环global引入), Config(来自config需要global引入), TaskDir(来自dir是task), TaskConfig
	if (!global.fs) {
		global.fs = require('fs');
		global.path = require('path');
	}
	$run = 'loadFrom' + config;
	loader[$run](filePath);
}

loader.loadFromDir = function(filePath, task = false){
	$filepath = global.base_path + path.sep + filePath;
	let files = fs.readdirSync($filepath);
	files.forEach(function(f){
		if(f.indexOf('babel')> 0 || f === 'loader.js') return;
		let fname = path.basename(f, '.js');
		if(task) require(path.join($filepath, f));
		global[fname] = require(path.join($filepath, f));
	})
}

loader.loadFromConfig = function (filePath, task = false) {
	var i = 0 ;
	for(i in filePath){
		if(task) {require(filePath[i]); break;}
		global[i] = require(filePath[i]);
	}
}

loader.loadFromTaskDir = loader.loadFromDir.bind(this);
loader.loadFromTaskConfig = loader.loadFromConfig.bind(this);

/**
 * require需要引入的模块
 * @param requires
 */
loader.require = function (requires) {
	var i ;
	for(i in requires){
		global[i] = require(requires[i]);
	}
}

module.exports = loader;
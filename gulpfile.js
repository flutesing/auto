global.base_path = __dirname;

loader = require('./tool/loader.js');
loader.load('config');
loader.load('tool');
loader.require(config.require);
loader.load('task', 'TaskDir');






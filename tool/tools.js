/**
 * Created by chaowang on 2017/8/2.
 */
var tools = {};
tools.endWith = function(str, endStr){
	var d= str.length - endStr.length;
	return (d >= 0 && str.lastIndexOf(endStr) == d )
}

tools.getPhplint = function(filePath){
	if(tools.endWith(filePath, '.php')){
		common.phplint = filePath;
		return true;
	}else{
		return false;
	}
}

module.exports = tools;
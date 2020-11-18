var Util = {};
//获取当前时间
Util.getTimeToday = function() {
	const d = new Date();
	const Y = d.getFullYear();
	const M = d.getMonth()+1<10 ? '0'+d.getMonth() : d.getMonth();
	const D = d.getDate()<10 ? '0'+d.getDate() : d.getDate();
	const h = d.getHours();
	const m = d.getMinutes();
	const s = d.getSeconds();
	return `${Y}-${M}-${D} ${h}:${m}:${s}`;
}

Util.getRamNumber = function() {
	var result = '';
	for (var i = 0; i < 16; i++) {
		result += Math.floor(Math.random() * 16).toString(16); //获取0-15并通过toString转16进制
	}
	//默认字母小写，手动转大写
	return result.toUpperCase(); //另toLowerCase()转小写

}

module.exports = Util;
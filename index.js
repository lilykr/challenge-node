var cowsay = require("cowsay");
const infos = require('./information.js');


console.log(cowsay.say({
	text : infos.name + ' ' + infos.campus,
	e : "oO",
	T : "U "
}));


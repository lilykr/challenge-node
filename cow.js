var cowsay = require("cowsay");
const infos = require('./information.js');

console.log(cowsay.say({
    text : ` I'm ${name} and I am from ${campus}`,
}));

// or cowsay.think()
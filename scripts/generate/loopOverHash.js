var functions = require("../functions.js");
var argv = require('minimist')(process.argv.slice(2));

string = argv.string;
instancesString = argv.instances;

instancesInteger = parseInt(instancesString); // 8.7 seconds per million

startTime = Math.floor(Date.now() / 1000) * 1000;

scrambledString = functions.sha256Scramble(string,instancesInteger);
console.log(scrambledString);

endTime = Math.floor(Date.now() / 1000) * 1000;
duration = (endTime - startTime) / 1000;

console.log(duration);

var functions = require("../functions.js");

string = 'brandon'
instances = 10000000 // 8.7 seconds per million

startTime = Math.floor(Date.now() / 1000) * 1000;

scrambledString = functions.sha256Scramble(string,instances);
console.log(scrambledString);

endTime = Math.floor(Date.now() / 1000) * 1000;

duration = (endTime - startTime) / 1000;

console.log(duration);

var CryptoJS = require("crypto-js");
var argv = require('minimist')(process.argv.slice(2));

msg = argv.msg;
sharedKey = argv.sharedKey;

var ciphertext = CryptoJS.AES.encrypt(msg, sharedKey).toString();

console.log();
console.log(ciphertext);
console.log();

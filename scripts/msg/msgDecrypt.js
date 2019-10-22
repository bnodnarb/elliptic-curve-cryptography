var CryptoJS = require("crypto-js");
var argv = require('minimist')(process.argv.slice(2));

msg = argv.msg;
sharedKey = argv.sharedKey;

var bytes  = CryptoJS.AES.decrypt(msg, sharedKey);
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log();
console.log(originalText);
console.log();

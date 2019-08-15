var CryptoJS = require("crypto-js");

var argv = require('minimist')(process.argv.slice(2));
direction = argv.direction;
msg = argv.msg;
sharedKey = argv.sharedKey;

if (direction == 'encrypt') {
  var ciphertext = CryptoJS.AES.encrypt(msg, sharedKey).toString();
  console.log(ciphertext);
}

if (direction == 'decrypt') {
  var bytes  = CryptoJS.AES.decrypt(msg, sharedKey);
  var originalText = bytes.toString(CryptoJS.enc.Utf8);
  console.log(originalText);
}

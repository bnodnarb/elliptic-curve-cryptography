var CryptoJS = require("crypto-js");

var sharedSecret = '44533c8851edcc1f7d1eea508f33ce3214783632b8b431710874d587989678c9';

var argv = require('minimist')(process.argv.slice(2));
operation = argv.op;
msg = argv.msg

if (operation == 'encrypt') {
  var ciphertext = CryptoJS.AES.encrypt(msg, sharedSecret).toString();
  console.log(ciphertext);
}

if (operation == 'decrypt') {
  var bytes  = CryptoJS.AES.decrypt(msg, sharedSecret);
  var originalText = bytes.toString(CryptoJS.enc.Utf8);
  console.log(originalText);
}

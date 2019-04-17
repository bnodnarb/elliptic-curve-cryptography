var EC = require('elliptic').ec;
var ec = new EC('secp256k1');
var SHA256 = require('crypto-js/sha256');

// Verify a message object
var argv = require('minimist')(process.argv.slice(2));
tx = argv.tx;
msgObjectToVerifyString = tx;
var msgObjectToVerify = JSON.parse(msgObjectToVerifyString);
msgToVerify = msgObjectToVerify.msg;
msgHashToVerify = SHA256(JSON.stringify(msgToVerify)).toString();
publicKeyToVerify = msgObjectToVerify.msg.fromAddress;
signatureToVerify = msgObjectToVerify.signature;
var keyFromPublic = ec.keyFromPublic(publicKeyToVerify, 'hex');
var verified = keyFromPublic.verify(msgHashToVerify, signatureToVerify);

console.log(verified);
console.log();

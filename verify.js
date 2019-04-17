var EC = require('elliptic').ec;
var ec = new EC('secp256k1');
var SHA256 = require('crypto-js/sha256');

// Verify a message object
msgObjectToVerifyString = `
{"msg":{"amount":100,"fromAddress":"049b56c1050dd7f893dacacbc1c2499b56e140b6bcd4899a52873a635b9e77d1a9f0744e84fca7712bba0ebaebd5b92481a2f013a4ac9cff3d677f619bf1291559","toAddress":null,"timestamp":1555482515000},"signature":"304402206bbe07b143aa20e0c42a21dda425d9a33c221f6680b10f0b4b693dad6e1368ac02203d11eb84e269f3e1ce28fc18f8842f1c8488154a63c0f363bfdae75fbac8686a"}
`
var msgObjectToVerify = JSON.parse(msgObjectToVerifyString);
msgToVerify = msgObjectToVerify.msg;
msgHashToVerify = SHA256(JSON.stringify(msgToVerify)).toString();
publicKeyToVerify = msgObjectToVerify.msg.fromAddress;
signatureToVerify = msgObjectToVerify.signature;
var keyFromPublic = ec.keyFromPublic(publicKeyToVerify, 'hex');
var verified = keyFromPublic.verify(msgHashToVerify, signatureToVerify);

console.log(verified);
console.log();

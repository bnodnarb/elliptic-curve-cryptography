var EC = require('elliptic').ec;
var ec = new EC('secp256k1');
var SHA256 = require('crypto-js/sha256');

// Verify a message object
msgObjectToVerifyString = '{"msg":{"amount":100,"fromAddress":"04215d7060765e3defda76c61e03e9c55daffaf317c9d836b8225298b99728ce7f09a059efc61dfda5f6c3e955216a492f12a3b2a107489572f754db7f464271ef","toAddress":null,"timestamp":1547292392000},"signature":"30450220242f8201d959249ef78eaa160330ad9cda60a77dd51592289671242646be0289022100858cd9c00c044e48ebbaa36d18831bef5bcbf2948cb441d3608c7d77702508ad"}'
var msgObjectToVerify = JSON.parse(msgObjectToVerifyString);
msgToVerify = msgObjectToVerify.msg;
msgHashToVerify = SHA256(msgToVerify).toString();
publicKeyToVerify = msgObjectToVerify.msg.fromAddress;
signatureToVerify = msgObjectToVerify.signature;
var keyFromPublic = ec.keyFromPublic(publicKeyToVerify, 'hex');
var verified = keyFromPublic.verify(msgHashToVerify, signatureToVerify);

console.log(verified);
console.log();

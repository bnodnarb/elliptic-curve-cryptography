var EC = require('elliptic').ec;
var ec = new EC('secp256k1');
var SHA256 = require('crypto-js/sha256');

// Verify a message object
msgObjectToVerifyString = `
{"msg":{"amount":100,"fromAddress":"0435f1ce84d655dbaef528eb48946108bf32d5b71a52b9182070cc564699d62028840389cdcd2fe238e7b098a61a67d939b6f561aef4b38864096ae2ca9d2cf67f","toAddress":null,"timestamp":1555482667000},"signature":"3045022100d575fdb521b4d62786026caf03907e7fcdffeeec3cff95b28009e77f7099aceb022036cbaf2c679166153fa69e01b7ac67af41962509689520b17688abe3a8980d57"}
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

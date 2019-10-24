var functions = require("../functions.js");
var argv = require('minimist')(process.argv.slice(2));

msg = argv.msg;

var msgObjectToVerify = JSON.parse(msg);
msgToVerify = msgObjectToVerify.signedMsg;
msgHashToVerify = functions.sha256(JSON.stringify(msgToVerify)).toString();
publicKeyToVerify = msgObjectToVerify.signedMsg.publicKey;
signatureToVerify = msgObjectToVerify.signature;
var keyFromPublic = functions.keyFromPublic(publicKeyToVerify,'hex');
var verified = keyFromPublic.verify(msgHashToVerify, signatureToVerify);

if (verified == true) {
  functions.outputString('Message is Valid','green','',true,true);
} else {
  functions.outputString('Message is not Valid','red','',true,true);
}

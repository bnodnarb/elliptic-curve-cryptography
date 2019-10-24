var functions = require("../functions.js");
var argv = require('minimist')(process.argv.slice(2));

var msg = argv.msg;

var msgObject = JSON.parse(msg);
var signedMsg = msgObject.signedMsg;
var publicKey = msgObject.signedMsg.publicKey;
var signature = msgObject.signature;

var msgHash = functions.sha256(JSON.stringify(signedMsg)).toString();
var keyFromPublic = functions.keyFromPublic(publicKey,'hex');
var verified = keyFromPublic.verify(msgHash, signature);

if (verified == true) {
  functions.outputString('Message is Valid','green','',true,true);
} else {
  functions.outputString('Message is not Valid','red','',true,true);
}

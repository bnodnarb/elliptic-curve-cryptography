var functions = require("../functions.js");
var argv = require('minimist')(process.argv.slice(2));

privateKey = argv.privateKey;
msg = argv.msg;

var key = functions.keyFromPrivate(privateKey);
var publicKey = key.getPublic('hex');

var msgObject = {
  'message': msg,
  'publicKey': publicKey,
  'timestamp': Math.floor(Date.now() / 1000) * 1000
};

var msgHash = functions.sha256(JSON.stringify(msgObject));
var signature = key.sign(msgHash);
var derSignature = signature.toDER('hex');

var signedMsgObject = {
  'signedMsg': msgObject,
  'signature':derSignature
}

stringOfSignedMsgObject = JSON.stringify(signedMsgObject);

functions.outputString(stringOfSignedMsgObject,'white','Signed Message: ',true,true);

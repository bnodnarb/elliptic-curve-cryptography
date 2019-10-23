var functions = require("../functions.js");
var argv = require('minimist')(process.argv.slice(2));

var msg = argv.msg;
var sharedKey = argv.sharedKey;

var decryptedMsg = functions.decryptMsg(msg,sharedKey);

functions.outputString(decryptedMsg,'white','Decrypted Message: ',true,true);

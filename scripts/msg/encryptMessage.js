var functions = require("../functions.js");
var argv = require('minimist')(process.argv.slice(2));

var msg = argv.msg;
var sharedKey = argv.sharedKey;

var encryptedMsg = functions.encryptMsg(msg,sharedKey);

functions.outputString(encryptedMsg,'white','Encrypted Message: ',true,true);

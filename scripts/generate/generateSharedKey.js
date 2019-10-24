var functions = require("../functions.js");
var argv = require('minimist')(process.argv.slice(2));

var myPrivateKey = argv.myPrivateKey;
var collaboratorPublicKey = argv.collaboratorPublicKey;

var myKey = functions.keyFromPrivate(myPrivateKey);
var collaboratorKey = functions.keyFromPublic(collaboratorPublicKey).getPublic();
var sharedKey = functions.deriveSharedKey(myKey, collaboratorKey);

functions.outputString(sharedKey,'red','Shared Key: ',true,true); // string, color, label, lineAbove, lineBelow

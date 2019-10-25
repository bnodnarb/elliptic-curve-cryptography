var functions = require("../functions.js");
var prompt = require('prompt');

var schema = {
  properties: {
    privateKey: {
      message: 'Your private key',
      required: true
    },
    publicKey: {
      message: 'Your collaborator\'s public key',
      required: true
    }
  }
};

prompt.start();

prompt.get(schema, function (err, argv) {
  var privateKey = argv.privateKey;
  var publicKey = argv.publicKey;

  var myKey = functions.keyFromPrivate(privateKey);
  var collaboratorKey = functions.keyFromPublic(publicKey).getPublic();
  var sharedKey = functions.deriveSharedKey(myKey, collaboratorKey);

  functions.outputString(sharedKey,'red','Shared Key: ',true,true);
});

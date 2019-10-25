var functions = require("../functions.js");
var prompt = require('prompt');

var schema = {
  properties: {
    message: {
      message: 'Encrypted message to encrypt',
      required: true
    },
    sharedKey: {
      message: 'Key that is known to both you and your collaborator',
      required: true
    }
  }
};

prompt.start();

prompt.get(schema, function (err, argv) {
  var message = argv.message;
  var sharedKey = argv.sharedKey;

  var decryptedMessage = functions.decryptMsg(message,sharedKey);

  functions.outputString(decryptedMessage,'white','Decrypted Message: ',true,true);
});

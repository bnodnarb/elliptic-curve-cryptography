var functions = require("../functions.js");
var prompt = require('prompt');

var schema = {
  properties: {
    message: {
      message: 'Plain text message that to encrypt',
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

  var encryptedMessage = functions.encryptMsg(message,sharedKey);

  functions.outputString(encryptedMessage,'white','Encrypted Message: ',true,true);
});

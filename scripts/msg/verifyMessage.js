var functions = require("../functions.js");
var prompt = require('prompt');

var schema = {
  properties: {
    message: {
      message: 'Message to verify',
      required: true
    }
  }
};

prompt.start();

prompt.get(schema, function (err, argv) {
  var message = argv.message;

  var messageObject = JSON.parse(message);
  var signedMessage = messageObject.signedMessage;
  var publicKey = messageObject.signedMessage.publicKey;
  var signature = messageObject.signature;

  var messageHash = functions.sha256(JSON.stringify(signedMessage)).toString();
  var keyFromPublic = functions.keyFromPublic(publicKey,'hex');
  var verified = keyFromPublic.verify(messageHash, signature);

  if (verified == true) {
    functions.outputString('Message is Valid','green','',true,true);
  } else {
    functions.outputString('Message is not Valid','red','',true,true);
  }
});

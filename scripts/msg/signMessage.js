var functions = require("../functions.js");
var prompt = require('prompt');

var schema = {
  properties: {
    message: {
      message: 'Message to sign',
      required: true
    },
    privateKey: {
      message: 'Your private key',
      required: true
    }
  }
};

prompt.start();

prompt.get(schema, function (err, argv) {
  message = argv.message;
  privateKey = argv.privateKey;

  var key = functions.keyFromPrivate(privateKey);
  var publicKey = key.getPublic('hex');

  var messageObject = {
    'message': message,
    'publicKey': publicKey,
    'timestamp': Math.floor(Date.now() / 1000) * 1000
  };

  var messageHash = functions.sha256(JSON.stringify(messageObject));
  var signature = key.sign(messageHash);
  var derSignature = signature.toDER('hex');

  var signedMessageObject = {
    'signedMessage': messageObject,
    'signature':derSignature
  }

  stringOfsignedMessageObject = JSON.stringify(signedMessageObject);

  functions.outputString(stringOfsignedMessageObject,'white','Signed Message: ',true,true);
});

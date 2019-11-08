var functions = require("./functions.js");
var prompt = require('prompt');

module.exports = {

  // generateKeysAndSeed
  generateKeysAndSeed: function() {
    var schema = {
      properties: {
        passphrase: {
          message: 'Your passphrase',
          hidden: true,
          required: false
        },
        reEnterPassphrase: {
          message: 'Re-enter your passphrase',
          hidden: true,
          required: false
        }
      }
    };

    prompt.start();
    prompt.get(schema, function (err, argv) {
      var seed = functions.generateSeed();
      var passphrase = argv.passphrase;
      var reEnterPassphrase = argv.reEnterPassphrase;

      if (passphrase != reEnterPassphrase) {
        functions.outputString('Passphrases do not match','red','',true,true);
        process.exit()
      }
      if (passphrase) {
        var sha256Seed = functions.sha256(seed + '-' + passphrase);
      } else {
        var sha256Seed = functions.sha256(seed);
      }

      var key = functions.keyFromPrivate(sha256Seed);
      var publicKey = key.getPublic('hex');
      var privateKey = key.getPrivate('hex');

      functions.outputString(seed,'red','Seed: ',true,false);
      if (passphrase) {
        functions.outputString('hidden','red','Passphrase: ',false,false);
      } else {
        functions.outputString('not set','red','Passphrase: ',false,false);
      }
      functions.outputString(privateKey,'red','Private Key: ',false,false);
      functions.outputString(publicKey,'green','Public Key: ',false,true);
    });
  },
  // END generateKeysAndSeed

  // generateKeysFromSeed
  generateKeysFromSeed: function() {
    var schema = {
      properties: {
        seed: {
          message: 'Your seed word list (separated by dashes)',
          required: true
        },
        passphrase: {
          message: 'Your passphrase',
          hidden: true,
          required: false
        },
        reEnterPassphrase: {
          message: 'Re-enter your passphrase',
          hidden: true,
          required: false
        }
      }
    };

    prompt.start();
    prompt.get(schema, function (err, argv) {
      var seed = argv.seed;
      var passphrase = argv.passphrase;
      var reEnterPassphrase = argv.reEnterPassphrase;
      if (passphrase != reEnterPassphrase) {
        functions.outputString('Passphrases do not match','red','',true,true);
        process.exit()
      }
      if (passphrase) {
        var sha256Seed = functions.sha256(seed + '-' + passphrase);
      } else {
        var sha256Seed = functions.sha256(seed);
      }

      var key = functions.keyFromPrivate(sha256Seed);
      var publicKey = key.getPublic('hex');
      var privateKey = key.getPrivate('hex');

      functions.outputString(seed,'red','Seed: ',true,false);
      if (passphrase) {
        functions.outputString('hidden','red','Passphrase: ',false,false);
      } else {
        functions.outputString('not set','red','Passphrase: ',false,false);
      }
      functions.outputString(privateKey,'red','Private Key: ',false,false);
      functions.outputString(publicKey,'green','Public Key: ',false,true);
    });
  },
  // END generateKeysFromSeed

  // generateSharedKey
  generateSharedKey: function() {
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
  },
  // END generateSharedKey

  // decryptMessage
  decryptMessage: function() {
    var schema = {
      properties: {
        message: {
          message: 'Encrypted message to decrypt',
          required: true
        },
        sharedKey: {
          message: 'Shared key that is known to both you and your collaborator',
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
  },
  // END decryptMessage

  // encryptMessage
  encryptMessage: function() {
    var schema = {
      properties: {
        message: {
          message: 'Plain text message that to encrypt',
          required: true
        },
        sharedKey: {
          message: 'Shared key that is known to both you and your collaborator',
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
  },
  // END encryptMessage

  // signMessage
  signMessage: function() {
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
  },
  // END signMessage

  // verifyMessage
  verifyMessage: function() {
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
  }
  // END verifyMessage
}

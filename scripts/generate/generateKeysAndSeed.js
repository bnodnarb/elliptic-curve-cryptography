var functions = require("../functions.js");
var prompt = require('prompt');

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

var functions = require("../functions.js");
var prompt = require('prompt');

var schema = {
  properties: {
    seed: {
      message: 'Your seed word list (separated by dashes)',
      required: true
    }
  }
};

prompt.start();
prompt.get(schema, function (err, argv) {
  var seed = argv.seed;
  var sha256Seed = functions.sha256(seed);

  var key = functions.keyFromPrivate(sha256Seed);
  var publicKey = key.getPublic('hex');
  var privateKey = key.getPrivate('hex');

  functions.outputString(seed,'red','Seed: ',true,false);
  functions.outputString(privateKey,'red','Private Key: ',false,false);
  functions.outputString(publicKey,'green','Public Key: ',false,true);
});

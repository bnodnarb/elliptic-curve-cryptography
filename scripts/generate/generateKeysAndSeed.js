var functions = require("../functions.js");

var seed = functions.generateSeed();

sha256Seed = functions.sha256(seed);

var key = functions.keyFromPrivate(sha256Seed);
var publicKey = key.getPublic('hex');
var privateKey = key.getPrivate('hex');

functions.outputString(seed,'red','Seed: ',true,true);
functions.outputString(privateKey,'red','Private Key: ',true,true);
functions.outputString(publicKey,'green','Public Key: ',true,true);

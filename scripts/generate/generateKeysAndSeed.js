var functions = require("../functions.js");

var seed = functions.generateSeed();

sha256Seed = functions.sha256(seed);

var key = functions.keyFromPrivate(sha256Seed);
var publicKey = key.getPublic('hex');
var privateKey = key.getPrivate('hex');

functions.outputString(seed,'red','Seed: ',true,false);
functions.outputString(privateKey,'red','Private Key: ',false,false);
functions.outputString(publicKey,'green','Public Key: ',false,true);

var functions = require("../functions.js");
var argv = require('minimist')(process.argv.slice(2));

var seedList = argv.seedList;
var sha256SeedList = functions.sha256(seedList);

var key = functions.keyFromPrivate(sha256SeedList);
var publicKey = key.getPublic('hex');
var privateKey = key.getPrivate('hex');

functions.outputString(seedList,'red','Seed List: ',true,true);
functions.outputString(privateKey,'red','Private Key: ',true,true);
functions.outputString(publicKey,'green','Public Key: ',true,true);

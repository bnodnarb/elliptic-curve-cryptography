var functions = require("../functions.js");
var argv = require('yargs')
    .demandOption('privateKey').alias('privateKey', 's').describe('privateKey', 'Your private key')
    .demandOption('publicKey').alias('publicKey', 'p').describe('publicKey', 'Your collaborator\'s public key')
    .help('help').alias('help', 'h')
    .version(false)
    .showHelpOnFail(false, 'argument error: run with --help')
    .argv;

var privateKey = argv.privateKey;
var publicKey = argv.publicKey;

var myKey = functions.keyFromPrivate(privateKey);
var collaboratorKey = functions.keyFromPublic(publicKey).getPublic();
var sharedKey = functions.deriveSharedKey(myKey, collaboratorKey);

functions.outputString(sharedKey,'red','Shared Key: ',true,true);

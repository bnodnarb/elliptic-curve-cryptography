var EC = require('elliptic').ec;
var ec = new EC('curve25519');
var SHA256 = require('crypto-js/sha256');
var argv = require('minimist')(process.argv.slice(2));
const chalk = require('chalk');

collaboratorPublicKey = argv.collaboratorPublicKey;
privatePhrase = argv.privatePhrase;
sha256PrivatePhrase = SHA256(privatePhrase).toString();

var key = ec.keyFromPrivate(sha256PrivatePhrase);
var publicKey = key.getPublic('hex');
var privateKey = key.getPrivate('hex');

var sharedKey = key.derive(ec.keyFromPublic(collaboratorPublicKey, 'hex').getPublic());
console.log(chalk.red(chalk.bold('sharedKey: ') + sharedKey.toString(16)));

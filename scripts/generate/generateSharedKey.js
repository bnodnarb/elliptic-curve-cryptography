var EC = require('elliptic').ec;
var ec = new EC('secp256k1');
var argv = require('minimist')(process.argv.slice(2));
const chalk = require('chalk');

myPrivateKey = argv.myPrivateKey;
collaboratorPublicKey = argv.collaboratorPublicKey;

var key = ec.keyFromPrivate(myPrivateKey);

var sharedKey = key.derive(ec.keyFromPublic(collaboratorPublicKey, 'hex').getPublic());

console.log(chalk.red(chalk.bold('sharedKey: ') + sharedKey.toString(16)));

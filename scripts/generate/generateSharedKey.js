var EC = require('elliptic').ec;
var ec = new EC('secp256k1');
var argv = require('minimist')(process.argv.slice(2));
const chalk = require('chalk');

privateKey = argv.privateKey;
publicKey = argv.publicKey;

var key = ec.keyFromPrivate(privateKey);

var sharedKey = key.derive(ec.keyFromPublic(publicKey, 'hex').getPublic());

console.log(chalk.red(chalk.bold('sharedKey: ') + sharedKey.toString(16)));

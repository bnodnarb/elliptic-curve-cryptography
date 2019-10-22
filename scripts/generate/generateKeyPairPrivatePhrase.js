var EC = require('elliptic').ec;
var ec = new EC('secp256k1');
var SHA256 = require('crypto-js/sha256');
const chalk = require('chalk');
var argv = require('minimist')(process.argv.slice(2));

privatePhrase = argv.privatePhrase;
sha256PrivatePhrase = SHA256(privatePhrase).toString();

var key = ec.keyFromPrivate(sha256PrivatePhrase);
var publicKey = key.getPublic('hex');
var privateKey = key.getPrivate('hex');

console.log(chalk.grey(chalk.bold('privatePhrase: ') + privatePhrase));
console.log(chalk.grey(chalk.bold('SHA256 of privatePhrase: ') + sha256PrivatePhrase));
console.log();
console.log(chalk.red(chalk.bold('privateKey: ') + privateKey));
console.log(chalk.green(chalk.bold('publicKey: ') + publicKey));

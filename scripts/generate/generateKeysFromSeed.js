var EC = require('elliptic').ec;
var ec = new EC('secp256k1');
var SHA256 = require('crypto-js/sha256');
const chalk = require('chalk');
var argv = require('minimist')(process.argv.slice(2));

var seedList = argv.seedList;

sha256SeedList = SHA256(seedList).toString();

var key = ec.keyFromPrivate(sha256SeedList);
var publicKey = key.getPublic('hex');
var privateKey = key.getPrivate('hex');

console.log();
console.log(seedList);
console.log(chalk.red(chalk.bold('privateKey: ') + privateKey));
console.log(chalk.green(chalk.bold('publicKey: ') + publicKey));
console.log();

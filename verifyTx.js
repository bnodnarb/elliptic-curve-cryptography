var EC = require('elliptic').ec;
var ec = new EC('secp256k1');
var SHA256 = require('crypto-js/sha256');

const chalk = require('chalk');

// Verify a message object
var argv = require('minimist')(process.argv.slice(2));
tx = argv.tx;

var txObjectToVerify = JSON.parse(tx);
txToVerify = txObjectToVerify.tx;
txHashToVerify = SHA256(JSON.stringify(txToVerify)).toString();
publicKeyToVerify = txObjectToVerify.tx.fromPublicKey;
signatureToVerify = txObjectToVerify.signature;
var keyFromPublic = ec.keyFromPublic(publicKeyToVerify, 'hex');
var verified = keyFromPublic.verify(txHashToVerify, signatureToVerify);

console.log();

if (verified == true) {
  console.log(chalk.green.bold('TX IS VALID'));
} else {
  console.log(chalk.red.bold('TX IS INVALID'));
}

console.log();

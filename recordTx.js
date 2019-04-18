var EC = require('elliptic').ec;
var ec = new EC('secp256k1');
var SHA256 = require('crypto-js/sha256');

var fs = require('fs');
const chalk = require('chalk');

// Verify a message object
var argv = require('minimist')(process.argv.slice(2));
tx = argv.tx;
msgObjectToVerifyString = tx;
var msgObjectToVerify = JSON.parse(msgObjectToVerifyString);
msgToVerify = msgObjectToVerify.msg;
msgHashToVerify = SHA256(JSON.stringify(msgToVerify)).toString();
publicKeyToVerify = msgObjectToVerify.msg.fromAddress;
signatureToVerify = msgObjectToVerify.signature;
var keyFromPublic = ec.keyFromPublic(publicKeyToVerify, 'hex');
var verified = keyFromPublic.verify(msgHashToVerify, signatureToVerify);

if (verified == true) {
  console.log(chalk.green('tx valid'));
  fs.appendFile('transactions.txt', tx + '\n', function (err) {
    if (err) throw err;
    console.log(chalk.green('tx recorded'));
    console.log();
  });
} else {
  console.log(chalk.red('tx invalid'));
  console.log(chalk.red('tx not recorded'));
  console.log();

}

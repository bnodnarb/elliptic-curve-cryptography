var EC = require('elliptic').ec;
var ec = new EC('secp256k1');
var SHA256 = require('crypto-js/sha256');

const chalk = require('chalk');

// Verify a message object
var argv = require('minimist')(process.argv.slice(2));
msg = argv.msg;

var msgObjectToVerify = JSON.parse(msg);
msgToVerify = msgObjectToVerify.msg;
msgHashToVerify = SHA256(JSON.stringify(msgToVerify)).toString();
publicKeyToVerify = msgObjectToVerify.msg.publicKey;
signatureToVerify = msgObjectToVerify.signature;
var keyFromPublic = ec.keyFromPublic(publicKeyToVerify, 'hex');
var verified = keyFromPublic.verify(msgHashToVerify, signatureToVerify);

console.log();

if (verified == true) {
  console.log(chalk.green.bold('MESSAGE IS VALID'));
  console.log()
  console.log('The signature:');
  console.log('    ' + msgObjectToVerify.signature);
  console.log('proves that the message:');
  console.log('    ' + JSON.stringify(msgToVerify));
  console.log('was signed by the ' + chalk.red('private key') + ' associated with the ' + chalk.green('public key'));
} else {
  console.log(chalk.red.bold('MSG IS INVALID'));
}

console.log();

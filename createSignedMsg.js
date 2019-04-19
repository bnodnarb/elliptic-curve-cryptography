var EC = require('elliptic').ec;
var ec = new EC('secp256k1');
var SHA256 = require('crypto-js/sha256');

// Generating a key pair from private key
var argv = require('minimist')(process.argv.slice(2));
privateKey = argv.privateKey;
msg = argv.msg;

var keyPair = ec.keyFromPrivate(privateKey);
var publicKey = keyPair.getPublic('hex');

// Create message
var msgObject = {
  'message': msg,
  'publicKey': publicKey,
  'timestamp': Math.floor(Date.now() / 1000) * 1000
};

// Sign message
var msgHash = SHA256(JSON.stringify(msgObject)).toString();
var signature = keyPair.sign(msgHash);
var derSignature = signature.toDER('hex');

// Add msg and der signature (from msgHash and signature) to message object
var signedMsgObject = {
  'msg': msgObject,
  'signature':derSignature
}

console.log();
console.log(JSON.stringify(signedMsgObject));
console.log();

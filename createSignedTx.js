var EC = require('elliptic').ec;
var ec = new EC('secp256k1');
var SHA256 = require('crypto-js/sha256');

// Generating a key pair from private key
var argv = require('minimist')(process.argv.slice(2));
fromPrivateKey = argv.fromPrivateKey;
amount = argv.amount;
toPublicKey = argv.toPublicKey;

var fromKeyPair = ec.keyFromPrivate(fromPrivateKey);
var fromPublicKey = fromKeyPair.getPublic('hex');

// Create message
var msg = {
  'amount': amount,
  'fromPublicKey': fromPublicKey,
  'toPublicKey': toPublicKey,
  'timestamp': Math.floor(Date.now() / 1000) * 1000
};

// Sign message
var msgHash = SHA256(JSON.stringify(msg)).toString();
var signature = fromKeyPair.sign(msgHash);
var derSignature = signature.toDER('hex');

// Add msg and der signature (from msgHash and signature) to message object
var msgObject = {
  'msg': msg,
  'signature':derSignature
}

console.log();
console.log(JSON.stringify(msgObject));
console.log();

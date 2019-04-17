var EC = require('elliptic').ec;
var ec = new EC('secp256k1');
var SHA256 = require('crypto-js/sha256');

// Generating a key pair from private key
var key = ec.keyFromPrivate('1d9c59b9fa1de08a353af98a540c46fb937849cdc3b30dd1afb4fb1209c87b60');
var publicKey = key.getPublic('hex');

// Create message
var msg = {
  'amount': 100,
  'fromAddress': publicKey,
  'toAddress': null,
  'timestamp': Math.floor(Date.now() / 1000) * 1000
};

// Sign message
var msgHash = SHA256(JSON.stringify(msg)).toString();
var signature = key.sign(msgHash);
var derSignature = signature.toDER('hex');

// Add msg and der signature (from msgHash and signature) to message object
var msgObject = {
  'msg': msg,
  'signature':derSignature
}

console.log(JSON.stringify(msgObject));
console.log();

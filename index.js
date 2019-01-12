var EC = require('elliptic').ec;
var ec = new EC('secp256k1');
var SHA256 = require('crypto-js/sha256');

// Generating a key pair from private key
var key = ec.keyFromPrivate('11b52264065350d40f7e44eecbdd65b7496c941fbdd4d835fa4a7be8918e6f3f');
var publicKey = key.getPublic('hex');

// Create message
var msg = {
  'amount': 100,
  'fromAddress': publicKey,
  'toAddress': null,
  'timestamp': Math.floor(Date.now() / 1000) * 1000
};

// Sign message
var msgHash = SHA256(msg).toString();
var signature = key.sign(msgHash);
var derSignature = signature.toDER('hex');

// Add msg and der signature (from msgHash and signature) to message object
var msgObject = {
  'msg': msg,
  'signature':derSignature
}

console.log(JSON.stringify(msgObject));
console.log();

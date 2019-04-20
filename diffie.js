var EC = require('elliptic').ec;
var ec = new EC('curve25519');
var SHA256 = require('crypto-js/sha256');

var argv = require('minimist')(process.argv.slice(2));
myPrivatePhrase = argv.myPrivatePhrase;

myPrivateKey = SHA256(myPrivatePhrase).toString();
var myKey = ec.keyFromPrivate(myPrivateKey);
var myPublicKey = myKey.getPublic('hex');

var privateKey = myKey.getPrivate('hex');
var key = ec.keyFromPrivate(privateKey);
var publicKey = key.getPublic('hex');

console.log();
console.log(myPublicKey);
console.log();
console.log(publicKey);


// var sharedKey1a = key1.derive(ec.keyFromPublic(publicKey2, 'hex').getPublic());
// var sharedKey2a = key2.derive(ec.keyFromPublic(publicKey1, 'hex').getPublic());

// console.log(sharedKey1a.toString(16));
// console.log(sharedKey2a.toString(16));

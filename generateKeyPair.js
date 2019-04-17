var EC = require('elliptic').ec;
var ec = new EC('secp256k1');
var SHA256 = require('crypto-js/sha256');

// Generating a public and private key from scratch
var key = ec.genKeyPair();
var publicKey = key.getPublic('hex');
var privateKey = key.getPrivate('hex');
console.log('RANDOMLY GENERATED');
console.log('Public Key: ', publicKey);
console.log('Private Key: ', privateKey);
console.log();

// Generate 256 bit string from text
console.log('FROM SCRIPT');
random = SHA256('test').toString();
var key = ec.keyFromPrivate(random);
var publicKey = key.getPublic('hex');
console.log('Public Key: ', publicKey);
console.log('Private Key: ', random);
console.log();

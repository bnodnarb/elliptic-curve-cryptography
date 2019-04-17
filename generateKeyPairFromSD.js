var EC = require('elliptic').ec;
var ec = new EC('secp256k1');
var SHA256 = require('crypto-js/sha256');

// Generate 256 bit string from text
console.log('FROM SCRIPT');
var argv = require('minimist')(process.argv.slice(2));
sd = argv.sd;
sdHash = SHA256(sd).toString();
var key = ec.keyFromPrivate(sdHash);
var publicKey = key.getPublic('hex');
console.log('Public Key: ', publicKey);
console.log('Private Key: ', sdHash);
console.log();

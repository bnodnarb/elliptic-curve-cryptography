var EC = require('elliptic').ec;
var ec = new EC('curve25519');

var argv = require('minimist')(process.argv.slice(2));
phrase = argv.phrase;

var SHA256 = require('crypto-js/sha256');
privateKey = SHA256(phrase).toString();
var key = ec.keyFromPrivate(privateKey);
var publicKey = key.getPublic('hex');

console.log(publicKey);

var EC = require('elliptic').ec;
var ec = new EC('curve25519');

// Generate keys
var key1 = ec.genKeyPair();
var key2 = ec.genKeyPair();

var privateKey1 = key1.getPrivate('hex');
var publicKey1 = key1.getPublic('hex');

var privateKey2 = key2.getPrivate('hex');
var publicKey2 = key2.getPublic('hex');

var sharedKey1a = key1.derive(ec.keyFromPublic(publicKey2, 'hex').getPublic());
var sharedKey2a = key2.derive(ec.keyFromPublic(publicKey1, 'hex').getPublic());

console.log(sharedKey1a.toString(16));
console.log(sharedKey2a.toString(16));

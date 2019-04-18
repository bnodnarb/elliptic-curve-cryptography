var EC = require('elliptic').ec;
var ec = new EC('secp256k1');
var SHA256 = require('crypto-js/sha256');

var argv = require('minimist')(process.argv.slice(2));
sd = argv.sd;

if (sd) {
  // Generate 256 bit string from text
  var generationSource = 'SD';
  sdHash = SHA256(sd).toString();
  var privateKey = sdHash;
  var key = ec.keyFromPrivate(sdHash);
  var publicKey = key.getPublic('hex');
} else {
  // Generating a public and private key from scratch
  var generationSource = 'RANDOM';
  var key = ec.genKeyPair();
  var publicKey = key.getPublic('hex');
  var privateKey = key.getPrivate('hex');
}

console.log('GENERATION: ' + generationSource);
console.log('Public Key: ', publicKey);
console.log('Private Key: ', privateKey);
console.log();

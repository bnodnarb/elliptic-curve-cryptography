var EC = require('elliptic').ec;
var ec = new EC('secp256k1');
var SHA256 = require('crypto-js/sha256');

// Generating a key pair from private key
var key = ec.keyFromPrivate('11b52264065350d40f7e44eecbdd65b7496c941fbdd4d835fa4a7be8918e6f3f');
var privateKey = key.getPrivate('hex');
var publicKey = key.getPublic('hex');

// Create message
var msg = {
  'amount': 100,
  'publicKey': publicKey
};

// Sign message
var msgHash = SHA256(msg).toString();
var signature = key.sign(msgHash);
var derSignature = signature.toDER('hex');

// Create message object
var msgObject = {
  'msg': msg,
  'msgHash': msgHash,
  'signature':derSignature
}

console.log(JSON.stringify(msgObject));
console.log();

// Verify a message object
msgObjectToVerifyString = '{"msg":{"amount":100,"publicKey":"04215d7060765e3defda76c61e03e9c55daffaf317c9d836b8225298b99728ce7f09a059efc61dfda5f6c3e955216a492f12a3b2a107489572f754db7f464271ef"},"msgHash":"4ea5c508a6566e76240543f8feb06fd457777be39549c4016436afda65d2330e","signature":"30450220242f8201d959249ef78eaa160330ad9cda60a77dd51592289671242646be0289022100858cd9c00c044e48ebbaa36d18831bef5bcbf2948cb441d3608c7d77702508ad"}'
var msgObjectToVerify = JSON.parse(msgObjectToVerifyString);
msgHashToVerify = msgObjectToVerify.msgHash;
publicKeyToVerify = msgObjectToVerify.msg.publicKey;
signatureToVerify = msgObjectToVerify.signature;
var keyFromPublic = ec.keyFromPublic(publicKeyToVerify, 'hex');
var verified = keyFromPublic.verify(msgHashToVerify, signatureToVerify);
console.log(verified);

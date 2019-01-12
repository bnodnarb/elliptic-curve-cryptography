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
var msgHash = SHA256(msg.amount + msg.publicKey).toString();
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
msgObjectToVerifyString = '{"msg":{"amount":100,"publicKey":"04215d7060765e3defda76c61e03e9c55daffaf317c9d836b8225298b99728ce7f09a059efc61dfda5f6c3e955216a492f12a3b2a107489572f754db7f464271ef"},"msgHash":"192d3a9eb738079495adc13265736a5216a2bfaeb6a7ba95b88b376cd4b46a21","signature":"3045022100fc94cc416978737108b3bb5f26bba8efdbefb55b13bef3153f3a85300dee7bcf0220126f16c521689af66cd5f41b4eb03502cf9fd856c0b2a34ee87f4ae3c7df9be6"}'
var msgObjectToVerify = JSON.parse(msgObjectToVerifyString);
msgHashToVerify = msgObjectToVerify.msgHash;
publicKeyToVerify = msgObjectToVerify.msg.publicKey;
signatureToVerify = msgObjectToVerify.signature;
var keyFromPublic = ec.keyFromPublic(publicKeyToVerify, 'hex');
var verified = keyFromPublic.verify(msgHashToVerify, signatureToVerify);
console.log(verified);

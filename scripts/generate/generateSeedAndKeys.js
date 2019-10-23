var functions = require("../functions.js");
var EC = require('elliptic').ec;
var ec = new EC('secp256k1');
var SHA256 = require('crypto-js/sha256');
const fs = require('fs');
const readline = require('readline');
const chalk = require('chalk');

const wordList = [];
const seedList = [];

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var myInterface = readline.createInterface({
  input: fs.createReadStream('generate/bip39-word-list.csv')
});

myInterface.on('line', function (line) {
  wordList.push(line);
});

myInterface.on('close', function(line) {
  for (i = 1; i <= 12; i++) {
    var randomInteger = getRndInteger(0,2047);
    var word = wordList[randomInteger];
    seedList.push(word);
  }
  var dashSeedList = seedList.join('-')

  sha256DashSeedList = functions.sha256(dashSeedList);

  var key = ec.keyFromPrivate(sha256DashSeedList);
  var publicKey = key.getPublic('hex');
  var privateKey = key.getPrivate('hex');

  functions.outputString(dashSeedList,'red','Seed List: ',true,true);
  functions.outputString(privateKey,'red','Private Key: ',true,true);
  functions.outputString(publicKey,'green','Public Key: ',true,true);
});

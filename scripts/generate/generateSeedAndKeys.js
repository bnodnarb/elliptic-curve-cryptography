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

  sha256DashSeedList = SHA256(dashSeedList).toString();

  var key = ec.keyFromPrivate(sha256DashSeedList);
  var publicKey = key.getPublic('hex');
  var privateKey = key.getPrivate('hex');

  console.log();
  console.log(dashSeedList);
  console.log(chalk.red(chalk.bold('privateKey: ') + privateKey));
  console.log(chalk.green(chalk.bold('publicKey: ') + publicKey));
  console.log();
});

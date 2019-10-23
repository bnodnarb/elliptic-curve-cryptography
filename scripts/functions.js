var EC = require('elliptic').ec;
var ec = new EC('secp256k1');
var argv = require('minimist')(process.argv.slice(2));
const chalk = require('chalk');
var SHA256 = require('crypto-js/sha256');

module.exports = {
  // crypto-js functions
  sha256: function(string) {
    return SHA256(string).toString();
  },

  // elliptic functions
  keyFromPrivate: function(privateKey) {
    return key = ec.keyFromPrivate(privateKey);
  },

  keyFromPublic: function(publicKey) {
    return ec.keyFromPublic(publicKey, 'hex').getPublic();
  },

  deriveSharedKey: function(key1, key2) {
    return key1.derive(key2).toString(16);
  },

  // console log functions
  outputString: function(string, color, label, lineAbove, lineBelow) {
    if (lineAbove) {
      console.log();
    }
    if (color == 'red') {
      console.log(chalk.red(chalk.bold(label) + string));
    }
    if (color == 'green') {
      console.log(chalk.green(chalk.bold(label) + string));
    }
    if (color == 'blue') {
      console.log(chalk.blue(chalk.bold(label) + string));
    }
    if (color == 'white') {
      console.log(chalk.white(chalk.bold(label) + string));
    }
    if (lineBelow) {
      console.log();
    }
  },
};

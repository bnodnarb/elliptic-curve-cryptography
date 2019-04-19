const readline = require('readline');
const fs = require('fs');
const chalk = require('chalk');

var argv = require('minimist')(process.argv.slice(2));
publicKey = argv.publicKey;

let rl = readline.createInterface({
    input: fs.createReadStream('transactions.txt')
});

let transactions = [];

rl.on('line', function(tx) {
    transactions.push(JSON.parse(tx));
});

rl.on('close', function(tx) {
  completed(transactions);
});

function completed(transactions) {
  var txTo = transactions.filter(function(item) { return item.tx.toPublicKey === publicKey; });
  var toAmount = 0
  for (var key in txTo) {
    var amount = txTo[key].tx.amount;
    toAmount += amount;
  }

  var txFrom = transactions.filter(function(item) { return item.tx.fromPublicKey === publicKey; });
  var fromAmount = 0
  for (var key in txFrom) {
    var amount = txFrom[key].tx.amount;
    fromAmount += amount;
  }
  console.log();
  console.log(chalk.green('TO: ' + toAmount));
  console.log(chalk.red('FROM: ' + fromAmount));
  console.log(chalk.green.bold('BALANCE: ' + (toAmount - fromAmount)));
  console.log();
}

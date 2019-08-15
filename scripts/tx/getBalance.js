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
  console.log(chalk.white('To This publicKey: ' + toAmount));
  console.log(chalk.white('From this publicKey: ' + fromAmount));
  if ((toAmount - fromAmount) >= 0) {
    console.log(chalk.green.bold('BALANCE: ' + (toAmount - fromAmount)));
  }
  if ((toAmount - fromAmount) < 0) {
    console.log(chalk.red.bold('BALANCE: ' + (toAmount - fromAmount)));
  }
  console.log();
}

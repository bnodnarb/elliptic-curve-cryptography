const readline = require('readline');
const fs = require('fs');

var argv = require('minimist')(process.argv.slice(2));
address = argv.address;

let rl = readline.createInterface({
    input: fs.createReadStream('ledger.txt')
});

let transactions = [];

rl.on('line', function(tx) {
    transactions.push(JSON.parse(tx));
});

rl.on('close', function(tx) {
  completed(transactions);
});

function completed(transactions) {
  var txTo = transactions.filter(function(item) { return item.msg.toAddress === address; });
  var toAmount = 0
  for (var key in txTo) {
    var amount = txTo[key].msg.amount;
    toAmount += amount;
  }

  var txFrom = transactions.filter(function(item) { return item.msg.fromAddress === address; });
  var fromAmount = 0
  for (var key in txFrom) {
    var amount = txFrom[key].msg.amount;
    fromAmount += amount;
  }

  console.log('TO: ' + toAmount);
  console.log('FROM: ' + fromAmount);
  console.log('BALANCE: ' + (toAmount - fromAmount));

}

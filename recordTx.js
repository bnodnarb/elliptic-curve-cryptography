var fs = require('fs');
const chalk = require('chalk');

var argv = require('minimist')(process.argv.slice(2));
tx = argv.tx;

fs.appendFile('transactions.txt', tx + '\n', function (err) {
  if (err) throw err;
  console.log(chalk.green('Transaction Saved'));
});

console.log();

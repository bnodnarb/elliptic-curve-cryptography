var fs = require('fs');

var argv = require('minimist')(process.argv.slice(2));
tx = argv.tx;

fs.appendFile('ledger.txt', tx + '\n', function (err) {
  if (err) throw err;
  console.log('Transaction Saved to Ledger');
});

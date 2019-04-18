var prompt = require('prompt');

prompt.start();

prompt.get(['fromAddressPriv', 'toAddressPub', 'amount'], function (err, result) {
  continuation(result)
});

function continuation(result) {
  console.log(result);
}

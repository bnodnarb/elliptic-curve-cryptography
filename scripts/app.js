const child_process = require('child_process');
var functions = require("./functions.js");

function runfile(filename) {
  COMMAND_SELECTED = true;
  let child = child_process.fork(filename, {
    // execArgv: ['--use-strict']  // script.js will be executed in strict mode
  })
}

COMMAND_SELECTED = false

var argv = require('yargs')
  .demandCommand()
  .command(['generateKeysAndSeed'], 'Create a new set of keys and corresponding seed\n-Requires: None, Optional: Passphrase\n', {}, (argv) => {
    runfile('./generate/generateKeysAndSeed.js');
  })
  .command(['generateKeysFromSeed'], 'Re-generate a key pair from existing seed\n-Requires: Seed, Optional: Passphrase\n', {}, (argv) => {
    runfile('./generate/generateKeysFromSeed.js');
  })
  .command(['generateSharedKey'], 'Create a shared key for encryption/decryption\n-Requires: Private key, Collaborator public key\n', {}, (argv) => {
    runfile('./generate/generateSharedKey.js');
  })
  .command(['signMessage'], 'Create a signed message\n-Requires: Private key, Message\n', {}, (argv) => {
    runfile('./msg/signMessage.js');
  })
  .command(['verifyMessage'], 'Verify a signed message\n-Requires: Signed message\n', {}, (argv) => {
    runfile('./msg/verifyMessage.js');
  })
  .command(['encryptMessage'], 'Encrypt a message\n-Requires: Shared key, Plain text message\n', {}, (argv) => {
    runfile('./msg/encryptMessage.js');
  })
  .command(['decryptMessage'], 'Decrypt a message\n-Requires: Shared key, Encrypted message\n', {}, (argv) => {
    runfile('./msg/decryptMessage.js');
  })
  .help('help').alias('help', 'h')
  .version(false)
  .showHelpOnFail(false, 'argument error: run with --help\n')
  .argv;

if (COMMAND_SELECTED != true) {
  console.log('\nNo valid command was selected: run with --help\n')
}

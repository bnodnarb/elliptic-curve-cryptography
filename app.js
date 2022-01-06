var functions = require("./scripts/functions.js");
var commands = require("./scripts/commands.js");

COMMAND_SELECTED = false

var argv = require('yargs')
  .demandCommand()
  .command(['generateKeysAndSeed'], 'Create a set of keys and corresponding seed\n-Requires: None, Optional: Passphrase\n', {}, (argv) => {
    COMMAND_SELECTED = true;
    commands.generateKeysAndSeed();
  })
  .command(['generateKeysFromSeed'], 'Re-generate a key pair from existing seed\n-Requires: Seed, Optional: Passphrase\n', {}, (argv) => {
    COMMAND_SELECTED = true;
    commands.generateKeysFromSeed();
  })
  .command(['generateSharedKey'], 'Create a shared key for encryption/decryption\n-Requires: Private key, Collaborator public key\n', {}, (argv) => {
    COMMAND_SELECTED = true;
    commands.generateSharedKey();
  })
  .command(['signMessage'], 'Create a signed message\n-Requires: Private key, Message\n', {}, (argv) => {
    COMMAND_SELECTED = true;
    commands.signMessage();
  })
  .command(['verifyMessage'], 'Verify a signed message\n-Requires: Signed message\n', {}, (argv) => {
    COMMAND_SELECTED = true;
    commands.verifyMessage();
  })
  .command(['encryptMessage'], 'Encrypt a message\n-Requires: Shared key, Plain text message\n', {}, (argv) => {
    COMMAND_SELECTED = true;
    commands.encryptMessage();
  })
  .command(['decryptMessage'], 'Decrypt a message\n-Requires: Shared key, Encrypted message\n', {}, (argv) => {
    COMMAND_SELECTED = true;
    commands.decryptMessage();
  })
  .help('help').alias('help', 'h')
  .version(false)
  .showHelpOnFail(false, 'argument error: run with --help\n')
  .argv;

if (COMMAND_SELECTED != true) {
  console.log('\nNo valid command used: run with --help\n')
}

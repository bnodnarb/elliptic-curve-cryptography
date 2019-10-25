const child_process = require('child_process');

function runfile(filename) {
  COMMAND_SELECTED = true;
  let child = child_process.fork(filename, {
    execArgv: ['--use-strict']  // script.js will be executed in strict mode
  })
}

COMMAND_SELECTED = false

var argv = require('yargs')
  .demandCommand()
  .command(['generateKeysAndSeed'], 'Create a new set of keys and corresponding seed', {}, (argv) => {
    runfile('generate/generateKeysAndSeed.js');
  })
  .command(['generateKeysFromSeed'], 'Re-generate a key pair from existing seed', {}, (argv) => {
    runfile('generate/generateKeysFromSeed.js');
  })
  .command(['generateSharedKey'], 'Create a shared key for encryption/decryption', {}, (argv) => {
    runfile('generate/generateSharedKey.js');
  })
  .help('help').alias('help', 'h')
  .version(false)
  .showHelpOnFail(false, 'argument error: run with --help\n')
  .argv;

if (COMMAND_SELECTED != true) {
  console.log('\nNo valid command was selected: run with --help\n')
}

// ONE OF THE WORDS CAN BE TRUE - IN SEED
// Seed: injury-TRUE-spring-poverty-repair-galaxy-mushroom-nice-monster-enact-benefit-payment
// same word can be used twice in seed: hover-purpose-muscle-kid-measure-divorce-slot-insect-awake-drum-genius-measure
